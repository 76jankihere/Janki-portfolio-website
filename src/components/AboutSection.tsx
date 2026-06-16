
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection: React.FC = () => {
  const qualities = [
    { title: "4+ Years Experience", description: "Shipping production full-stack systems" },
    { title: "AWS Certified", description: "Cloud Practitioner — Lambda, EC2, S3" },
    { title: "API Architect", description: "REST & GraphQL with Node.js, Python" },
    { title: "Gen AI Builder", description: "Agentic workflows & AI-assisted dev" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-blue-300"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-blue-300"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title relative inline-block">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-portfolio-blue"></span>
        </h2>
        <p className="section-subtitle">
          Software Engineer with 4+ years building REST & GraphQL APIs, React front-ends, and AWS-based CI/CD pipelines for cross-functional teams
        </p>

        <div className="mt-12">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="mb-4 text-lg leading-relaxed">
                  I'm a <span className="highlight font-semibold">Software Engineer</span> with 4+ years of experience architecting full-stack platforms using <span className="highlight font-semibold">React/Next.js</span> and <span className="highlight font-semibold">Node.js/Django</span> on AWS — delivering scalable microservices that handle <span className="highlight font-semibold">3× transaction volume</span> with zero added infrastructure.
                </p>

                <p className="mb-4 text-lg leading-relaxed">
                  I hold an <span className="highlight font-semibold">MS in Computer Engineering</span> from Wright State University and am <span className="highlight font-semibold">AWS Certified Cloud Practitioner</span>. I've owned PostgreSQL schemas end-to-end, cut average API response times by <span className="highlight font-semibold">35%</span>, and standardized deployments with Docker, Terraform, and GitHub Actions.
                </p>

                <p className="mb-6 text-lg leading-relaxed">
                  My toolkit spans <span className="highlight font-semibold">TypeScript, Python, distributed systems, Gen AI integration</span>, and agentic workflows. I thrive in Agile teams, ship features 25% faster on average, and have a published research paper in AI/ML to back the engineering rigor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {qualities.map((quality, index) => (
                    <Card key={index} className="border-none bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                      <CardContent className="p-4 text-center">
                        <h3 className="font-bold text-lg text-portfolio-blue mb-1">{quality.title}</h3>
                        <p className="text-sm text-portfolio-gray">{quality.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-5 border-l-4 border-portfolio-blue bg-blue-50 rounded">
                  <p className="text-lg italic text-portfolio-navy">
                    "I'm passionate about sharing my knowledge and continuously learning new technologies to solve complex problems with elegant solutions."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
