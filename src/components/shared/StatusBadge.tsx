import { cn } from "@/src/lib/utils";
import { OrderStatus } from "@/src/types/order";

type StatusBadgeProps = {
  status: OrderStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize",
        status === "pending" && "text-yellow-700 border-yellow-300 bg-yellow-50",
        status === "processing" && "text-blue-700 border-blue-300 bg-blue-50",
        status === "shipped" && "text-purple-700 border-purple-300 bg-purple-50",
        status === "delivered" && "text-green-700 border-green-300 bg-green-50",
        status === "cancelled" && "text-red-700 border-red-300 bg-red-50"
      )}
    >
      {status}
    </span>
  );
}