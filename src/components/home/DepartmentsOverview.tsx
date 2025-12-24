import { Link } from "react-router-dom";
import { 
  Building2, 
  Cog, 
  Zap, 
  Code, 
  Bot, 
  Radio, 
  Factory, 
  Leaf, 
  Mountain, 
  FlaskConical,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    name: "Civil Engineering",
    icon: Building2,
    description: "Infrastructure, construction, and structural solutions",
    href: "/departments/civil",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "Mechanical Engineering",
    icon: Cog,
    description: "Machine design, manufacturing, and thermal systems",
    href: "/departments/mechanical",
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    name: "Electrical & Electronics",
    icon: Zap,
    description: "Power systems, circuits, and electronic design",
    href: "/departments/electrical",
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    name: "Software & Systems",
    icon: Code,
    description: "Software development, IT solutions, and digital platforms",
    href: "/departments/software",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    name: "Mechatronics",
    icon: Bot,
    description: "Robotics, automation, and integrated systems",
    href: "/departments/mechatronics",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    name: "Telecommunications",
    icon: Radio,
    description: "Network infrastructure and communication systems",
    href: "/departments/telecommunications",
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    name: "Industrial Engineering",
    icon: Factory,
    description: "Process optimization and production management",
    href: "/departments/industrial",
    color: "from-rose-500/20 to-rose-600/20",
  },
  {
    name: "Environmental Engineering",
    icon: Leaf,
    description: "Sustainability, waste management, and green solutions",
    href: "/departments/environmental",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    name: "Mining Engineering",
    icon: Mountain,
    description: "Resource extraction and geological engineering",
    href: "/departments/mining",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    name: "Chemical Engineering",
    icon: FlaskConical,
    description: "Process design and chemical manufacturing",
    href: "/departments/chemical",
    color: "from-pink-500/20 to-pink-600/20",
  },
];

export function DepartmentsOverview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            10 Engineering Disciplines, One Vision
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of engineering departments, each staffed with 
            industry experts ready to tackle your most challenging projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {departments.map((dept, index) => (
            <Link
              key={dept.href}
              to={dept.href}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <dept.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {dept.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/departments">
            <Button variant="outline" size="lg" className="group">
              View All Departments
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
