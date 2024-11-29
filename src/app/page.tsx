import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white shadow-dropShadow h-[501px] sm:h-[522px] w-[327px] sm-w-[384px] rounded-[20px] p-[24px]">
      <Image
        src="/assets/images/illustration-article.svg"
        alt="illustration-article"
        width={279}
        height={200}
        className="mb-[24px] rounded-[10px]"
      />
      <div className="mb-300">
        <div className="bg-yellow px-[12px] py-[4px] text-black font-extrabold text-[12px] sm:text-[14px] leading-[150%] tracking-[0px] rounded-[4px] mb-150 inline-block">
          Learning
        </div>
        <div className="font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-950 mb-150">
          Published 21 Dec 2023
        </div>
        <div className="font-extrabold text-[20px] text-gray-950 mb-150">
          HTML & CSS foundations
        </div>
        <div className="font-normal text-[14px] leading-[150%] tracking-[0%] text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/image-avatar.webp"
          alt="image-avatar"
          width={32}
          height={32}
          className="mr-150 inline"
        />
        <span className="font-extrabold text-[14px] text-black leading-[150%] tracking-[0%]">
          Greg Hooper
        </span>
      </div>
    </div>
  );
}
