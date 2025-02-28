import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, BarChart2, Database, FileSpreadsheet, Code } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'powerbi', name: 'Power BI' },
    { id: 'sql', name: 'SQL' },
    { id: 'python', name: 'Python' },
    { id: 'excel', name: 'Excel' }
  ];

  const projects = [
    {
      id: 1,
      title: "Retail Sales Dashboard",
      description: "Interactive Power BI dashboard analyzing retail sales trends, customer segments, and product performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "powerbi",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      icon: <BarChart2 className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Python-based clustering analysis to identify customer segments for targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      category: "python",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      icon: <Code className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Financial Database Design",
      description: "SQL database design and implementation for financial reporting and transaction analysis.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "sql",
      technologies: ["SQL Server", "Database Design", "Stored Procedures", "ETL"],
      icon: <Database className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Sales Forecasting Model",
      description: "Time series analysis and forecasting model to predict future sales based on historical data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "python",
      technologies: ["Python", "Pandas", "Statsmodels", "Prophet"],
      icon: <Code className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "HR Analytics Dashboard",
      description: "Power BI dashboard for HR metrics including turnover, recruitment, and employee satisfaction.",
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      category: "powerbi",
      technologies: ["Power BI", "DAX", "Power Query", "HR Analytics"],
      icon: <BarChart2 className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Budget Tracking System",
      description: "Advanced Excel model for budget tracking, variance analysis, and financial reporting.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
      category: "excel",
      technologies: ["Excel", "VBA", "Pivot Tables", "Financial Modeling"],
      icon: <FileSpreadsheet className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 7,
      title: "Supply Chain Analytics",
      description: "SQL-based analysis of supply chain efficiency, inventory optimization, and logistics performance.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "sql",
      technologies: ["SQL", "Data Modeling", "Reporting", "Supply Chain KPIs"],
      icon: <Database className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 8,
      title: "Marketing Campaign Analysis",
      description: "Excel-based ROI analysis and performance tracking for marketing campaigns across channels.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "excel",
      technologies: ["Excel", "Data Analysis", "Marketing Metrics", "Visualization"],
      icon: <FileSpreadsheet className="w-5 h-5" />,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Analysis Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Explore my portfolio of data analysis projects showcasing my skills in Power BI, SQL, Python, and Excel.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white rounded-full p-2">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-slate-900 transition-colors flex items-center"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Projects on GitHub
            <ArrowRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;