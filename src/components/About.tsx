import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Shield, Target } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge className="mb-4">About Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Building the Future of{" "}
            <span className="text-primary">
              Business AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Founded in 2024, Core8 Technologies is on a mission to democratize business growth through intelligent AI solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Core8 Technologies, we started with a simple observation: small and medium businesses in India were losing customers because they couldn't respond fast enough. Traditional solutions were too expensive, too complex, or simply didn't work on WhatsApp - where their customers actually were.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's why we built <span className="text-primary font-semibold">ChatPort</span> - our flagship product that brings enterprise-level AI automation to every business. Today, ChatPort is helping 500+ businesses never miss a customer again, and we're just getting started with our vision for accessible AI solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Businesses</div>
              </div>
              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Daily Conversations</div>
              </div>
              <div className="bg-accent/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="Core8 Technologies Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Founded</div>
                <div className="text-lg font-semibold">2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Mission & Values</h3>
            <p className="text-lg text-muted-foreground">
              Guided by principles that drive innovation and customer success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Customer-Centric",
                description: "We start with ChatPort as our flagship product, perfecting one solution before expanding to others",
                color: "primary"
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "Pushing the boundaries of what AI can do for small businesses across India",
                color: "secondary"
              },
              {
                icon: Users,
                title: "Accessible AI",
                description: "Making enterprise-level technology affordable and easy to use for every business",
                color: "accent"
              },
              {
                icon: Shield,
                title: "Trust & Security",
                description: "Your data and your customers' privacy are our top priorities",
                color: "primary"
              }
            ].map((value, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-${value.color}/10 flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 text-${value.color}`} />
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
