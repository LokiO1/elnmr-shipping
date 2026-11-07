import Image from 'next/image';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center flex-shrink-0`}>
      <Image
        src="/images/logo.png"
        alt="El NMR Shipping Logo"
        width={200}
        height={80}
        className="object-contain w-auto h-12 filter drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]"
        priority
      />
    </div>
  );
}
