import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Clock, Zap } from "lucide-react";

const CaseStudies = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Owner, Moments Photography Studio",
      industry: "Wedding Photography",
      image: "PS",
      quote: "ChatPort transformed how we handle booking inquiries. We were missing 30% of potential clients who messaged after hours. Now we capture every lead automatically!",
      metrics: [
        { label: "Revenue Increase", value: "₹85,000/month", icon: TrendingUp },
        { label: "Time Saved", value: "15 hrs/week", icon: Clock },
        { label: "Lead Capture", value: "+40%", icon: Zap }
      ],
      rating: 5
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Director, HealthCare Plus Clinic",
      industry: "Medical Services",
      image: "RK",
      quote: "Our patients love the instant appointment booking. ChatPort handles routine queries, appointment scheduling, and reminders - allowing our staff to focus on patient care.",
      metrics: [
        { label: "Automation Rate", value: "90%", icon: Zap },
        { label: "Patient Satisfaction", value: "4.8/5", icon: Star },
        { label: "Staff Efficiency", value: "+60%", icon: TrendingUp }
      ],
      rating: 5
    },
    {
      name: "Anjali Desai",
      role: "Founder, Glow Beauty Salon",
      industry: "Beauty & Wellness",
      image: "AD",
      quote: "Best investment we made this year! ChatPort books appointments, answers FAQs about our services, and even sends reminders. Our no-show rate dropped by 50%.",
      metrics: [
        { label: "Bookings", value: "+120/month", icon: TrendingUp },
        { label: "No-shows", value: "-50%", icon: Zap },
        { label: "Customer Queries", value: "24/7", icon: Clock }
      ],
      rating: 5
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge className="mb-4">Success Stories</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Real Results from{" "}
            <span className="text-primary">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how ChatPort is transforming businesses across India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {testimonial.industry}
                </Badge>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="space-y-3 pt-4 border-t">
                  {testimonial.metrics.map((metric, metricIdx) => (
                    <div
                      key={metricIdx}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <metric.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                      <span className="font-bold text-primary">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-primary rounded-2xl shadow-2xl animate-scale-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary-foreground mb-2">
              Trusted Across Industries
            </h3>
            <p className="text-primary-foreground/80">
              ChatPort works for businesses of all types
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Healthcare", count: "150+" },
              { label: "Beauty & Wellness", count: "120+" },
              { label: "Photography", count: "80+" },
              { label: "Education", count: "100+" }
            ].map((industry, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  {industry.count}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {industry.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
