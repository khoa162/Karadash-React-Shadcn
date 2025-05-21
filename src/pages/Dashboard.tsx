import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  dashboardStats,
  pendingSuppliers,
  pendingEvents,
  reportedPosts,
} from "@/data/dashboardStats";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.title} className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Suppliers & Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border">
          <CardHeader>
            <CardTitle>Pending Suppliers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="flex items-center justify-between rounded-md border px-4 py-2 bg-muted"
              >
                <span className="text-sm font-medium">{supplier.name}</span>
                <Button size="sm" variant="outline">
                  Approve
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border">
          <CardHeader>
            <CardTitle>Pending Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between rounded-md border px-4 py-2 bg-muted"
              >
                <span className="text-sm font-medium">{event.name}</span>
                <Button size="sm" variant="outline">
                  {event.status}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Reported Posts */}
      <Card className="border">
        <CardHeader>
          <CardTitle>Reported Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reportedPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between rounded-md border px-4 py-2 bg-muted"
              >
                <span className="text-sm font-medium">{post.title}</span>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Open Modal Button */}
      <div className="flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Open Report Modal
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card text-card-foreground border rounded-xl shadow-xl p-6 w-full max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Reported Content</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mb-4">
                These are flagged items from the community.
              </DialogDescription>
            </DialogHeader>
            <div className="text-sm space-y-2 leading-relaxed">
              <div><span className="font-medium">Post ID:</span> #987654</div>
              <div><span className="font-medium">Reason:</span> Spam / misleading links</div>
              <div><span className="font-medium">Reporter:</span> fakeuser@mail.com</div>
              <div><span className="font-medium">Status:</span> Under review</div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}