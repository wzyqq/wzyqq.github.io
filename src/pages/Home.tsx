import { useEffect } from 'react';
import { HomeHero } from '@/components/HomeHero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { WorkExperience } from '@/components/WorkExperience';

import { Publications } from '@/components/Publications';
import { Footer } from '@/components/Footer';

// 平滑滚动效果
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

export default function Home() {
  // 监听导航链接点击事件，实现平滑滚动
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) scrollToSection(id);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 主页英雄区 */}
      <HomeHero />
      
      {/* 关于我部分 */}
      <About />
      
      {/* 教育背景部分 */}
      <Education />
      
      {/* 工作经历部分 */}
      <WorkExperience />
      
      {/* 技能部分 */}

      
      {/* 学术论文部分 */}
      <Publications />
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}