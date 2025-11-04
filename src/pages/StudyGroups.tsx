import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CreateGroupDialog from "@/components/study-groups/CreateGroupDialog";
import { Session } from "@supabase/supabase-js";

interface StudyGroup {
  id: string;
  name: string;
  description: string;
  created_at: string;
  member_count?: number;
}

export default function StudyGroups() {
  const [groups, setGroups] = useState<StudyGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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
    if (session) {
      fetchGroups();
    }
  }, [session]);

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase
        .from("study_groups")
        .select(`
          *,
          group_members(count)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const groupsWithCount = data?.map(group => ({
        ...group,
        member_count: group.group_members?.[0]?.count || 0
      })) || [];

      setGroups(groupsWithCount);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading groups",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGroupCreated = () => {
    setCreateDialogOpen(false);
    fetchGroups();
  };

  if (!session) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Virtual Study Groups</h1>
          <p className="text-muted-foreground">
            Join collaborative study spaces with real-time discussions
          </p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Group
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading groups...</div>
      ) : groups.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No study groups yet</h3>
            <p className="text-muted-foreground mb-4">Create your first study group to get started</p>
            <Button onClick={() => setCreateDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Create Group
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.id} className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => navigate(`/study-groups/${group.id}`)}>
              <CardHeader>
                <CardTitle>{group.name}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {group.member_count} {group.member_count === 1 ? 'member' : 'members'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <CreateGroupDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onGroupCreated={handleGroupCreated}
      />
    </div>
  );
}