
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: string;
  colorClass: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon, colorClass }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4 mx-auto`}>
          <span className="text-white text-xl" dangerouslySetInnerHTML={{ __html: icon }}></span>
        </div>
        <h3 className="text-xl font-bold text-portfolio-navy mb-4 text-center">{title}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              className="bg-blue-50 text-portfolio-blue hover:bg-blue-100 border-none py-1.5 px-3 transition-colors duration-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "C#", "SQL"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>',
      colorClass: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Django", ".NET", "Spring Boot", "REST APIs", "GraphQL", "JWT", "Microservices"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path></svg>',
      colorClass: "bg-gradient-to-br from-indigo-500 to-indigo-700"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
      colorClass: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "DynamoDB"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
      colorClass: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, EC2, S3, CloudWatch)", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Drone"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',
      colorClass: "bg-gradient-to-br from-cyan-500 to-cyan-700"
    },
    {
      title: "Distributed Systems",
      skills: ["Kafka", "Event Streaming", "WebSockets", "Distributed Computing", "Message Queues"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><circle cx="4" cy="4" r="2"></circle><circle cx="20" cy="4" r="2"></circle><circle cx="4" cy="20" r="2"></circle><circle cx="20" cy="20" r="2"></circle><path d="M9 9 5.5 5.5M15 9l3.5-3.5M9 15l-3.5 3.5M15 15l3.5 3.5"></path></svg>',
      colorClass: "bg-gradient-to-br from-amber-500 to-amber-700"
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow Lite", "Prompt Engineering", "Gen AI Integration", "Agentic Workflows", "NLTK", "spaCy", "Transformers"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="M16 6 8 14"></path><path d="M16 14 8 6"></path></svg>',
      colorClass: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
      title: "Practices & Tools",
      skills: ["Agile", "Scrum", "TDD", "Code Review", "Git", "Jira", "Wireframing"],
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z"></path></svg>',
      colorClass: "bg-gradient-to-br from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="section-container relative z-10">
        <h2 className="section-title">
          Technical Skills
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </h2>
        <p className="section-subtitle">
          My technical toolkit includes a diverse range of languages, frameworks, and technologies
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              colorClass={category.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
