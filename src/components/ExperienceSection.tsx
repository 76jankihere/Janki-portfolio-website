
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  company,
  location,
  period,
  responsibilities,
  skills
}) => {
  return (
    <div className="mb-12 last:mb-0 group">
      <div className="timeline-dot bg-portfolio-blue group-hover:scale-125 transition-all duration-300"></div>
      <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-portfolio-blue h-1"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <Briefcase className="h-5 w-5 text-portfolio-blue mr-2" />
                <h3 className="text-xl font-bold text-portfolio-navy">{title}</h3>
              </div>
              <p className="text-portfolio-gray flex items-center">
                <MapPin className="h-4 w-4 text-portfolio-gray mr-2" />
                {company} | {location}
              </p>
            </div>
            <span className="time-period mt-2 md:mt-0 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {period}
            </span>
          </div>

          <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-portfolio-blue">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-portfolio-gray">
                {responsibility}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-50 text-portfolio-blue border-none hover:bg-blue-100 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Aeronace Consultancy Services LLC",
      location: "Sheridan, Wyoming, USA",
      period: "Feb 2026 — Present",
      responsibilities: [
        "Architected full-stack platforms using React/Next.js and Django/Node.js on AWS (Lambda, EC2, S3) with Terraform IaC — cutting deployment inconsistencies by 40% and reducing release cycles from days to hours.",
        "Designed and deployed distributed microservices and event-driven backend jobs in Python, enabling scalable processing of 3× previous transaction volume with zero additional infrastructure.",
        "Owned PostgreSQL schema design end-to-end — optimized queries, restructured indexes, and implemented automated debugging to bring average API response time down by 35%.",
        "Collaborated in Agile sprints to decompose features into user stories, maintained CI/CD via GitHub Actions, delivering features 25% faster with zero production rollbacks."
      ],
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Django", "Python", "REST APIs", "PostgreSQL", "MongoDB", "AWS", "Terraform", "Docker", "CI/CD", "Agile"]
    },
    {
      title: "Software Engineer",
      company: "NovaHire Tech Solutions Inc.",
      location: "Sarasota, Florida, USA",
      period: "Oct 2025 — Feb 2026",
      responsibilities: [
        "Built and maintained full-stack web applications using React, Node.js, and TypeScript — improved page load times by 20% and cut UI bug reports in half through targeted performance optimizations.",
        "Designed a Python-driven automation layer using agentic workflow frameworks, eliminating repetitive processes and cutting manual sales operations effort by 20% within the first month.",
        "Implemented containerized deployments with Docker and managed CI/CD pipelines via Drone/GitHub Actions — standardized environment configs reduced deployment debugging by 3–4 hours per cycle.",
        "Participated in sprint planning and feature decomposition, writing acceptance criteria and collaborating with QA to ship production-ready features on schedule every two-week cycle."
      ],
      skills: ["React", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS", "AWS Lambda", "EC2", "S3", "CloudWatch", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Agile"]
    },
    {
      title: "Assistant Professor & Software Engineer",
      company: "Charotar University of Science & Technology",
      location: "Gujarat, India",
      period: "Aug 2021 — Dec 2023",
      responsibilities: [
        "Streamlined a billing and payments microservice using Python and FastAPI — reduced API call latency by 30% and eliminated 95% of pipeline downtime caused by usage exhaustion.",
        "Built and optimized a high-availability billing microservice with distributed event processing using Python and FastAPI.",
        "Delivered full-stack data solutions integrating JWT authentication, REST APIs, and FastAPI backend services supporting 1000+ end users across cross-functional teams.",
        "Taught industry-relevant courses in Python, Java, Cloud Computing, and RDBMS; mentored AI/ML student research contributing to peer-reviewed publications."
      ],
      skills: ["Python", "FastAPI", "REST APIs", "JWT", "PostgreSQL", "SQL", "ETL Pipelines", "Microservices", "AWS", "Agile", "Teaching", "AI/ML Research"]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-50 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b5563' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <Briefcase className="h-8 w-8 text-portfolio-blue" />
          </div>
          <h2 className="section-title mb-0">Professional Experience</h2>
        </div>
        <p className="section-subtitle">
          4+ years shipping production full-stack systems across startups and academia — measurable impact on latency, scale, and release velocity
        </p>

        <div className="mt-16 timeline-container">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
