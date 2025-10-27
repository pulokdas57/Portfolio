import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I'm always open to new opportunities and collaborations
        </p>
        
        <Card className="border-2">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">pulokdas@zohomail.in</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">+919383042034</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">Banglore,Karnataka,India</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
