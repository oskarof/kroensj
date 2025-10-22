import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background">
      <Link to="/" className="flex items-center gap-2 px-4 md:px-6">
        <span className="font-semibold">Krønsj</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/bli-medlem" className={navigationMenuTriggerStyle()}>
              Bli medlem
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/timeplan" className={navigationMenuTriggerStyle()}>
              Timeplan
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/events" className={navigationMenuTriggerStyle()}>
              Events
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/priser" className={navigationMenuTriggerStyle()}>
              Priser
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/om-oss" className={navigationMenuTriggerStyle()}>
              Om oss
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/kontakt" className={navigationMenuTriggerStyle()}>
              Kontakt
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4 px-4 md:px-6">
        <Button asChild variant="outline">
          <Link to="/logg-inn">Logg inn</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
