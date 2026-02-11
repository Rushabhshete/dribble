import Link from "next/link";
import Image from "next/image";
import sign from "@/public/logo.png";
import logo from "@/public/signlogo.png";
import google from "@/public/google.svg";

export default function AuthCard({
  title,
  subtitle,
  placeholder,
  footerText,
  footerLinkText,
  footerLinkHref,
}) {
  return (
    <div className="w-full h-full relative px-6">

      {/* Dribbble Logo */}
      <div className="flex justify-center lg:absolute lg:top-8 lg:left-8 lg:justify-start">
        <Image src={sign} alt="Dribbble" width={85} />
      </div>

      {/* Center Card */}
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md text-center">

          {/* Center Icon */}
          <div className="flex justify-center mb-6">
            <Image src={logo} alt="Auth Icon" width={52} />
          </div>

          <h1 className="text-2xl font-bold mb-2">{title}</h1>

          {subtitle && (
            <p className="text-gray-500 mb-6">{subtitle}</p>
          )}

          {/* Google */}
          <button className="w-full border rounded-full py-3 mb-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <Image src={google} alt="Google" width={20} height={20} />
            <span className="text-sm font-medium">
              Continue with Google
            </span>
          </button>

          <div className="my-4 text-gray-400 text-sm">or</div>

          <input
            type="email"
            placeholder={placeholder}
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition">
            Continue
          </button>

          <p className="text-sm text-gray-600 mt-4">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline">Terms</Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>

          <p className="text-sm text-gray-500 mt-6">
            {footerText}{" "}
            <Link href={footerLinkHref} className="underline hover:text-black">
              {footerLinkText}
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
