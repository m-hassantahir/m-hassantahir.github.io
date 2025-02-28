import React from 'react';
import { BarChart2, Database, Code, FileSpreadsheet, LineChart, PieChart, Brain, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Visualization",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
      skills: ["Power BI", "Tableau", "D3.js", "Matplotlib", "Seaborn", "Dashboard Design"]
    },
    {
      title: "Database & SQL",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Data Modeling", "Query Optimization", "ETL Processes"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "R", "Jupyter Notebooks"]
    },
    {
      title: "Excel & Spreadsheets",
      icon: <FileSpreadsheet className="w-6 h-6 text-blue-600" />,
      skills: ["Advanced Excel", "Pivot Tables", "Power Query", "VBA", "Google Sheets", "Financial Modeling"]
    },
    {
      title: "Statistical Analysis",
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
      skills: ["Hypothesis Testing", "Regression Analysis", "Time Series", "A/B Testing", "Forecasting", "Descriptive Statistics"]
    },
    {
      title: "Business Intelligence",
      icon: <PieChart className="w-6 h-6 text-blue-600" />,
      skills: ["KPI Development", "Reporting Automation", "Data Storytelling", "Executive Dashboards", "Business Requirements", "Data Governance"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      skills: ["Supervised Learning", "Clustering", "Classification", "Regression Models", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      skills: ["Problem Solving", "Data Storytelling", "Team Collaboration", "Project Management", "Client Communication", "Attention to Detail"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            A comprehensive overview of my data analysis toolkit and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-slate-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;