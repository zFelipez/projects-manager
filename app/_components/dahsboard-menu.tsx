
interface DashboardMenuProps {
    title: string;
}


export function DashboardMenu({ title }: DashboardMenuProps) {
    return (
         <h1 className="text-2xl font-bold bg-primary w-full h-[50px] flex items-center justify-center rounded-sm text-white">
            {title}
         </h1>
    )
}