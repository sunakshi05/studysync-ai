import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Review {
  id: string;
  content: string;
  rating: number;
  created_at: string;
  reviewer: {
    full_name: string;
  };
  reviewed_user: {
    full_name: string;
  };
}

interface PeerReviewProps {
  groupId: string;
  userId: string;
}

export default function PeerReview({ groupId, userId }: PeerReviewProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [selectedMember, setSelectedMember] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("5");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchReviews();
    fetchMembers();
  }, [groupId]);

  const fetchReviews = async () => {
    try {
      const { data: reviewsData, error } = await supabase
        .from("peer_reviews")
        .select("*")
        .eq("group_id", groupId)
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (!reviewsData || reviewsData.length === 0) {
        setReviews([]);
        return;
      }

      const userIds = [...new Set([
        ...reviewsData.map(r => r.reviewer_id),
        ...reviewsData.map(r => r.reviewed_user_id)
      ])];

      const { data: profilesData } = await supabase
        .from("profiles")
        .select("id, full_name")
        .in("id", userIds);

      const profilesMap = new Map(profilesData?.map(p => [p.id, p]) || []);
      
      const enrichedReviews = reviewsData.map(review => ({
        ...review,
        reviewer: profilesMap.get(review.reviewer_id) || { full_name: "Unknown" },
        reviewed_user: profilesMap.get(review.reviewed_user_id) || { full_name: "Unknown" }
      }));

      setReviews(enrichedReviews);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading reviews",
        description: error.message,
      });
    }
  };

  const fetchMembers = async () => {
    try {
      const { data: membersData, error } = await supabase
        .from("group_members")
        .select("user_id")
        .eq("group_id", groupId)
        .neq("user_id", userId);

      if (error) throw error;

      if (!membersData || membersData.length === 0) {
        setMembers([]);
        return;
      }

      const userIds = membersData.map(m => m.user_id);
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("id, full_name")
        .in("id", userIds);

      const enrichedMembers = membersData.map(member => {
        const profile = profilesData?.find(p => p.id === member.user_id);
        return {
          user_id: member.user_id,
          profiles: profile || { id: member.user_id, full_name: "Unknown" }
        };
      });

      setMembers(enrichedMembers);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading members",
        description: error.message,
      });
    }
  };

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMember || !content.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("peer_reviews")
        .insert({
          group_id: groupId,
          reviewer_id: userId,
          reviewed_user_id: selectedMember,
          content: content.trim(),
          rating: parseInt(rating),
        });

      if (error) throw error;

      toast({
        title: "Review submitted",
        description: "Your peer review has been submitted successfully.",
      });

      setContent("");
      setSelectedMember("");
      setRating("5");
      fetchReviews();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error submitting review",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Submit Peer Review</h3>
        <form onSubmit={submitReview} className="space-y-4">
          <div className="space-y-2">
            <Label>Select Member</Label>
            <Select value={selectedMember} onValueChange={setSelectedMember}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a member to review" />
              </SelectTrigger>
              <SelectContent>
                {members.map((member) => (
                  <SelectItem key={member.user_id} value={member.user_id}>
                    {member.profiles?.full_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Rating</Label>
            <Select value={rating} onValueChange={setRating}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 4, 3, 2, 1].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Star" : "Stars"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Review</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your feedback about this member's contributions..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" disabled={loading || !selectedMember}>
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Recent Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">
                      {review.reviewer.full_name} reviewed {review.reviewed_user.full_name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}