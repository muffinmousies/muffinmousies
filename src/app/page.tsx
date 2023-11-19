'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ageVerify, setAgeVerify] = useState<null | String>(null);
  const [loading, setLoading] = useState(true);
  const [blurb, setBlurb] = useState('');
  const blurbs = [
    'This is literally just a refactored Next.js start page.',
    'This website is a designated smoking area.',
  ];
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    setAgeVerify(localStorage.getItem('ageVerify'));
    setBlurb(blurbs[getRandomInt(blurbs.length)]);
    setLoading(false);
  }, []);
  if (loading) {
    return <> </>;
  }
  if (!ageVerify) {
    // prompt
    return (
      <main className="flex min-h-screen flex-col items-center xl:px-64 lx:pt-48 lg:p-48 md:p-24 p-12">
        <div className="mb-3 text-2xl font-semibold">
          Hold the freaking phone . . .
        </div>
        <div>
          Hey! We think you're pretty rad, but you have to be 18+ to visit this
          site. This is because it includes graphic depictions of gay mice
          having &#128293;hot&#128293; gay sex. For example, it includes a
          sequence of images where one gay mouse conducts his penis into another
          gay mouse's anus and proceeds to perform anal sexual intercourse until
          he has an orgasm and ejaculates warm semen into the other mouse's
          rectum. Another example is a sequence of events where a group of gay
          mice encircle one gay mouse and take turns masturbating and
          ejaculating semen, warm semen, into the center mouse's mouth while
          said mouse swallows it. If you are under 18 or uncomfortable with such
          content, then we must ask you, during the Biden era, to depart from
          this website.
        </div>
        <div className="items-center text-xl pt-12">Are you 18?</div>
        <button
          className="pt-6 underline text-blue-500"
          onClick={() => {
            localStorage.setItem('ageVerify', 'ready for cock');
            setAgeVerify('ready for cock');
          }}
        >
          I am.
        </button>
        <button
          className="pt-6 underline text-blue-500"
          onClick={() => {
            setAgeVerify('not ready for cock');
          }}
        >
          I amn't.
        </button>
      </main>
    );
  }
  if (ageVerify === 'not ready for cock') {
    // clicked I amn't
    return (
      <main className="flex min-h-screen flex-col items-center xl:px-64 lx:pt-48 lg:p-48 md:p-24 p-12">
        <div className="mb-3 text-2xl font-semibold">Ope. Sorry.</div>
        <div>
          At least you can enjoy this page where the mousies have their clothes
          on. And look! Tristan made cookies! Now that's something everyone can
          enjoy!
        </div>
        <div>insert image</div>
        <div>
          Rest assured, the mousies think you're pretty swell and would love to
          spend time with you once you're 18.
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {blurb}
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Muffin Mousies{' '}
              <Image
                src="/heart.svg"
                alt="Heart"
                className="dark:invert"
                width={25}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Mousies</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Get to know the mousies and their friends!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Comics</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Watch the mousies get into a little trouble ;3
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Sponsor</h2>
            <span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Financially support the mousies{' '}
            </span>

            <span className="opacity-100">&#128591;</span>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Naked!</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Click for a surprise!
            </p>
          </a>
        </div>
      </main>
    );
  }
}
