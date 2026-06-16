
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, TrendingUp, Code, Award } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectProps {
  title: string;
  description: string[];
  technologies: string[];
  period: string;
  link?: string;
  featured?: boolean;
  icon?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  period,
  link,
  featured = false,
  icon
}) => {
  // Get icon component based on string name
  const getIcon = () => {
    switch(icon) {
      case 'star': return <Star className="text-amber-500" />;
      case 'trending-up': return <TrendingUp className="text-green-500" />;
      case 'code': return <Code className="text-blue-600" />;
      case 'award': return <Award className="text-purple-600" />;
      default: return null;
    }
  };

  return (
    <Card className={`border-none ${featured ? 'shadow-xl ring-2 ring-blue-200' : 'shadow-md'} hover:shadow-lg transition-all h-full flex flex-col transform hover:-translate-y-2 duration-300 overflow-hidden group`}>
      {featured && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold py-1.5 px-4 text-center flex items-center justify-center gap-2">
          <Star className="h-3.5 w-3.5" />
          <span>FEATURED PROJECT</span>
        </div>
      )}
      <CardContent className="p-6 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {icon && (
              <span className="p-1.5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                {getIcon()}
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{title}</h3>
          </div>
          <span className="time-period mt-2 md:mt-0 text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100 group-hover:bg-blue-100 transition-colors whitespace-nowrap">
            {period}
          </span>
        </div>
        
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {description.map((point, index) => (
            <li key={index} className="text-portfolio-gray">
              {point}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" 
              className="bg-blue-50 text-blue-700 border-none transition-all hover:bg-blue-100 transform hover:scale-105 cursor-default">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      {link && (
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" 
            className="w-full bg-white hover:bg-blue-50 border-blue-500 text-blue-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all" 
            asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />View Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const projects = [
    {
      title: "AI Chat Assistant",
      period: "Jun '25 — Aug '25",
      description: [
        "Full-stack real-time chat app with React/TypeScript front-end and Node.js/Express backend",
        "Implemented JWT auth, WebSockets, and REST APIs deployed on AWS",
        "Practiced TDD with RSpec-style testing patterns for robust coverage"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "JWT", "REST APIs", "AWS", "TDD"],
      link: "https://github.com/76jankihere",
      featured: true,
      icon: "star"
    },
    {
      title: "EzShopping: AI Shopping Assistant",
      period: "Jan '25 — May '25",
      description: [
        "Full-stack e-commerce platform with React frontend and FastAPI backend",
        "Built scalable REST API endpoints for product-to-query matching using NLP",
        "PostgreSQL-backed with documented system architecture and ETL pipelines"
      ],
      technologies: ["React", "FastAPI", "Python", "PostgreSQL", "REST APIs", "NLP", "Transformers", "Docker"],
      link: "https://rarnold97.github.io/ezshopping_site/",
      featured: true,
      icon: "trending-up"
    },
    {
      title: "Employee Management Portal",
      period: "Jan '24 — Apr '24",
      description: [
        "Full-stack web application for employee onboarding and attendance management",
        "Built with C#, ASP.NET Core MVC backend and Angular/TypeScript frontend",
        "SQL Server backing with role-based access and reporting dashboards"
      ],
      technologies: ["C#", "ASP.NET Core MVC", "Angular", "TypeScript", "SQL Server"],
      link: "https://github.com/76jankihere",
      featured: true,
      icon: "code"
    },
    {
      title: "Xperi: Augmented Reality EdTech App",
      period: "Jan '24 — Apr '24",
      description: [
        "Interactive AR education platform with real-time 3D scene recognition",
        "Deployed object detection models on TPU, improving runtime by 30%"
      ],
      technologies: ["AR", "TensorFlow Lite", "Scene Capturing", "AI Object Detection", "TPU"],
      link: "https://github.com/76jankihere/Distributed-Computing---Xperi",
      icon: "trending-up"
    },
    {
      title: "Cloud-Powered Online Examination System",
      period: "Mar '18 — Apr '18",
      description: [
        "Serverless exam platform using AWS S3/Lambda with role-based access control",
        "Reduced system latency by 20% using event-driven cloud architecture"
      ],
      technologies: ["AWS S3", "Lambda", "DynamoDB", "API Gateway", "RBAC", "Event-driven"],
      link: "#",
      icon: "award"
    },
    {
      title: "IoT Automatic Plant Watering System",
      period: "Mar '19 — Apr '19",
      description: [
        "Moisture-sensing IoT system with real-time dashboard backed by MongoDB",
        "Automated irrigation logic cut water usage by 30%"
      ],
      technologies: ["IoT", "Arduino", "Python", "MongoDB", "Raspberry Pi", "WebSockets"],
      link: "#",
      icon: "trending-up"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>
      </div>
      
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 to-transparent transform -skew-x-12 opacity-70"></div>
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent transform skew-x-12 opacity-70"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="section-title mb-2 animate-fade-in">Featured Projects</h2>
          <div className="w-24 h-1 bg-portfolio-blue animate-fade-in animation-delay-300"></div>
          <p className="section-subtitle mt-4 animate-fade-in animation-delay-500">
            Showcasing some of my most significant technical projects and their impacts
          </p>
        </div>

        {/* Featured Projects Carousel for mobile */}
        {isMobile && featuredProjects.length > 0 && (
          <div className="mb-8 animate-fade-in animation-delay-700">
            <h3 className="text-xl font-bold text-portfolio-navy mb-4 pl-2">Spotlight Projects</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredProjects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="p-1">
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        period={project.period}
                        link={project.link}
                        featured={project.featured}
                        icon={project.icon}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        )}
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in animation-delay-700">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              period={project.period}
              link={project.link}
              featured={project.featured}
              icon={project.icon}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center animate-fade-in animation-delay-1000">
          {visibleProjects < projects.length && (
            <Button 
              onClick={() => setVisibleProjects(projects.length)}
              className="bg-portfolio-blue hover:bg-blue-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              View All Projects ({projects.length})
            </Button>
          )}
          
          {visibleProjects === projects.length && visibleProjects > 3 && (
            <Button 
              onClick={() => setVisibleProjects(3)}
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
