import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent", description: "We'll get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | SynerMech Private Limited</title>
        <meta name="description" content="Get in touch with SynerMech for engineering consultancy, project inquiries, and partnership opportunities." />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required className="h-12" />
                    <Input type="email" placeholder="Email Address" required className="h-12" />
                  </div>
                  <Input placeholder="Subject" required className="h-12" />
                  <Textarea placeholder="Your Message" required className="min-h-[150px]" />
                  <Button type="submit" variant="accent" size="lg" disabled={loading} className="w-full sm:w-auto">
                    {loading ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office Address</h3>
                      <p className="text-muted-foreground text-sm">Counaghtcort flat,CNR Paul Kruger and Jeff Masemola</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm">+27 655060626</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm">www.synermech.co.zw<br />sales@synermech.co.zw<br />engineering@synermech.co.zw</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
