// 个人数据模拟
export const personalData = {
  name: "王兆钰",
  title: "SLAM算法工程师",
  bio: "上海交通大学物理与天文学院博士，专注于机器人SLAM算法与多传感器融合技术，拥有丰富的算法研发与工程实践经验。",
  
  education: [
    {
      institution: "上海交通大学",
      department: "物理与天文学院",
      degree: "博士",
      period: "2016.09 - 2022.06",
      achievements: [
        "荣誉奖项: 海外校友博士生奖学金 (2019)",
        "主要科研方向：星系和暗物质晕的统计性质",
        "毕业论文：在测光红移样本中测量星系的成团性",
        "指导老师：景益鹏 (院士)，杨小虎 (杰出青年)"
      ]
    },
    {
      institution: "中国科学技术大学",
      department: "物理学院",
      degree: "本科",
      period: "2012.09 - 2016.06",
      achievements: [
        "荣誉奖项：优秀学生奖银奖 (2015), 优秀新生奖铜奖 (2012)",
        "核心课程：微积分，线性代数，概率论与数理统计，复变函数，数学物理方程，C语言程序设计，数据结构与算法，计算物理，数值计算方法，四大力学等"
      ]
    }
  ],
  
  workExperience: [
    {
      company: "上海有个机器人有限公司",
      position: "SLAM算法工程师",
      period: "2023.03 - 至今",
      description: "负责机器人SLAM算法研发与优化，多传感器融合方案设计与实现"
    },
    {
      company: "磅客策（上海）机器人有限公司",
      position: "3D算法工程师",
      period: "2022.05 - 2023.3",
      description: "参与3D视觉算法开发，负责点云处理与环境建模相关工作"
    }
  ],
  
  skills: [
    {
      category: "编程技能",
      items: ["C", "C++", "Python", "Latex", "Shell", "MPICH", "ROS"]
    },
    {
      category: "SLAM算法",
      items: [
        "熟悉VINS-MONO、Cartographer等框架及数学原理",
        "精通相机标定及相机IMU联合标定，手眼标定",
        "熟悉KB及MEI鱼眼相机模型",
        "掌握多传感器融合技术，IMU和轮式里程计预积分模型"
      ]
    },
    {
      category: "机器人技术",
      items: [
        "了解RRT等轨迹规划算法",
        "熟悉ROS系统开发",
        "简易机械臂真机部署经验",
        "深度学习部署经验",
        "简易硬件研发经验(ESP32)"
      ]
    },
    {
      category: "算法与工程能力",
      items: [
        "掌握常见数据结构与算法",
        "了解YOLO等深度学习算法",
        "熟悉多线程编程",
        "掌握Conan、Docker等交叉编译工具",
        "数理基础扎实，学习能力强",
        "自驱力强，能轻松阅读英文文献"
      ]
    }
  ],
  
  publications: [
    {
      authors: "Wang, Z., Xu, H., Yang, X., et al.",
      year: "2019",
      journal: "ApJ",
      volume: "879",
      pages: "71",
      title: "Accurate Modeling of the Projected Galaxy Clustering in Photometric Surveys. I. Tests with Mock Catalogs",
      impactFactor: "5.5"
    },
    {
      authors: "Xu, H., Dai, Y. S., Huang, J.-S., Wang, Z., et al.",
      year: "2020",
      journal: "ApJ",
      volume: "905",
      pages: "103",
      title: "A Large Massive Quiescent Galaxy Sample at z 1.2",
      impactFactor: "5.5"
    },
    {
      authors: "Wang, Z., Xu, H., Yang, X., et al.",
      journal: "SCIENCE CHINA Physics, Mechanics , Astronomy",
      title: "The clustering of galaxies in the DESI imaging legacy surveys DR8:I. the luminosity and color dependent intrinsic clustering",
      impactFactor: "5.1"
    }
  ],
  
  contact: {
    email: "wzyqq@mail.ustc.edu.cn",
    location: "上海"
  }
};
