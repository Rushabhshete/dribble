// "use client";
// import Image from "next/image";
// import React from "react";
// import sign from "@/public/logo.png";
// import logo from "@/public/signlogo.png";

// export default function Page() {

//   return (
//     <div className="grid grid-cols-3">
//       <div className="col-span-2">
// <div className="p-12">
//   <Image src={sign} alt="logo" width="80" />
// </div>
//         <div className="flex flex-col items-center justify-center  text-center">
//           <Image src={logo} alt="sign logo" width="60" />
//           <span className="mt-2 text-lg font-semibold">
//             Welcome to Dribbble
//           </span>
//           <p className="mt-1 text-gray-600">
//             Create your account and discover world-class <br /> design talent.
//           </p>
//           <div className="mt-5">

//           </div>
//           <span className="text-sm p-6">or</span>
//           <input
//             placeholder="Enter email address "
//             className="border-1 hover:shadow-2xl p-2 w-sm rounded-xl"
//             required
//           />
//           <button className="bg-black text-white p-3 hover:bg-gray-700 rounded-4xl w-sm mt-10 font-bold">
//             continue
//           </button>
//           <span className="text-sm">
//             By continuing, you agree to our Terms and Privacy Policy. Already
//             have an account? Sign in
//           </span>
//         </div>
//       </div>
//       <div className="h-screen overflow-hidden">
//         <video
//           src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="h-full w-full object-cover"
//         ></video>
//       </div>
//     </div>
//   );
// }

import AuthLayout from "@/components/AuthLayout";
import AuthCard from "@/components/AuthCard";

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome to Dribbble"
        subtitle="Create your account and discover world-class design talent."
        placeholder="Enter email address"
        footerText="Already have an account?"
        footerLinkText="Sign in"
        footerLinkHref="/session/new"
      />
    </AuthLayout>
  );
}
