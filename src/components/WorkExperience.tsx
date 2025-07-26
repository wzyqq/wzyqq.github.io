import { personalData } from '@/mocks/personalData';

export function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">工作经历</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {personalData.workExperience.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-16 bg-white p-6 md:p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                index !== personalData.workExperience.length - 1 
                  ? 'after:absolute after:left-1/2 after:top-full after:h-12 after:w-0.5 after:bg-gray-200 after:-z-10' 
                  : ''
              }`}
              style={{ position: 'relative' }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600">
                    {exp.company}
                  </p>
                </div>
                <p className="mt-2 md:mt-0 text-gray-500 font-medium">
                  {exp.period}
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {exp.description}
              </p>
              
              {/* 技能标签 - 基于职位添加相关技能 */}
              <div className="mt-6 flex flex-wrap gap-2">
                {index === 0 ? ( // 当前职位技能
                  ['SLAM算法', '多传感器融合', '机器人导航', 'ROS开发'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))
                ) : ( // 前职位技能
                  ['3D视觉', '点云处理', '环境建模', '算法优化'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
