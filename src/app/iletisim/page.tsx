"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        <section className="pt-32 pb-16 px-6 lg:px-20 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

           <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16 animate-fade-in-up">
                 <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Bize Ulaşın</h1>
                 <p className="text-[var(--color-text-sub)] text-lg md:text-xl max-w-2xl mx-auto">
                    Randevu almak, hizmetlerimiz hakkında bilgi edinmek veya sorularınız için bizimle iletişime geçebilirsiniz.
                 </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
                 {/* Address Card */}
                 <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-dark)] p-8 rounded-3xl flex flex-col items-center text-center hover:border-[var(--color-primary)]/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                       <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">location_on</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Adresimiz</h3>
                    <p className="text-[var(--color-text-sub)] mb-6">
                       Yenişehir Mahallesi, Adnan Menderes Bulvarı<br />Mersin, Türkiye
                    </p>
                    <a href="https://maps.app.goo.gl/67E5W57eJYCyj7DKA" target="_blank" className="mt-auto text-[var(--color-primary)] font-bold flex items-center gap-2 hover:underline">
                       Haritada Aç <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                 </div>

                 {/* Phone Card */}
                 <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-dark)] p-8 rounded-3xl flex flex-col items-center text-center hover:border-[var(--color-primary)]/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                       <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">call</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Telefon</h3>
                    <p className="text-[var(--color-text-sub)] mb-6">
                       Hızlı randevu ve bilgi için bizi arayabilir veya WhatsApp üzerinden yazabilirsiniz.
                    </p>
                    <a href="tel:05407903333" className="text-2xl font-black text-white hover:text-[var(--color-primary)] transition-colors mb-2">
                       0540 790 33 33
                    </a>
                    <a href="https://wa.me/905407903333?text=Merhaba,%20bilgi%20almak%20istiyorum" target="_blank" className="mt-auto text-[#25D366] font-bold flex items-center gap-2 hover:underline">
                       <span className="material-symbols-outlined text-sm">chat</span> WhatsApp'tan Yazın
                    </a>
                 </div>

                 {/* Hours Card */}
                 <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-dark)] p-8 rounded-3xl flex flex-col items-center text-center hover:border-[var(--color-primary)]/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                       <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">schedule</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Çalışma Saatleri</h3>
                    <p className="text-[var(--color-text-sub)] mb-6">
                       Haftanın her günü kesintisiz hizmetinizdeyiz.
                    </p>
                    <div className="flex flex-col gap-2 w-full mt-auto">
                       <div className="flex justify-between items-center text-white border-b border-[var(--color-border-dark)] pb-2">
                          <span className="text-[var(--color-text-muted)]">Pazartesi - Pazar</span>
                          <span className="font-bold text-[var(--color-primary)]">11:30 - 02:00</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Map Full Width */}
              <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-[var(--color-border-dark)] shadow-2xl animate-fade-in-up">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102146.54522964177!2d34.54921606775681!3d36.80486821213386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4a4c0be6e9f%3A0x4eb421c9fae8b15e!2sMersin!5e0!3m2!1str!2str!4v1715636000000!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
