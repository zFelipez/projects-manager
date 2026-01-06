import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "./status-badge";
  
type ProjectCardProps = {
  title: string;
  description: string;
  action: string;
  status: string;
  footer: string;
};

export function ProjectCard({
  title,
  description,
  action,
  status,
  footer,
}: ProjectCardProps) {
  return (
    <Card className=" w-[500px] h-[200px] ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          {" "}
          <Link href={`/projects/${action}`}>
            <Button> Detalhes </Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          {" "}
          <span className="font-bold">Status:</span>{" "}
          <StatusBadge status={status} />
        </p>
      </CardContent>
      <CardFooter>
        <p>
          {" "}
          <span className="font-bold">Ultima vez atualizado em:</span>{" "}
          <Badge className="bg-secondary text-primary hover:bg-secondary/80">
            {footer}
          </Badge>
        
        </p>
      </CardFooter>
    </Card>
  );
}
