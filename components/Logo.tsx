import Image from 'next/image';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center flex-shrink-0`}>
      <Image
        src="/images/logo.jpg"
        alt="El NMR Shipping Logo"
        fill
        className="object-contain mix-blend-screen scale-125 filter drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
      />
    </div>
  );
}
