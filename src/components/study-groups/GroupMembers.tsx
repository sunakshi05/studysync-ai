import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Member {
  id: string;
  role: string;
  joined_at: string;
  profiles: {
    full_name: string;
  };
}

interface GroupMembersProps {
  groupId: string;
}

export default function GroupMembers({ groupId }: GroupMembersProps) {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchMembers();
  }, [groupId]);

  const fetchMembers = async () => {
    try {
      const { data: membersData, error } = await supabase
        .from("group_members")
        .select("*")
        .eq("group_id", groupId)
        .order("joined_at", { ascending: true });

      if (error) throw error;

      if (!membersData || membersData.length === 0) {
        setMembers([]);
        setLoading(false);
        return;
      }

      const userIds = membersData.map(m => m.user_id);
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("id, full_name")
        .in("id", userIds);

      const profilesMap = new Map(profilesData?.map(p => [p.id, p]) || []);
      
      const enrichedMembers = membersData.map(member => ({
        ...member,
        profiles: profilesMap.get(member.user_id) || { full_name: "Unknown" }
      }));

      setMembers(enrichedMembers);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading members",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading members...</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Group Members ({members.length})</h3>
      <div className="space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-3 rounded-lg border">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {member.profiles?.full_name?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{member.profiles?.full_name || "Unknown"}</p>
                <p className="text-sm text-muted-foreground">
                  Joined {new Date(member.joined_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Badge variant={member.role === "admin" ? "default" : "secondary"}>
              {member.role}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}