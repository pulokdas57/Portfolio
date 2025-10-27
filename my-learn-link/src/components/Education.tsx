import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const Education = () => {
  const experiences = [
    {
      type: "education",
      title: "B.E in Computer Science and Engineering",
      institution: "AMC Engineering College",
      period: "Expected - 2026",
      description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
      icon: GraduationCap,
    },
    {
      type: "work",
      title: "Tech Learner | Academic Experience",
      institution: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Explored various subjects like Computer Networking, Theory of Computation, and Research Methodology — applying classroom concepts into practical understanding through small tasks and experiments.ˀ",
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Team Contributor | College Activities",
      institution: "Startup Solutions",
      period: "2020 - 2022",
      description: "Participated in team-based coding and research activities, gaining confidence in collaboration, communication, and project coordination.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Education & Experience</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My journey through learning and professional growth
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="md:ml-20 border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="absolute left-6 md:left-2 top-8 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center -translate-x-1/2 md:-translate-x-12 shadow-lg">
                      <exp.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    
                    <div className="md:pl-4">
                      <div className="flex flex-wrap items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-2">{exp.institution}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
