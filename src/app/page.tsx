import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full font-sans">
      <div className="text-3xl font-[Bagel_Fat_One]">
        UNDER CONSTRUCTION
      </div>
      {/* <NavigationMenu className="max-w-full">
        <NavigationMenuList asChild className="h-16 border-b border-black flex items-center">
          <div className="flex space-x-8">
            <div>
              <NavigationMenuItem className="text-3xl font-[Bagel_Fat_One]">
                RIVER BIERY
              </NavigationMenuItem>
            </div>
            <div className="flex">
              <NavigationMenuItem>
                <NavigationMenuLink>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden flex justify-center">
        <div className="flex flex-col space-y-3 justify-center items-center w-24">
          <Button className="w-full">
            About
          </Button>
          <Button className="w-full">
            Projects
          </Button>
          <Button className="w-full">
            Contact
          </Button>
        </div>
      </div> */}
    </div>
  );
}
