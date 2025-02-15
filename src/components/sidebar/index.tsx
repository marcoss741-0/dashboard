import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";

export function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted-40">
      <div className="flex flex-col">
        <header>
          <Sheet>
            <SheetTrigger>
              <Button>Abrir</Button>
            </SheetTrigger>
            <SheetContent>
              <nav>
                <Link href="#">
                  <span>Logo</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
