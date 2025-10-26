import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Play, Users, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-whatsapp/10 text-whatsapp border-whatsapp/20 hover:bg-whatsapp/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Automation Platform
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Democratize Business Growth Through{" "}
              <span className="text-primary">
                Intelligent AI
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Core8 Technologies delivers enterprise-level AI solutions for small and medium businesses. Our flagship product,{" "}
              <span className="text-primary font-semibold">ChatPort</span>, automates WhatsApp conversations 24/7 - handling bookings, inquiries, and customer service automatically.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-glow text-lg">
                Get Started with ChatPort
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Businesses
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-bold text-lg">99%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <div className="font-bold text-lg">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Chat Interface */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto max-w-md">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card border-2 border-primary/20 rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-whatsapp animate-pulse-glow" />
                  <span className="text-sm font-medium">Automated Reply</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border-2 border-secondary/20 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Smart Booking</span>
                </div>
              </div>

              {/* Mobile Chat Mockup */}
              <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border-8 border-foreground/10">
                {/* Phone Header */}
                <div className="bg-whatsapp p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-whatsapp-foreground/20 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-whatsapp-foreground">
                        ChatPort AI
                      </div>
                      <div className="text-xs text-whatsapp-foreground/80">
                        Online
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-muted/30 p-6 space-y-4 min-h-[400px]">
                  <div className="flex justify-start animate-slide-in-right">
                    <div className="bg-background rounded-2xl rounded-tl-none p-4 max-w-[80%] shadow-md">
                      <p className="text-sm">
                        Hi! I'd like to book an appointment for tomorrow
                      </p>
                      <span className="text-xs text-muted-foreground">
                        10:30 AM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                    <div className="bg-whatsapp rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-md">
                      <p className="text-sm text-whatsapp-foreground">
                        Great! I can help you with that. What time works best
                        for you?
                      </p>
                      <span className="text-xs text-whatsapp-foreground/80">
                        10:30 AM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-start animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
                    <div className="bg-background rounded-2xl rounded-tl-none p-4 max-w-[80%] shadow-md">
                      <p className="text-sm">Around 2 PM would be perfect</p>
                      <span className="text-xs text-muted-foreground">
                        10:31 AM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end animate-slide-in-right" style={{ animationDelay: "0.9s" }}>
                    <div className="bg-whatsapp rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-md">
                      <p className="text-sm text-whatsapp-foreground">
                        Perfect! ✅ Your appointment is confirmed for tomorrow
                        at 2:00 PM. You'll receive a reminder 1 hour before.
                      </p>
                      <span className="text-xs text-whatsapp-foreground/80">
                        10:31 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
