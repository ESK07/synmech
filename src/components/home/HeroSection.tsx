import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Geometric Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-primary-foreground/80 text-sm font-medium">Integrated Engineering Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Unifying Engineering Excellence{" "}
            <span className="text-gradient">Across All Disciplines</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            SynerMech is your trusted partner for comprehensive engineering solutions. 
            We unite 10 engineering disciplines under one ecosystem to deliver innovation, 
            expertise, and collaboration at every scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/departments">
              <Button variant="hero" size="xl" className="group">
                Explore Departments
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "10+", label: "Engineering Disciplines" },
              { value: "500+", label: "Projects Completed" },
              { value: "150+", label: "Expert Engineers" },
              { value: "25+", label: "Years Combined Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
      </div>
    </section>
  );
}
