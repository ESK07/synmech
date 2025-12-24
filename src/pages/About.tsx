import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Lightbulb, 
  Shield, 
  ArrowRight,
  Building2,
  Factory,
  Zap,
  Globe
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative problem-solving to deliver forward-thinking solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Our multi-disciplinary teams work seamlessly together, combining expertise for comprehensive results.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our dealings, building trust through transparency.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in every project we undertake.",
  },
];

const industries = [
  { icon: Building2, name: "Construction & Infrastructure" },
  { icon: Factory, name: "Manufacturing & Industrial" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Globe, name: "Technology & Digital" },
];

const team = [
  { name: "Dr. Sarah Chen", role: "Chief Executive Officer", expertise: "Strategic Leadership" },
  { name: "Michael Roberts", role: "Chief Technology Officer", expertise: "Software & Systems" },
  { name: "Dr. James Okonkwo", role: "Director of Engineering", expertise: "Civil Engineering" },
  { name: "Elena Rodriguez", role: "Head of Operations", expertise: "Industrial Engineering" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | SynerMech Private Limited</title>
        <meta 
          name="description" 
          content="Learn about SynerMech's mission to unify engineering disciplines. Discover our vision, values, and the expert team driving innovation in integrated engineering solutions." 
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                About SynerMech
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Engineering the Future, Together
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SynerMech Private Limited is an integrated engineering company that unites all 
                engineering disciplines under one ecosystem, delivering comprehensive solutions 
                that drive progress and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Unified Approach to Engineering Excellence
                </h2>
                <p className="text-muted-foreground mb-4">
                  Founded with a vision to break down silos in the engineering industry, SynerMech 
                  brings together experts from 10 different engineering disciplines to collaborate 
                  on complex, multi-faceted projects.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our integrated platform enables seamless communication and coordination between 
                  civil, mechanical, electrical, software, and other engineering teams, resulting 
                  in solutions that are more comprehensive, efficient, and innovative.
                </p>
                <p className="text-muted-foreground mb-6">
                  From initial consultancy to project execution, training, and ongoing support, 
                  we provide end-to-end engineering services that meet the highest international 
                  standards.
                </p>
                <Link to="/services">
                  <Button variant="default" size="lg" className="group">
                    Our Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 p-8">
                  <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-6">
                        <span className="text-primary-foreground font-bold text-4xl">S</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">SynerMech</h3>
                      <p className="text-muted-foreground">Unifying Engineering Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver innovative, integrated engineering solutions that drive sustainable 
                  development and create lasting value for our clients, partners, and communities. 
                  We strive to be the trusted partner for organizations seeking comprehensive 
                  engineering expertise across multiple disciplines.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in integrated engineering services, recognized for our 
                  ability to unite diverse engineering disciplines to solve the world's most complex 
                  challenges. We envision a future where collaboration across engineering fields 
                  is the norm, not the exception.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Principles That Guide Us
              </h2>
              <p className="text-muted-foreground">
                Our core values define who we are and how we approach every project and relationship.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <value.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Industry Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving Diverse Industries
              </h2>
              <p className="text-muted-foreground">
                Our expertise spans across multiple sectors, enabling us to deliver tailored 
                solutions for various industry needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <industry.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">
                Our leadership brings together decades of experience across all engineering disciplines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all group"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-accent mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how SynerMech can help you achieve your engineering objectives.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
