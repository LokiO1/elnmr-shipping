import Image from 'next/image';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center flex-shrink-0 overflow-hidden`}>
      <Image
        src="/images/logo.png"
        alt="El NMR Shipping Logo"
        width={300}
        height={120}
        className="object-contain w-auto h-12 mix-blend-screen contrast-200 brightness-125 filter"
        priority
      />
    </div>
  );
}
