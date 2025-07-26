import { personalData } from '@/mocks/personalData';

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">学术论文</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            以下是我发表的学术论文，主要关注星系成团性和宇宙学相关研究
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {personalData.publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8 transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {pub.title}
              </h3>
              
              <p className="text-gray-700 mb-2">{pub.authors}</p>
              
              <p className="text-gray-600 mb-4">
                <span className="font-medium">{pub.year}</span>, {pub.journal}
                {pub.volume && pub.pages && `, Vol. ${pub.volume}, p. ${pub.pages}`}
              </p>
              
              {pub.impactFactor && (
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  影响因子: <span className="font-semibold ml-1">{pub.impactFactor}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
