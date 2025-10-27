import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with modern frameworks and best practices",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, user-friendly interfaces and experiences",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always learning and implementing cutting-edge technologies",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          I'm a passionate developer who loves turning ideas into reality through clean code and thoughtful design.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 mx-auto">
                  <skill.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-center">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default About;
