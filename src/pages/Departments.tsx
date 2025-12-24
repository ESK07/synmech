import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
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
    description: "Comprehensive civil engineering solutions including structural design, construction management, infrastructure development, and urban planning.",
    services: ["Structural Analysis", "Construction Management", "Urban Planning", "Infrastructure Design"],
    href: "/departments/civil",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "Mechanical Engineering",
    icon: Cog,
    description: "Expert mechanical engineering services covering machine design, thermal systems, HVAC, manufacturing processes, and product development.",
    services: ["Machine Design", "HVAC Systems", "Manufacturing", "Product Development"],
    href: "/departments/mechanical",
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    name: "Electrical & Electronics Engineering",
    icon: Zap,
    description: "Full-spectrum electrical engineering including power systems, circuit design, embedded systems, and renewable energy solutions.",
    services: ["Power Systems", "Circuit Design", "Embedded Systems", "Renewable Energy"],
    href: "/departments/electrical",
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    name: "Software & Systems Engineering",
    icon: Code,
    description: "Cutting-edge software solutions including custom application development, system integration, cloud services, and digital platforms.",
    services: ["Custom Software", "System Integration", "Cloud Services", "Digital Platforms"],
    href: "/departments/software",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    name: "Mechatronics Engineering",
    icon: Bot,
    description: "Integrated mechatronics solutions combining mechanical, electrical, and software engineering for robotics and automation systems.",
    services: ["Robotics", "Automation", "Control Systems", "IoT Solutions"],
    href: "/departments/mechatronics",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    name: "Telecommunications Engineering",
    icon: Radio,
    description: "Advanced telecommunications services including network design, wireless systems, fiber optics, and communication infrastructure.",
    services: ["Network Design", "Wireless Systems", "Fiber Optics", "5G Solutions"],
    href: "/departments/telecommunications",
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    name: "Industrial Engineering",
    icon: Factory,
    description: "Industrial engineering expertise in process optimization, supply chain management, quality control, and lean manufacturing.",
    services: ["Process Optimization", "Supply Chain", "Quality Control", "Lean Manufacturing"],
    href: "/departments/industrial",
    color: "from-rose-500/20 to-rose-600/20",
  },
  {
    name: "Environmental Engineering",
    icon: Leaf,
    description: "Sustainable environmental engineering solutions including waste management, water treatment, air quality, and green technology.",
    services: ["Waste Management", "Water Treatment", "Air Quality", "Green Technology"],
    href: "/departments/environmental",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    name: "Mining Engineering",
    icon: Mountain,
    description: "Comprehensive mining engineering services covering resource extraction, geological surveys, mine planning, and safety systems.",
    services: ["Resource Extraction", "Geological Surveys", "Mine Planning", "Safety Systems"],
    href: "/departments/mining",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    name: "Chemical Engineering",
    icon: FlaskConical,
    description: "Chemical engineering expertise in process design, petrochemicals, pharmaceuticals, and materials engineering.",
    services: ["Process Design", "Petrochemicals", "Pharmaceuticals", "Materials Engineering"],
    href: "/departments/chemical",
    color: "from-pink-500/20 to-pink-600/20",
  },
];

export default function Departments() {
  return (
    <>
      <Helmet>
        <title>Engineering Departments | SynerMech Private Limited</title>
        <meta 
          name="description" 
          content="Explore SynerMech's 10 engineering departments: Civil, Mechanical, Electrical, Software, Mechatronics, Telecommunications, Industrial, Environmental, Mining, and Chemical Engineering." 
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Departments
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                10 Engineering Disciplines, Unified Excellence
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each department brings specialized expertise while working collaboratively 
                with others to deliver comprehensive, multi-disciplinary engineering solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Link
                  key={dept.href}
                  to={dept.href}
                  className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 card-hover"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative flex gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                        <dept.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {dept.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dept.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-accent font-medium">
                        Explore Department <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Multi-Disciplinary Expertise?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Our departments collaborate seamlessly to deliver integrated solutions 
              for complex engineering challenges.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
