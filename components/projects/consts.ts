import { IconType } from 'react-icons';
import { BiLogoFlask } from 'react-icons/bi';
import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiNextdotjs, SiTypescript, SiExpress, SiMysql } from 'react-icons/si';
import { ProjectCardProps } from './ProjectCard';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiFastapi } from 'react-icons/si';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiArduino } from 'react-icons/si';
import { SiGooglecolab } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { SiSelenium } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaGolang } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { DiRedis } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiSolidity, SiTailwindcss, SiPostgresql, SiCloudflare, SiNodedotjs, SiLua, SiEthereum } from 'react-icons/si';

export const techIconMap: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  Flask: BiLogoFlask,
  TypeScript: SiTypescript,
  'Vercel KV': IoLogoVercel,
  Python: FaPython,
  React: FaReact,
  'React.js': FaReact,
  Supabase: RiSupabaseFill,
  FastAPI: SiFastapi,
  'Google Cloud': DiGoogleCloudPlatform,
  'Express.js': SiExpress,
  AWS: FaAws,
  SQL: TbSql,
  MySQL: SiMysql,
  'C++': CgCPlusPlus,
  Arduino: SiArduino,
  'Google Colab': SiGooglecolab,
  Prisma: SiPrisma,
  MongoDB: DiMongodb,
  Selenium: SiSelenium,
  'React Native': TbBrandReactNative,
  Go: FaGolang,
  GraphQL: GrGraphQl,
  Redis: DiRedis,
  JavaScript: IoLogoJavascript,
  PHP: FaPhp,
  Java: FaJava,
  Solidity: SiSolidity,
  TailwindCSS: SiTailwindcss,
  PostgreSQL: SiPostgresql,
  Cloudflare: SiCloudflare,
  'Node.js': SiNodedotjs,
  Lua: SiLua,
  AOS: SiEthereum,
  'Ethers.js': SiEthereum,
};

