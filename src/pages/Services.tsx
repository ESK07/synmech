import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
  PenTool,
  FolderKanban,
  Hammer,
  Cpu,
  Wrench,
  GraduationCap,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Engineering Consultancy",
    description: "Expert guidance and strategic advice for complex engineering challenges across all disciplines.",
    features: [
      "Technical feasibility studies",
      "Risk assessment and mitigation",
      "Regulatory compliance consulting",
      "Technology selection and evaluation",
      "Expert witness services",
    ],
  },
  {
    icon: PenTool,
    title: "Design & Analysis",
    description: "Comprehensive design services using state-of-the-art tools and methodologies.",
    features: [
      "Conceptual and detailed design",
      "3D modeling and simulation",
      "Structural and thermal analysis",
      "CAD/CAE services",
      "Design optimization",
    ],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "End-to-end project management ensuring successful delivery on time and within budget.",
    features: [
      "Project planning and scheduling",
      "Resource management",
      "Cost estimation and control",
      "Quality assurance",
      "Stakeholder communication",
    ],
  },
  {
    icon: Hammer,
    title: "Construction & Implementation",
    description: "Professional execution of engineering projects from groundbreaking to commissioning.",
    features: [
      "Site supervision and management",
      "Contractor coordination",
      "Quality control and inspection",
      "Safety management",
      "Commissioning and handover",
    ],
  },
  {
    icon: Cpu,
    title: "Automation & Digital Solutions",
    description: "Smart technology integration for improved efficiency, productivity, and insights.",
    features: [
      "Industrial automation",
      "IoT and smart systems",
      "Digital twin development",
      "Data analytics and AI",
      "Custom software solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Optimization",
    description: "Ongoing support to ensure peak performance and extended asset lifecycles.",
    features: [
      "Preventive maintenance programs",
      "Condition monitoring",
      "Performance optimization",
      "Retrofit and upgrade services",
      "Emergency response support",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description: "Knowledge transfer and skill development for engineering teams and organizations.",
    features: [
      "Technical training programs",
      "Certification courses",
      "Workshop facilitation",
      "Knowledge management",
      "Mentorship programs",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your challenges, goals, and requirements" },
  { step: "02", title: "Analysis", description: "Technical assessment and solution development" },
  { step: "03", title: "Design", description: "Detailed engineering design and planning" },
  { step: "04", title: "Execution", description: "Professional implementation and project delivery" },
  { step: "05", title: "Support", description: "Ongoing maintenance and optimization services" },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Engineering Services | SynerMech Private Limited</title>
        <meta 
          name="description" 
          content="SynerMech offers comprehensive engineering services: consultancy, design & analysis, project management, construction, automation, maintenance, and training." 
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Comprehensive Engineering Solutions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From initial consultancy to ongoing maintenance, we provide end-to-end 
                engineering services that drive success across all disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Deliver Results
              </h2>
              <p className="text-muted-foreground">
                Our proven methodology ensures consistent, high-quality outcomes for every engagement.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[200px] max-w-[250px] p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-3">{step.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your engineering needs and discover how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/departments">
                <Button variant="hero-outline" size="xl">
                  Explore Departments
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
