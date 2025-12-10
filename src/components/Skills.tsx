import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C#", "Java","C#",""]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TailwindCSS", "HTML/CSS","Bootstrap","Material UI",]
    },
    {
      title: "Backend",
      skills: [".NET", "Node.js", "Express.js", "REST API","Django","Flask","FastAPI","NestJS","Spring Boot","Java","C"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "GitHub", "Linux","Ubuntu-server","Postman","AWS CLI"]
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "OpenCV", "MediaPipe","PyTorch", "HuggingFace","Gemini API", "RAG", "LLM"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-card border border-border text-foreground hover:bg-muted"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
