import { Button } from "@/components/ui/button";
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

        <Card className=" w-[500px] h-[200px] ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction> <Button>{action}</Button></CardAction>
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