import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BarChart3, Workflow, ArrowRight, Check } from "lucide-react";

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge className="mb-4">Our Solutions</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet <span className="text-primary">ChatPort</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our flagship WhatsApp automation solution that transforms how you handle customer interactions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* ChatPort - Featured */}
          <Card className="lg:col-span-2 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-scale-in">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Flagship Product
                </Badge>
              </div>
              <CardTitle className="text-3xl">ChatPort</CardTitle>
              <CardDescription className="text-lg">
                AI-powered WhatsApp automation that never sleeps
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Transform your WhatsApp into a 24/7 automated customer service powerhouse. ChatPort handles bookings, inquiries, and support while you focus on what matters.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Instant automated responses",
                  "Smart appointment booking",
                  "Multi-language support",
                  "Custom conversation flows",
                  "Analytics dashboard",
                  "CRM integration"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-whatsapp/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-whatsapp" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">90%</div>
                  <div className="text-xs text-muted-foreground">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-xs text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5x</div>
                  <div className="text-xs text-muted-foreground">More Leads</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button className="flex-1 bg-gradient-primary shadow-glow">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="flex-1">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          {/* Other Solutions */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-3">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">AI Analytics</CardTitle>
                <CardDescription>
                  Deep insights into customer behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    Conversation analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    Performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    Custom reports
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-3">
                  <Workflow className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Workflow Automation</CardTitle>
                <CardDescription>
                  Automate repetitive business tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    Task automation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    Integration hub
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    Smart triggers
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
