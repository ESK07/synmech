import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const departments = [
  { name: "Civil Engineering", href: "/departments/civil" },
  { name: "Mechanical Engineering", href: "/departments/mechanical" },
  { name: "Electrical & Electronics", href: "/departments/electrical" },
  { name: "Software & Systems", href: "/departments/software" },
  { name: "Mechatronics Engineering", href: "/departments/mechatronics" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* COMPANY INFO */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/syn.png"
                alt="SynerMech Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">SynerMech</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">
                  Private Limited
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Unifying engineering excellence across all disciplines. Your trusted
              partner for integrated engineering solutions, consultancy, and innovation.
            </p>

            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DEPARTMENTS */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.href}>
                  <Link to={dept.href} className="text-primary-foreground/70 hover:text-accent">
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">
                  Counaghtcort flat,CNR Paul Kruger and Jeff Masemola
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">
                  +27 655060626
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">
                  www.synermech.co.zw
                  sales@synermech.co.zw
                  engineering@synermech.co.zw
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} SynerMech Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a className="text-primary-foreground/60 hover:text-accent">Privacy Policy</a>
              <a className="text-primary-foreground/60 hover:text-accent">Terms of Service</a>
              <a className="text-primary-foreground/60 hover:text-accent">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
