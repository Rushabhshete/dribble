import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="flex py-8 px-10 justify-between">
      {/* LEFT GROUP */}
      <div className="flex">
        <Link href="/">
          <Image
            src={logo}
            alt="Dribbble logo"
            height={60}
            width={100}
            priority
          />
        </Link>

        <nav className="mx-15 space-x-10 text-[14px] font-semibold leading-3 ">
          <span>Explore</span>
          <span>Hire Talent</span>
          <span>Get Hired</span>
          <span>Community</span>
        </nav>
      </div>

      {/* RIGHT GROUP */}
      <div className="justify-end  space-x-4">
        <Link href='/signups/new' className="font-bold text-[14px] hover:text-gray-600">
          Sign up
        </Link>
        <Link href='/session/new' className="button bg-black text-white px-5 py-3 rounded-4xl font-bold hover:bg-gray-600">
          Log in
        </Link>
      </div>
    </header>
  );
}
