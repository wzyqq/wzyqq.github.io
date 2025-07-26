import { personalData } from '@/mocks/personalData';

export function HomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lf-code-agent.coze.cn/obj/x-ai-cn/attachment/3238509548145116/image_20250726100024.png" 
          alt="个人照片" 
          className="w-full h-full object-cover"
        />
        {/* 渐变叠加层，增强文字可读性 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* 文字内容 */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          {personalData.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          {personalData.title}
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          {personalData.bio}
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#about" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 transform hover:scale-105"
          >
            了解更多
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition duration-300"
          >
            联系我
          </a>
        </div>
      </div>
      
      {/* 向下滚动指示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
