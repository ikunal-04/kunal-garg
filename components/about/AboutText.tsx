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
        Hi, I&apos;m Kunal — a full-stack engineer who builds AI products for a
        living. Right now I&apos;m a{' '}
        <span className='underline'>Full Stack AI Engineer at OnFinance AI</span>
        , where I ship production LLM agents with LangGraph and LangChain, traced
        end-to-end with Langfuse, and work on the data infra behind them — I
        recently moved our log streaming from Athena to Trino and made our writes
        vendor-agnostic on GCP Pub/Sub.
      </div>
      <div>
        Before this I was a{' '}
        <span className='underline'>Software Engineer at Bud (formerly Orchids, YC W25)</span>{' '}
        in the Bay Area, a{' '}
        <span className='underline'>Full-stack Developer at Buildorz</span>{' '}
        building on-chain apps, and a{' '}
        <span className='underline'>Frontend Developer at BizOAlly</span>. The
        full history is in{' '}
        <LinkText href='https://drive.google.com/file/d/1PWuUBcewTgdw9b5rkOlgTH_oMtQMyPGu/view?usp=drive_link'>
          my resume
        </LinkText>
        .
      </div>
      <div>
        On the side I build a lot. Two I&apos;m proud of:{' '}
        <span className='underline'>Innpae</span>, which generates
        production-ready backend APIs from a plain-English prompt, and{' '}
        <span className='underline'>Euno</span>, a real-time AI voice companion
        you can actually talk to. Along the way I won the{' '}
        <span className='underline'>Arweave India Hacker House</span> ($3,000
        bounty) and picked up $5,000 in hackathon funding.
      </div>
      <div>
        I mostly work in TypeScript and Python — Next.js and React on the front,
        FastAPI and Node on the back, with Postgres, MongoDB and Redis behind
        them. These days most of my time goes into LLM agents: tracing, evals,
        memory, and the unglamorous work of making them reliable in production.
      </div>
      <div className='pt-3' />
      <div className='flex flex-wrap gap-3'>
        <Link
          href='https://drive.google.com/file/d/1PWuUBcewTgdw9b5rkOlgTH_oMtQMyPGu/view?usp=drive_link'
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
