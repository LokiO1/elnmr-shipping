import Image from 'next/image';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} rounded-xl overflow-hidden relative shadow-lg glow-red border border-red-500/30 bg-white flex items-center justify-center flex-shrink-0`}>
      <Image
        src="/images/logo.jpg"
        alt="El NMR Shipping Logo"
        fill
        className="object-contain mix-blend-multiply"
      />
    </div>
  );
}
