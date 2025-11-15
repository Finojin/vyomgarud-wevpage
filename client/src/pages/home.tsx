import { motion } from "framer-motion";
import { Target, Navigation, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/Military_drone_hero_shot_4605cc0a.png";
import surveillanceDrone from "@assets/generated_images/Tactical_surveillance_drone_8337bd0e.png";
import deliveryDrone from "@assets/generated_images/Autonomous_delivery_drone_043b9abe.png";
import reconDrone from "@assets/generated_images/Reconnaissance_UAV_system_8e827f2d.png";
import combatDrone from "@assets/generated_images/Tactical_combat_drone_3f065d0c.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
        
        <div className="relative z-30 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Advanced UAV Systems</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  VyomGarud
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Military-Grade Precision.
                <br />
                <span className="text-primary">Autonomous Excellence.</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Delivering cutting-edge UAV systems with unparalleled reliability and advanced autonomous capabilities for defense and commercial applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="group"
                data-testid="button-get-started"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
                className="backdrop-blur-sm"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg blur-3xl" />
            <img 
              src={heroImage} 
              alt="Advanced UAV Drone System"
              className="relative rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeIn} className="space-y-6 text-center">
            <div className="inline-block px-4 py-2 rounded-md bg-card border border-card-border">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About VyomGarud</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Pioneering the Future of
              <span className="text-primary"> Unmanned Aviation</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              VyomGarud is at the forefront of UAV technology, delivering military-grade drone systems engineered for precision, reliability, and autonomous operation. Our mission is to empower defense and commercial sectors with cutting-edge aerial solutions that redefine operational excellence.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <div className="space-y-4 p-8 rounded-lg bg-card border border-card-border hover-elevate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Defense Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built to military specifications with battle-tested reliability and advanced tactical capabilities for mission-critical operations.
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-lg bg-card border border-card-border hover-elevate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Commercial Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Scalable solutions for surveillance, delivery, and reconnaissance across industries demanding precision and efficiency.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="capabilities" className="py-20 md:py-32 bg-card/30">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-md bg-card border border-card-border">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Advanced UAV Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Precision-engineered systems designed for the most demanding operational environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Tactical Surveillance",
                description: "Real-time intelligence gathering with advanced sensor arrays and long-endurance flight capabilities.",
                image: surveillanceDrone,
                icon: Target
              },
              {
                title: "Autonomous Delivery",
                description: "Precision cargo transport with GPS-guided navigation and obstacle avoidance systems.",
                image: deliveryDrone,
                icon: Navigation
              },
              {
                title: "Reconnaissance Systems",
                description: "Multi-spectrum imaging and data collection for comprehensive situational awareness.",
                image: reconDrone,
                icon: Shield
              },
              {
                title: "Tactical Defense",
                description: "Military-grade systems with advanced targeting and mission execution capabilities.",
                image: combatDrone,
                icon: Target
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={fadeIn}
                data-testid={`card-capability-${index}`}
              >
                <Card className="group overflow-hidden h-full hover-elevate transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={capability.image} 
                      alt={capability.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <capability.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-md bg-card border border-card-border">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Key Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Military-Grade Performance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Precision Targeting",
                description: "Sub-meter accuracy with advanced GPS and sensor fusion technology for mission-critical operations."
              },
              {
                icon: Navigation,
                title: "Autonomous Navigation",
                description: "AI-powered flight control with real-time obstacle detection and adaptive path planning."
              },
              {
                icon: Shield,
                title: "Battle-Tested Reliability",
                description: "Ruggedized construction meeting MIL-STD standards for extreme operational environments."
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={fadeIn}
                className="text-center space-y-4 group"
                data-testid={`highlight-${index}`}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
                  <highlight.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-card/30">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-md bg-card border border-card-border">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your UAV requirements? Our team is here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeIn} className="space-y-8">
              <Card className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-muted-foreground">Reach out to us for inquiries and support</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">contact@vyomgarud.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+91 8881444693</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">India</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@company.com" 
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company name" 
                              {...field}
                              value={field.value ?? ""}
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your requirements..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">VyomGarud</div>
              <p className="text-sm text-muted-foreground">
                Advanced UAV Systems | Military-Grade Precision
              </p>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>&copy; 2025 VyomGarud. All rights reserved.</p>
              <p className="mt-1">Pioneering the Future of Unmanned Aviation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
