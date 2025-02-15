import {
  HomeIcon,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-18 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col itemns-center gap-4 px-2 py-6">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
              prefetch={false}
            >
              <Package className="h-5 w-5 transition-all" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5 transition-all" />
                  <span className="sr-only">Inicio</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  <span className="sr-only">Pedidos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Produtos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all" />
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  <span className="sr-only">Configurações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col gap-2 justify-center items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  prefetch={false}
                >
                  <LogOut className="h-5 w-5 transition-all text-red-600" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="sm:hidden flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex items-center h-16 px-4 gap-4 sm:border-0 sm:px-6 sm:h-auto sm:bg-transparent sm:static">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="h-6 w-6" />
                <span className="sr-only">Abrir / Fechar Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full gap-2"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground *:transition-all *:hover:text-foreground"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5 transition-all" />
                  <span className="">Inicio</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground *:transition-all *:hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  <span className="">Pedidos</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground *:transition-all *:hover:text-foreground"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="">Produtos</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground *:transition-all *:hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all" />
                  <span className="">Clientes</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground *:transition-all *:hover:text-foreground"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  <span className="">Configurações</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
