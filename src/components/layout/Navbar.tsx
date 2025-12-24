import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const departments = [
  { name: "Civil Engineering", href: "/departments/civil" },
  { name: "Mechanical Engineering", href: "/departments/mechanical" },
  { name: "Electrical & Electronics", href: "/departments/electrical" },
  { name: "Software & Systems", href: "/departments/software" },
  { name: "Mechatronics Engineering", href: "/departments/mechatronics" },
  { name: "Telecommunications", href: "/departments/telecommunications" },
  { name: "Industrial Engineering", href: "/departments/industrial" },
  { name: "Environmental Engineering", href: "/departments/environmental" },
  { name: "Mining Engineering", href: "/departments/mining" },
  { name: "Chemical Engineering", href: "/departments/chemical" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/syn.png"
              alt="SynerMech Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">SynerMech</span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                Private Limited
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.slice(0, 2).map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link to={link.href}>
                      <NavigationMenuLink
                        className={cn(
                          "h-10 px-4 flex items-center rounded-md text-sm font-medium transition hover:bg-accent/10",
                          isActive(link.href) && "text-accent"
                        )}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-1 p-4 lg:grid-cols-2">
                      {departments.map((dept) => (
                        <Link
                          key={dept.href}
                          to={dept.href}
                          className="p-3 rounded-md hover:bg-accent/10"
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.slice(2, -1).map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link to={link.href}>
                      <NavigationMenuLink
                        className={cn(
                          "h-10 px-4 flex items-center rounded-md text-sm font-medium transition hover:bg-accent/10",
                          isActive(link.href) && "text-accent"
                        )}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact">
              <Button variant="accent" size="sm" className="ml-4">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 hover:bg-accent/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
