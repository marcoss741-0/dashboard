import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DollarSign, UserRoundPlus } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const SalesOverview = () => {
  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-primary">
            Ultimos Clientes
          </CardTitle>
          <UserRoundPlus className="ml-auto w-5 h-5" />
        </div>
        <CardDescription>Ultimos Clientes Cadastrados 24hrs.</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/marcoss741-0.png"
              alt="Avatar"
            />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold">Marcos</span> comprou um produto por
            R$ 100,00
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/marcoss741-0.png"
              alt="Avatar"
            />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold">Marcos</span> comprou um produto por
            R$ 100,00
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/marcoss741-0.png"
              alt="Avatar"
            />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold">Marcos</span> comprou um produto por
            R$ 100,00
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/marcoss741-0.png"
              alt="Avatar"
            />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold">Marcos</span> comprou um produto por
            R$ 100,00
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default SalesOverview;
