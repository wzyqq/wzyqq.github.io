import { personalData } from '@/mocks/personalData';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">关于我</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
             <p className="text-lg text-gray-700 leading-relaxed">
               物理学博士背景的SLAM算法工程师，专注于机器人感知与导航技术研发。擅长将理论知识转化为工程实践，在多传感器融合、视觉SLAM等领域有深入研究。具备快速学习能力和英文文献阅读能力，注重团队协作与问题解决，致力于推动智能机器人技术发展。
             </p>
          </div>
          
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">博士</div>
                <div className="text-gray-600">上海交通大学</div>
              </div>
               <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+年</div>
                <div className="text-gray-600">机器人行业经验</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">学术论文发表</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
