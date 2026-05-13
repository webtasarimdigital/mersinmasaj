import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#F8F9FA] border-t border-gray-200 lg:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-[60px] w-full">
        {/* Randevu Al Button */}
        <a 
          href="tel:05407903333" 
          className="w-[42%] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center text-white font-black text-[13px] tracking-widest shadow-[inset_-2px_0_10px_rgba(0,0,0,0.1)]"
        >
          RANDEVU AL
        </a>

        {/* 3 Icons */}
        <div className="w-[58%] flex justify-between items-center px-1">
          {/* Konum */}
          <a href="https://maps.app.goo.gl/67E5W57eJYCyj7DKA" target="_blank" className="flex flex-col items-center justify-center gap-1.5 w-1/3 h-full hover:bg-gray-100 transition-colors">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F39C12] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-[20px]">location_on</span>
            </div>
            <span className="text-[10px] font-bold text-[#2C3E50] tracking-wider">KONUM</span>
          </a>

          {/* Ara */}
          <a href="tel:05407903333" className="flex flex-col items-center justify-center gap-1.5 w-1/3 h-full border-x border-gray-200 hover:bg-gray-100 transition-colors">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#1ABC9C] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-[20px]">call</span>
            </div>
            <span className="text-[10px] font-bold text-[#2C3E50] tracking-wider">ARA</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/905407903333?text=Merhaba,%20bilgi%20almak%20istiyorum" target="_blank" className="flex flex-col items-center justify-center gap-1.5 w-1/3 h-full hover:bg-gray-100 transition-colors">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#25D366] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-[20px]">chat</span>
            </div>
            <span className="text-[10px] font-bold text-[#2C3E50] tracking-wider">WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