export const projects: ProjectCardProps[] = [
  {
    title: 'innpae',
    subTitle:
      'AI-powered backend generation tool that instantly creates complete APIs with Express.js, PostgreSQL, MongoDB, Prisma, or Drizzle',
    description:
      'Innpae revolutionizes backend development by enabling developers to generate complete, production-ready backend APIs instantly using AI. Users can choose from multiple technology combinations including Express.js framework, PostgreSQL or MongoDB databases, and Prisma or Drizzle ORMs. The platform generates comprehensive TypeScript code, database schemas, setup scripts, and all necessary infrastructure for rapid prototyping and full-stack development.',
    technologies: [
      'TypeScript',
      'Next.js',
      'Supabase',
      'React.js',
      'TailwindCSS',
      'Zustand',
    ],
    details:
      'Innpae leverages advanced AI models to understand requirements and generate optimized backend code. The platform supports multiple tech stack configurations, produces production-ready TypeScript code, generates database schemas and setup scripts, and enables rapid prototyping. Built with Next.js for the frontend and Supabase for backend services. Features include intelligent code generation, multiple framework support, comprehensive API documentation generation, and streamlined development workflow for startups and individual developers.',
    graphic: '/projects/innpae-preview.png',
    github: 'https://github.com/ikunal-04/agent',
    website: 'https://www.innpae.com/',
  },
  {
    title: 'aoVest',
    subTitle:
      'Vesting app for token management on Arweave, featuring automated token transfers and modular UI for rapid updates',
    description:
      'aoVest is a comprehensive token vesting platform built on the Arweave blockchain, designed to handle automated token distribution and management. The application features a modular UI architecture that allows for rapid updates and customization, making it ideal for projects requiring flexible token vesting schedules and automated distribution mechanisms.',
    technologies: [
      'TypeScript',
      'Lua',
      'AOS',
      'React.js',
      'TailwindCSS',
      'Zustand',
    ],
    details:
      'aoVest integrates with the Arweave ecosystem using AOS (Arweave Operating System) for blockchain interactions. The platform features automated token transfer mechanisms, customizable vesting schedules, and a responsive UI built with React.js and TailwindCSS. The modular architecture allows for easy updates and feature additions, while Lua scripts handle the blockchain logic. Zustand manages state efficiently across the application.',
    graphic: '/projects/aovest-preview.png',
    github: 'https://github.com/ikunal-04/aovest',
    website: 'https://ao-vest.ar-io.net/',
  },
  {
    title: 'EaseMyExpo',
    subTitle:
      'Fully dynamic website for EaseMyExpo with 50+ custom stall designs and comprehensive event management services',
    description:
      'EaseMyExpo is a comprehensive event management platform featuring a fully dynamic website with over 50 custom stall designs. The platform provides end-to-end event management services, from initial planning and stall design to execution and management. Built to handle large-scale exhibitions and events with customizable layouts and professional event coordination.',
    technologies: [
      'TypeScript',
      'React.js',
      'MongoDB',
      'Node.js',
      'Express.js',
      'TailwindCSS',
    ],
    details:
      'EaseMyExpo features a dynamic content management system built with React.js and TypeScript for the frontend, with Node.js and Express.js powering the backend services. MongoDB stores event data, stall configurations, and client information. The platform includes 50+ pre-designed stall layouts, real-time event management tools, client dashboard for booking and management, and comprehensive analytics for event performance tracking.',
    graphic: '/projects/easemyexpo-preview.png',
    website: 'https://easemyexpo.com/',
  },
  {
    title: 'CryptoBasket',
    subTitle:
      'Comprehensive crypto finance platform featuring user dashboard for portfolio tracking and management',
    description:
      'CryptoBasket is a full-featured cryptocurrency finance platform that provides users with comprehensive portfolio tracking and management tools. The platform offers real-time market data, portfolio analytics, performance tracking, and advanced financial tools for cryptocurrency investors and traders.',
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    details:
      'CryptoBasket integrates with multiple cryptocurrency exchanges and market data providers to offer real-time portfolio tracking. Built with Next.js and TypeScript for optimal performance, the platform features a responsive dashboard with TailwindCSS styling. The backend uses Node.js and Express.js with MongoDB for data storage. Features include real-time price tracking, portfolio analytics, profit/loss calculations, and comprehensive market insights.',
    graphic: '/projects/cryptobasket-preview.png',
    website: 'https://basket-finance-landing-page.vercel.app/',
  },
  {
    title: 'OnchainAura',
    subTitle:
      'Full-stack application analyzing users onchain activities to generate personalized Aura scores with comprehensive blockchain analytics',
    description:
      'OnchainAura is a sophisticated Web3 analytics platform that analyzes users blockchain activities across multiple networks to generate personalized Aura scores. Built specifically for the Base blockchain ecosystem, the platform provides comprehensive insights into a users onchain journey, evaluating transaction patterns, DeFi interactions, and overall blockchain engagement to create meaningful analytics.',
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Solidity',
      'Hardhat',
      'Ethers.js',
      'Node.js',
      'Express.js',
    ],
    details:
      'OnchainAura integrates with Base blockchain and utilizes technologies from OnchainKit, Moralis, and Zerion for comprehensive data analysis. The platform features smart contract integration using Solidity and Hardhat, with Ethers.js handling blockchain interactions. Built with Next.js and TypeScript for the frontend, the application provides an Aura Analyzer that evaluates blockchain interactions and generates personalized scores based on onchain activity patterns.',
    graphic: '/projects/onchainarua-preview.png',
    github: 'https://github.com/ikunal-04/aura',
    website: 'https://www.onchainaura.fun/',
  },
  { 
    title: 'Numpay', 
    subTitle: 'DeFi payment platform enabling seamless USDC transfers using just mobile numbers, built on Base blockchain', 
    description: 'Numpay is a decentralized payments application that simplifies stablecoin transactions by allowing users to send and request USDC on Base using mobile numbers instead of wallet addresses. It eliminates the complexity of managing long wallet addresses and provides an easy-to-use interface for everyday crypto payments.', 
    technologies: [ 
      'Next.js', 
      'TypeScript', 
      'TailwindCSS', 
      'Node.js', 
      'Express.js', 
      'MongoDB', 
      'Ethers.js', 
    ], 
    details: 'Numpay leverages Base blockchain and USDC to provide a frictionless payments experience. Users can register their mobile numbers to link with wallet addresses, send or request payments, and manage transactions securely. The platform is designed for ease-of-use and mainstream adoption of crypto payments. Built with Next.js and TypeScript frontend, Express.js and MongoDB backend, and Ethers.js for blockchain interaction.', 
    graphic: '/projects/numpay-preview.png', 
    github: 'https://github.com/ikunal-04/cashtide', 
    website: 'https://app.numpay.app/', 
  },
];
