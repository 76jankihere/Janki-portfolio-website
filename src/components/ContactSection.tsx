
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to contact me for collaboration, opportunities, or just to say hello!
        </p>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="h-6 w-6 text-portfolio-blue mt-1" />
                <div>
                  <h3 className="font-medium text-portfolio-navy">Email</h3>
                  <a href="mailto:jankiparmar357@outlook.com" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                    jankiparmar357@outlook.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="h-6 w-6 text-portfolio-blue mt-1" />
                <div>
                  <h3 className="font-medium text-portfolio-navy">Phone</h3>
                  <a href="tel:+19372606122" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                    +1 (937) 260-6122
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-portfolio-blue mt-1" />
                <div>
                  <h3 className="font-medium text-portfolio-navy">Location</h3>
                  <p className="text-portfolio-gray">
                    Ohio, United States
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="pt-4">
              <h3 className="font-medium text-portfolio-navy mb-3">Connect on</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/janki-parmar-b1466b176/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-blue text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
                <a 
                  href="https://github.com/76jankihere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-blue text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-navy mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-portfolio-gray block mb-2">Name</label>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="text-sm text-portfolio-gray block mb-2">Email</label>
                      <Input placeholder="Your Email" type="email" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-portfolio-gray block mb-2">Subject</label>
                    <Input placeholder="Subject" />
                  </div>
                  
                  <div>
                    <label className="text-sm text-portfolio-gray block mb-2">Message</label>
                    <Textarea placeholder="Your message..." rows={5} />
                  </div>
                  
                  <Button className="w-full bg-portfolio-blue hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
