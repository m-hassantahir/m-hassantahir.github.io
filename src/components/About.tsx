import React from 'react';
import { Award, Briefcase, GraduationCap, BarChart2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Get to know my background, experience, and passion for data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Data-Driven Insights Specialist
            </h3>
            <p className="text-slate-600 mb-6">
              I'm a detail-oriented data analyst with over 5 years of experience transforming complex datasets into actionable business insights. My expertise lies in creating interactive dashboards, performing statistical analysis, and developing data-driven solutions that help organizations make informed decisions.
            </p>
            <p className="text-slate-600 mb-8">
              When I'm not analyzing data, you can find me exploring new visualization techniques, contributing to data science communities, or sharing my knowledge through writing and speaking at industry events.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Experience</h4>
                  <p className="text-slate-600">5+ years in data analytics</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Education</h4>
                  <p className="text-slate-600">B.S. in Data Science</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Certifications</h4>
                  <p className="text-slate-600">Microsoft Power BI, SQL Expert, Python Data Science</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Projects Completed</h4>
                  <p className="text-slate-600">50+ data analysis projects across various industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;