/* eslint-disable react/no-unescaped-entities */
import { Button } from '../ui/button';
import { Book } from 'lucide-react';
import { LinkText } from '../common/LinkText';
import Link from 'next/link';
import { GrGithub } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';

export const AboutText = () => {
  return (
    <div className='flex flex-col gap-y-3 text-sm md:text-[1rem] md:leading-snug'>
      <div>
        Hi! I am Kunal Garg, a passionate full-stack developer specializing in AI-powered applications and modern web interfaces. I focus on building digital experiences that merge artificial intelligence with seamless user interfaces. I am an avid learner who loves to collaborate with others and is always ready for a challenge to deepen my understanding of technology!
      </div>
      <div>
        I have experience working as a{' '}
        <LinkText href='#'>Fullstack Blockchain Developer Intern at Buildorz</LinkText>,{' '}
        <LinkText href='#'>Software Engineer Intern at Orchids</LinkText>, and{' '}
        <LinkText href='#'>Backend Developer Intern at Inggage</LinkText>. I've also worked as a{' '}
        <LinkText href='#'>Frontend Engineer at BizOAlly</LinkText>, where
        I developed skills in full-stack development, AI integration, and modern web frameworks. More information about my work experience can be viewed in{' '}
        <LinkText href='https://drive.google.com/file/d/1SMBcz4fTcQZgL5kULlhErXAxXzCXGAAu/view?usp=drive_link'>
          my resume
        </LinkText>
        .
      </div>
      <div>
        My flagship project is{' '}
        <LinkText href='#'>Innpae</LinkText> - an AI-powered platform that generates backend APIs from natural language prompts. I've also built innovative projects exploring various technologies and received recognition as an{' '}
        <LinkText href='#'>Arweave India Hacker House Winner</LinkText> with a $3,000 bounty and received $5,000 funding for a hackathon project, showcasing my versatility across different tech domains.
      </div>
      <div>
        I specialize in technologies like TypeScript, JavaScript, React.js, Next.js, Node.js, Python, and work with databases including MongoDB, PostgreSQL, and Supabase. I'm passionate about integrating AI into full-stack applications and creating intelligent, user-friendly solutions.
      </div>
      <div className='pt-3' />
      <div className='flex flex-wrap gap-3'>
        <Link
          href='https://drive.google.com/file/d/1SMBcz4fTcQZgL5kULlhErXAxXzCXGAAu/view?usp=drive_link'
          target='_blank'
        >
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <Book size={16} /> Resume
          </Button>
        </Link>
        <Link href='https://github.com/ikunal-04' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <GrGithub size={16} /> Github
          </Button>
        </Link>
        <Link href='https://x.com/kunalg_twt' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <FaXTwitter size={16} />
            Twitter
          </Button>
        </Link>
      </div>
    </div>
  );
};
