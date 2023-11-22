'use client';
import Image from 'next/image';
import GalleryCard from '@/components/GalleryCard';
import { useEffect, useState } from 'react';
export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    fetch('/api/b1/gallery').then((res) => {
      res.json().then((data) => {
        setImages(data);
      });
    });
  }, []);
  if (images.length === 0) {
    return <></>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:pb-0 pb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from- pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-amber-100 lg:p-4 lg:dark:bg-zinc-800/30">
          Gallery
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-amber-50 via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            Muffin Mousies{' '}
            <Image
              src="/heart.svg"
              alt="Heart"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      {images &&
        images.map((image) => (
          <GalleryCard key={image} src={image}></GalleryCard>
        ))}
    </main>
  );
}
