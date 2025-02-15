import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";

export function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted-40">
      <div className="flex flex-col">
        <header>
          <Sheet>
            <SheetTrigger>
              <Button>Abrir</Button>
            </SheetTrigger>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
