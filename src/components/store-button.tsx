import Link from "next/link";
import Image from "next/image";

export default function StoreButtons() {
  return (
    <div className="z-20 grid grid-cols-2 sm:flex sm:flex-row justify-center items-center gap-2 w-full max-w-md mx-auto">
      

      {/* Nút Google Play */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.pitaya.natv"
        target="_blank"
        aria-label="stay-updated-google-play"
        className="w-full h-[50px] sm:w-[200px] md:w-[220px] sm:h-[55px] md:h-[60px] duration-200 ease-out hover:scale-110 hover:brightness-110"
      >
        <Image
          src="/images/button_android.png"
          alt="Get it on Google Play"
          width={300}
          height={70}
          className="w-full h-full object-contain"
        />
      </Link>
      {/* Nút App Store */}
      <Link
        href="https://apps.apple.com/app/night-at-the-valley/id6467846624"
        target="_blank"
        aria-label="stay-updated-apple-store"
        className="w-full h-[50px] sm:w-[210px] md:w-[260px] sm:h-[55px] md:h-[60px] duration-200 ease-out hover:scale-110 hover:brightness-110"
      >
        <Image
          src="/images/button_apple.png"
          alt="Download on the App Store"
          width={300}
          height={70}
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
}
