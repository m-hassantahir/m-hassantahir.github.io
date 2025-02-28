import React from 'react';
import { Code, Palette, Database, Globe, Cpu, LineChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Accessibility"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      title: "DevOps & Deployment",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      skills: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "Netlify"]
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      skills: ["VS Code", "npm/yarn", "Webpack", "Jest", "Storybook", "Postman"]
    },
    {
      title: "Soft Skills",
      icon: <LineChart className="w-6 h-6 text-indigo-600" />,
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Time Management", "Adaptability", "Attention to Detail"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{skill}</span>
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