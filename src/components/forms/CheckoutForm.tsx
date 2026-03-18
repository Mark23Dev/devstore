import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";

export function CheckoutForm() {
  return (
    <div className="space-y-8 rounded-2xl border bg-background p-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">
          Customer Information
        </h2>
        <p className="text-sm text-muted-foreground">
          Enter your details to complete the order.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Mark" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Saruni" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="mark@example.com" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+254..." />
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">
          Shipping Details
        </h2>
        <p className="text-sm text-muted-foreground">
          Tell us where the order should be delivered.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Street, building, house number" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Nairobi" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="region">Region / Area</Label>
          <Input id="region" placeholder="Westlands" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input id="postalCode" placeholder="00100" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" placeholder="Kenya" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Order Notes</Label>
        <Textarea
          id="notes"
          placeholder="Add delivery instructions or any extra notes..."
          rows={4}
        />
      </div>
    </div>
  );
}