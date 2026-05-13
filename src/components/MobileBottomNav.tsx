import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-bg-card)] border-t border-[var(--color-border-dark)] lg:hidden flex justify-around items-center py-2 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.2)] h-[70px] backdrop-blur-md bg-opacity-90">
      <Link
        href="/masaj-hizmetleri"
        className="flex flex-col items-center gap-1 text-[var(--color-text-sub)] hover:text-[var(--color-primary)] active:text-[var(--color-primary)] w-full transition-colors"
      >
        <span className="material-symbols-outlined text-2xl">spa</span>
        <span className="text-[10px] font-medium leading-none">Hizmetler</span>
      </Link>

      <a
        href="https://wa.me/905407903333?text=Merhaba,%20bilgi%20almak%20istiyorum"
        target="_blank"
        className="flex flex-col items-center gap-1 text-[var(--color-text-sub)] hover:text-[#25D366] active:text-[#25D366] w-full transition-colors"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="text-[10px] font-medium leading-none">WhatsApp</span>
      </a>

      <a
        href="tel:05407903333"
        className="flex flex-col items-center gap-1 text-[var(--color-text-sub)] hover:text-[var(--color-primary)] active:text-[var(--color-primary)] w-full transition-colors relative"
      >
        <div className="absolute -top-6 bg-[var(--color-primary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-[var(--color-bg-dark)]">
           <span className="material-symbols-outlined text-2xl">call</span>
        </div>
        <span className="text-[10px] font-medium leading-none mt-6">Ara</span>
      </a>

      <a
        href="https://maps.app.goo.gl/67E5W57eJYCyj7DKA"
        target="_blank"
        className="flex flex-col items-center gap-1 text-[var(--color-text-sub)] hover:text-[var(--color-primary)] active:text-[var(--color-primary)] w-full transition-colors"
      >
        <span className="material-symbols-outlined text-2xl">location_on</span>
        <span className="text-[10px] font-medium leading-none">Yol Tarifi</span>
      </a>
    </div>
  );
}
