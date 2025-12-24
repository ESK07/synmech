import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Factory, Zap, Leaf } from "lucide-react";

const projects = [
  { title: "Metro Rail Extension Project", industry: "Transportation", department: "Civil Engineering", description: "25km elevated metro rail corridor with 12 stations serving 500,000 daily passengers.", icon: Building2 },
  { title: "Smart Manufacturing Facility", industry: "Automotive", department: "Mechatronics", description: "Fully automated production line with IoT integration achieving 40% efficiency improvement.", icon: Factory },
  { title: "Renewable Energy Park", industry: "Energy", department: "Electrical Engineering", description: "50MW solar and wind hybrid installation with advanced grid integration.", icon: Zap },
  { title: "Water Treatment Plant", industry: "Municipal", department: "Environmental Engineering", description: "State-of-the-art facility treating 50 million gallons daily with 99.9% purification.", icon: Leaf },
  { title: "Enterprise Digital Platform", industry: "Technology", department: "Software Engineering", description: "Custom ERP system serving 10,000+ users across 20 global locations.", icon: Factory },
  { title: "Petrochemical Plant Optimization", industry: "Chemical", department: "Chemical Engineering", description: "Process optimization achieving 15% throughput increase and 20% energy reduction.", icon: Building2 },
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects & Case Studies | SynerMech Private Limited</title>
        <meta name="description" content="Explore SynerMech's portfolio of successful engineering projects across civil, mechanical, electrical, and software disciplines." />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Projects & Case Studies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover how we've helped organizations achieve their engineering goals through multi-disciplinary collaboration.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all group">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">{project.industry}</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">{project.department}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-hero-gradient text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Have a Project in Mind?</h2>
            <Link to="/contact"><Button variant="hero" size="xl">Start a Conversation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
