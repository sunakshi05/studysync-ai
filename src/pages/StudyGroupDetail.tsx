import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Users, MessageSquare, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GroupChat from "@/components/study-groups/GroupChat";
import GroupMembers from "@/components/study-groups/GroupMembers";
import PeerReview from "@/components/study-groups/PeerReview";
import { Session } from "@supabase/supabase-js";

export default function StudyGroupDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [group, setGroup] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate("/auth");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (session && id) {
      fetchGroupDetails();
    }
  }, [id, session]);

  const fetchGroupDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("study_groups")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setGroup(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading group",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return null;
  }

  if (loading) {
    return <div className="text-center py-12">Loading group...</div>;
  }

  if (!group) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Group not found</p>
        <Button onClick={() => navigate("/study-groups")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Groups
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate("/study-groups")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">{group.name}</h1>
          <p className="text-muted-foreground">{group.description}</p>
        </div>
      </div>

      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">
            <MessageSquare className="mr-2 h-4 w-4" />
            Discussion
          </TabsTrigger>
          <TabsTrigger value="members">
            <Users className="mr-2 h-4 w-4" />
            Members
          </TabsTrigger>
          <TabsTrigger value="reviews">
            <Star className="mr-2 h-4 w-4" />
            Peer Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat">
          <Card className="p-6">
            <GroupChat groupId={id!} userId={session.user.id} />
          </Card>
        </TabsContent>

        <TabsContent value="members">
          <Card className="p-6">
            <GroupMembers groupId={id!} />
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card className="p-6">
            <PeerReview groupId={id!} userId={session.user.id} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}