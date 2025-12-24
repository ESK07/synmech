import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Users, Globe } from "lucide-react";

const opportunities = [
  { icon: Briefcase, title: "Engineering Positions", description: "Join our team of experts across all 10 engineering disciplines." },
  { icon: GraduationCap, title: "Graduate Programs", description: "Launch your career with our structured graduate development program." },
  { icon: Users, title: "Internships", description: "Gain hands-on experience working on real-world engineering projects." },
  { icon: Globe, title: "Consultants & Freelancers", description: "Collaborate with us on specialized projects and engagements." },
];

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | SynerMech Private Limited</title>
        <meta name="description" content="Join SynerMech's team of engineering experts. Explore career opportunities, graduate programs, and internships across all engineering disciplines." />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">Careers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Join the SynerMech Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Build your engineering career with a company that values innovation, collaboration, and professional growth.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opp, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all text-center group">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <opp.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{opp.title}</h3>
                  <p className="text-sm text-muted-foreground">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-hero-gradient text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">Send your resume and join our network of engineering professionals.</p>
            <Link to="/contact"><Button variant="hero" size="xl">Apply Now <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
