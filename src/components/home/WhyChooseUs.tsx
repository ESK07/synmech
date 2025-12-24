import { Lightbulb, Users, Target, Shield, Rocket, Globe } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies and methodologies to deliver forward-thinking engineering solutions.",
  },
  {
    icon: Users,
    title: "Collaborative Expertise",
    description: "Our multi-disciplinary teams work together seamlessly, bringing diverse perspectives to every project.",
  },
  {
    icon: Target,
    title: "Precision & Quality",
    description: "Every project is executed with meticulous attention to detail and adherence to international standards.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "We build long-term relationships based on transparency, reliability, and consistent delivery.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "From startups to enterprises, our solutions scale with your growth and evolving needs.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "We operate with international best practices, ensuring world-class quality in every engagement.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why SynerMech
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Engineering Excellence Through{" "}
              <span className="text-gradient">Collaboration</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just solve engineering challenges—we transform them into opportunities 
              for innovation. Our unified approach combines expertise from all engineering 
              disciplines to deliver comprehensive solutions that drive real results.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <feature.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
