
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details: string[];
}

const EducationItem: React.FC<EducationProps> = ({ 
  degree, 
  institution, 
  location, 
  period, 
  gpa,
  details 
}) => {
  return (
    <div className="mb-12 last:mb-0 group">
      <div className="timeline-dot bg-portfolio-blue group-hover:scale-125 transition-all duration-300"></div>
      <Card className="border-none shadow-md group-hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-white h-2"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <GraduationCap className="h-5 w-5 text-portfolio-blue mr-2" />
                <h3 className="text-xl font-bold text-portfolio-navy">{degree}</h3>
              </div>
              <p className="text-portfolio-gray flex items-center">
                <Award className="h-4 w-4 inline mr-2 text-portfolio-gray" />
                {institution} | {location}
              </p>
              {gpa && <p className="text-portfolio-blue font-medium mt-1 flex items-center">
                <span className="inline-block w-4 h-4 bg-portfolio-blue text-white text-xs rounded-full mr-2 text-center">A</span>
                GPA: {gpa}</p>}
            </div>
            <span className="time-period mt-2 md:mt-0 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {period}
            </span>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-portfolio-blue">
            {details.map((detail, index) => (
              <li key={index} className="text-portfolio-gray">
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const educationItems = [
    {
      degree: "Master of Science in Computer Engineering",
      institution: "Wright State University",
      location: "Dayton, Ohio, USA",
      period: "Dec 2023 — Jul 2025",
      gpa: "3.0 / 4.0",
      details: [
        "Coursework: Machine Learning, Distributed Computing, Artificial Intelligence, Quantum Computing",
        "Advanced Computer Networks, Advanced Software Engineering, Cloud Computing",
        ".NET, Angular, Node.js — applied through real-world capstone projects"
      ]
    },
    {
      degree: "Master of Computer Applications (Dual Degree)",
      institution: "Charotar University of Science & Technology",
      location: "Gujarat, India",
      period: "Jul 2016 — Jul 2021",
      gpa: "4.0 / 4.0",
      details: [
        "Dual degree combining BCA + MCA with perfect GPA",
        "Coursework: Data Structures & Algorithms, Database Systems, Data Mining, Information Systems",
        "Object Oriented Programming, Operating Systems, Software Engineering"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <GraduationCap className="h-8 w-8 text-portfolio-blue" />
          </div>
          <h2 className="section-title mb-0">Education</h2>
        </div>
        <p className="section-subtitle">
          My academic journey and qualifications that have shaped my technical expertise
        </p>
        
        <div className="mt-16 timeline-container">
          {educationItems.map((education, index) => (
            <EducationItem
              key={index}
              degree={education.degree}
              institution={education.institution}
              location={education.location}
              period={education.period}
              gpa={education.gpa}
              details={education.details}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-portfolio-navy mb-6 text-center">Certifications & Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-portfolio-blue to-blue-400 h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">AWS Certified Cloud Practitioner</h4>
                    <p className="text-portfolio-gray">Issued April 2025 · Valid until April 2028</p>
                    <Badge className="bg-portfolio-blue mt-2 px-3 py-1">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-portfolio-blue to-blue-400 h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Deloitte Australia · Cyber Job Simulation</h4>
                    <p className="text-portfolio-gray">Forage · Issued April 2025</p>
                    <Badge className="bg-portfolio-blue mt-2 px-3 py-1">Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
              <div className="bg-gradient-to-r from-portfolio-blue to-blue-400 h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Research Publication</h4>
                    <p className="text-portfolio-navy font-medium mt-1">Facial Expression Recognition: A Study and Its Counterparts</p>
                    <p className="text-portfolio-gray text-sm">International Journal of Marketing and Technology · Vol. 13 Issue 02 · Feb 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
