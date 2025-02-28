import React from 'react';
import { ArrowRight, ChevronDown, BarChart2, Database, FileSpreadsheet, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            <span className="block">Hi, I'm <span className="text-blue-600">Your Name</span></span>
            <span className="block mt-2">Data Analyst & Insights Specialist</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through Power BI, SQL, Python, and Excel. Let's turn your data into decisions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600">
              <BarChart2 size={18} className="mr-2" />
              <span>Power BI</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600">
              <Database size={18} className="mr-2" />
              <span>SQL</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600">
              <Code size={18} className="mr-2" />
              <span>Python</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600">
              <FileSpreadsheet size={18} className="mr-2" />
              <span>Excel</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              View My Projects
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100 rounded-full opacity-70 blur-3xl"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-slate-500 mb-2">Scroll Down</span>
        <ChevronDown size={20} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;