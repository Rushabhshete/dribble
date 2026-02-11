export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3">

      {/* LEFT – FORM (66%) */}
      <div className="lg:col-span-2 flex items-center justify-center relative">
        {children}
      </div>

      {/* RIGHT – VIDEO (33%) */}
      <div className="hidden lg:block">
        <video
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  );
}
