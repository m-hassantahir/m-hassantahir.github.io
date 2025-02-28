import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Get to know me better - my background, experience, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-lg -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Passionate Data Analyst and PowerBI Developer
            </h3>
            <p className="text-gray-600 mb-6">
            I am a passionate **Power BI Specialist** and **Data Analyst** with a strong background in economics, finance, and data analytics. I thrive on transforming raw data into actionable insights that drive informed decision-making and create tangible business impact. My journey has been a blend of academic excellence, professional growth, and a relentless curiosity to uncover hidden patterns in data.
            </p>
            <p className="text-gray-600 mb-8">
            My career began in the field of economics and finance, where I earned my **B.Sc. (Hons) in Economics and Finance** from the Lahore School of Economics and later pursued an **MS in Economics** from the University of Central Punjab. During my academic years, I developed a keen interest in data analysis and visualization, which led me to explore tools like **Power BI, Python, SQL, and Excel** to craft compelling data stories.
            </p>
            <p className="text-gray-600 mb-8">
            I’ve had the opportunity to work in diverse roles, from being a **Financial Investment Analyst** at Blue River Financials to serving as a **Planning Officer** in the Primary & Secondary Healthcare Department of the Government of Punjab. In these roles, I honed my skills in financial modeling, budgeting, and strategic planning, while also building strong relationships with stakeholders to ensure the successful execution of projects.
            </p>
            <p className="text-gray-600 mb-8">
            More recently, I worked as a **Coordinator** at Bahria Town School & College, where I leveraged my analytical skills to improve teaching strategies and student engagement. I introduced innovative online teaching techniques and conducted training sessions to bridge the gap between technology and traditional teaching methods. My efforts were recognized by the organization for contributing to student success and program development.
            </p>
            <p className="text-gray-600 mb-8">
            I am deeply passionate about **data analytics** and **business intelligence**. I believe that data holds the key to unlocking efficiency, optimizing workflows, and driving informed decision-making. Whether it’s through descriptive analytics, predictive modeling, or hypothesis testing, I enjoy the process of uncovering insights that spark actionable strategies.
            </p>
            <p className="text-gray-600 mb-8">
            Teaching is another area close to my heart. I’ve always believed in the power of education to transform lives, and I’ve had the privilege of teaching economics and finance to students. My experience with online teaching during the COVID-19 pandemic further solidified my belief in the importance of technology in education. I hold a **certificate in Learning to Teach Online** from the University of New South Wales, which has equipped me with the skills to deliver engaging and effective online lessons.
            </p>
            <p className="text-gray-600 mb-8">
            When I’m not immersed in data or teaching, I enjoy exploring new technologies and tools that can enhance my analytical capabilities. I’m also an avid learner, constantly seeking out new courses and certifications to expand my skill set. In my free time, I like to read about economic trends, financial markets, and the latest advancements in data science.
            </p>
            <p className="text-gray-600 mb-8">
            I’m always on the lookout for new challenges that allow me to leverage my expertise in data analytics and business intelligence. Whether it’s through teaching, consulting, or leading data-driven projects, I’m committed to making a meaningful impact in whatever I do.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Experience</h4>
                  <p className="text-gray-600">5+ years in web development</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Education</h4>
                  <p className="text-gray-600">B.S. in Computer Science</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Certifications</h4>
                  <p className="text-gray-600">AWS Certified Developer, Google UX Design</p>
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