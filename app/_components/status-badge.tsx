import { Badge } from "@/components/ui/badge";


export function StatusBadge({ status }: { status: string }) {
    return (
        <Badge className={`text-primary hover:bg-secondary/80 ${status === 'ACTIVE' ? 'bg-green-500' : status === 'PAUSED' ? 'bg-yellow-500' : 'bg-red-500'}`}>
            {status}
        </Badge>
    )
}