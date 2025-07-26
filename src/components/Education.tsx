import { personalData } from '@/mocks/personalData';

export function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教育背景</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {personalData.education.map((edu, index) => (
            <div 
              key={index} 
              className={`mb-12 relative ${
                index !== personalData.education.length - 1 
                  ? 'after:absolute after:left-6 after:top-full after:h-full after:w-0.5 after:bg-gray-200 after:-z-10' 
                  : ''
              }`}
              style={{ paddingLeft: '2.5rem' }}
            >
              {/* 时间轴圆点 */}
              <div className="absolute left-0 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {edu.institution}
              </h3>
              <p className="text-lg text-blue-600 mb-2">
                {edu.department}，{edu.degree}
              </p>
              <p className="text-gray-500 mb-4">{edu.period}</p>
              
              <ul className="space-y-2 text-gray-700">
                {edu.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
