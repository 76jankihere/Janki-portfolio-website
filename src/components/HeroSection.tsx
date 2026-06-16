
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from 'lucide-react';
import profilePic from '/Janki.jpeg';

const HeroSection: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const nameElement = nameRef.current;
    if (nameElement) {
      const text = nameElement.innerText;
      nameElement.innerHTML = '';

      let delay = 0;
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.innerText = text[i];
        span.style.opacity = '0';
        span.style.transition = 'all 0.3s ease';
        span.style.transitionDelay = `${delay}ms`;
        nameElement.appendChild(span);
        delay += 80;

        setTimeout(() => {
          span.style.opacity = '1';
        }, 100);
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-300 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl animation-delay-2000 animate-blob"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-indigo-300 mix-blend-multiply filter blur-xl animation-delay-4000 animate-blob"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 md:pr-8 text-center md:text-left">
            <div className="mb-2 inline-block text-sm font-semibold px-3 py-1 rounded-full bg-blue-100 text-portfolio-blue animate-fade-in">
              Software Engineer · Full-Stack · Cloud · AWS Certified
            </div>
            <h1 ref={nameRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy mb-4 leading-tight">
              Jankiben Parmar
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-portfolio-blue font-medium mb-6 animate-fade-in animation-delay-300">
              Software Engineer · 4+ Years Building Scalable Web & Cloud Platforms
            </h2>
            <p className="text-portfolio-gray text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in animation-delay-500">
              I build production-grade REST & GraphQL APIs with Node.js, React/Next.js front-ends, and AWS-based CI/CD pipelines.
              I've shipped microservices handling <span className="font-semibold text-portfolio-navy">3× transaction volume</span> and cut API latency by <span className="font-semibold text-portfolio-navy">35%</span>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in animation-delay-700">
              <Button asChild className="bg-portfolio-blue hover:bg-blue-700 transform transition-all hover:translate-y-[-3px] shadow-lg hover:shadow-blue-200">
                <a href="#contact">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="border border-portfolio-blue text-portfolio-blue hover:bg-blue-50 transition-all hover:translate-y-[-3px]">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="border border-portfolio-blue text-portfolio-blue hover:bg-blue-50 transition-all hover:translate-y-[-3px]">
                <a href={`${import.meta.env.BASE_URL}Janki_Parmar_Resume.pdf`} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start space-x-5 animate-fade-in animation-delay-1000">
              <a href="https://www.linkedin.com/in/janki-parmar-b1466b176/" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-blue transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a href="https://github.com/76jankihere" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-blue transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              <a href="mailto:jankiparmar357@outlook.com" className="text-portfolio-gray hover:text-portfolio-blue transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-10 md:mt-0 animate-fade-in animation-delay-1000">
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 ring-4 ring-blue-100 ring-opacity-50">
              <img src={profilePic} alt="Jankiben Parmar" className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110" />
            </div>
            <div className="absolute -z-0 w-72 h-72 md:w-96 md:h-96 bg-blue-50 rounded-full blur-md opacity-70 animate-pulse" style={{ right: '15%', top: '20%' }}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex">
        <a href="#about" className="flex flex-col items-center text-portfolio-gray hover:text-portfolio-blue transition-colors">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M12 5v14M5 12l7 7 7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
