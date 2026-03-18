import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

export function StoreSettingsForm() {
  return (
    <div className="space-y-8 rounded-2xl border bg-background p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">Store Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your store profile, branding, and contact details.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="storeName">Store Name</Label>
          <Input id="storeName" defaultValue="DevStore" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="storeDescription">Store Description</Label>
          <Textarea
            id="storeDescription"
            defaultValue="A modern full-stack e-commerce platform for developer gear and tech workspace products."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="storeEmail">Support Email</Label>
          <Input id="storeEmail" type="email" defaultValue="support@devstore.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="storePhone">Support Phone</Label>
          <Input id="storePhone" defaultValue="+254700000000" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency">Currency</Label>
          <Input id="currency" defaultValue="KES" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Store Location</Label>
          <Input id="location" defaultValue="Nairobi, Kenya" />
        </div>
      </div>

      <div>
        <Button>Save Settings</Button>
      </div>
    </div>
  );
}