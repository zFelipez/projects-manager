import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


type ProjectCardProps = {
    title: string;
    description: string;
    action: string;
    content: string;
    footer: string;
}


export  function ProjectCard({title, description, action, content, footer}: ProjectCardProps){


    return (

        <Card className=" w-[500px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>{action}</CardAction>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>   
    )
}