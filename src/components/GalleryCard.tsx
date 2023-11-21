import Image from 'next/image';
export default function GalleryCard(props: { src: string }) {
  return (
    <div className="p-3">
      <Image
        src={props.src}
        alt="Image"
        className="dark:drop-shadow-[0_0_0.9rem_#ffffff] dark:opacity-90 dark:contrast-125"
        width={1500}
        height={1500}
        priority
      />
    </div>
  );
}
