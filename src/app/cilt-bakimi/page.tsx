"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "hydrafacial",
    title: "HydraFacial",
    description: "Amerikan cilt bakım teknolojisi ile cildinizi derinlemesine temizler, soyar, yeniler ve nemlendirir. Siyah nokta ve akne problemlerine anında çözüm sunar.",
    features: ["Derinlemesine temizlik", "Anında parlaklık", "Acısız ve konforlu"],
    duration: "45-60 Dakika",
    image: "/images/aroma-terapi.webp",
    message: "HydraFacial cilt bakımı hakkında bilgi almak istiyorum.",
    introTitle: "Işıl Işıl Bir Cilt",
    introDescription: "Cildinizin ihtiyacı olan nemi ve vitaminleri kazandıran, yaşlanma karşıtı ve yenileyici Amerikan cilt bakımı ile tanışın."
  },
  {
    id: "antiaging",
    title: "Anti-Aging Bakım",
    description: "İnce kırışıklıklar, sarkmalar ve cilt tonu eşitsizlikleri için özel olarak formüle edilmiş serumlar ve radyofrekans teknolojileri kullanılarak yapılan lifting etkili bakımdır.",
    features: ["Lifting (kaldırma) etkisi", "Kollajen üretimini tetikler", "Genç ve taze görünüm"],
    duration: "60 Dakika",
    image: "/images/soft-masaj.webp",
    message: "Anti-Aging Cilt Bakımı hakkında bilgi almak istiyorum.",
    introTitle: "Zamana Meydan Okuyun",
    introDescription: "Cilt elastikiyetini geri kazandıran profesyonel anti-aging protokollerimizle yıllara meydan okuyan genç bir görünüme sahip olun."
  },
  {
    id: "akne",
    title: "Akne ve Leke Tedavisi",
    description: "Aktif aknelerin kurutulması, sivilce izlerinin ve güneş lekelerinin giderilmesi için medikal peeling ve özel solüsyonlarla uygulanan tedavi edici protokoldür.",
    features: ["Leke açıcı etki", "Sebum (yağ) dengesi", "Gözenek sıkılaştırma"],
    duration: "45-60 Dakika",
    image: "/images/klasik-masaj.webp",
    message: "Akne ve Leke Tedavisi hakkında bilgi almak istiyorum.",
    introTitle: "Kusursuz Bir Ten",
    introDescription: "Akne ve lekeler kaderiniz değil. Doğru medikal ürün ve cihaz kombinasyonlarıyla pürüzsüz bir cilde kavuşmanız için yanınızdayız."
  }
];

export default function SkinCarePage() {
  const [activeTab, setActiveTab] = useState("hydrafacial");
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
             <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/images/spa-relax-green.webp")' }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/70 to-[var(--color-bg-dark)]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 items-center justify-center px-4 max-w-4xl text-center animate-fade-in-up">
            <span className="text-[var(--color-primary)] text-sm uppercase tracking-widest font-bold">
              Kusursuz Güzellik
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
              Cilt Bakımı
            </h1>
            <p className="text-[var(--color-text-sub)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Cildinizin ihtiyacı olan profesyonel dokunuşlar. Nem dengesi, derinlemesine temizlik ve yaşlanma karşıtı tedavilerle cildinizi yeniden canlandırın.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="sticky top-[72px] lg:top-[88px] z-40 bg-[var(--color-bg-dark)]/95 backdrop-blur-md border-y border-[var(--color-border-dark)]">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-20">
            <div className="flex overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center items-center gap-6 md:gap-10 h-16">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative flex items-center justify-center h-full shrink-0 transition-colors ${
                    activeTab === service.id
                      ? "text-[var(--color-primary)] font-bold"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  <span className="text-sm md:text-base whitespace-nowrap">{service.title}</span>
                  {activeTab === service.id && (
                     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary)] rounded-t-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Intro */}
        <section className="py-16 px-6 lg:px-20">
          <div key={activeTab} className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl mb-6 opacity-80">
              face_retouching_natural
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {activeService.introTitle}
            </h2>
            <p className="text-[var(--color-text-sub)] text-lg leading-relaxed">
              {activeService.introDescription}
            </p>
          </div>
        </section>

        {/* Service Detail Card */}
        <section className="pb-24 px-6 lg:px-20">
          <div key={activeTab} className="max-w-5xl mx-auto animate-fade-in-up">
            <div className={`flex flex-col md:flex-row gap-8 bg-[var(--color-bg-card)] rounded-3xl p-6 md:p-8 border border-[var(--color-border-dark)] shadow-xl transition-all`}>
              
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden min-h-[300px]">
                <img src={activeService.image} alt={activeService.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">{activeService.title}</h3>
                
                <p className="text-[var(--color-text-sub)] text-lg mb-8 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="space-y-4 mb-10">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                         <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[var(--color-border-dark)] gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                    <span className="material-symbols-outlined">schedule</span>
                    <span className="font-medium">{activeService.duration}</span>
                  </div>
                  
                  <a
                    href={`https://wa.me/905407903333?text=${encodeURIComponent(activeService.message)}`}
                    target="_blank"
                    className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(29,184,155,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white"
                  >
                    Randevu Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-20 relative bg-gradient-to-b from-[var(--color-bg-dark)] to-[var(--color-bg-card)] border-t border-[var(--color-border-dark)]">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                 <div className="w-full lg:w-1/2">
                    <h2 className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-3">Uzman Bakım</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Neden Profesyonel Cilt Bakımı?</h3>
                    <p className="text-[var(--color-text-sub)] text-lg mb-8 leading-relaxed">
                       Evde yaptığınız bakımlar cildin sadece en üst katmanına (epidermis) ulaşırken, klinik ortamda yapılan medikal cilt bakımları dermis tabakasına inerek kalıcı ve derinlemesine çözümler sunar.
                    </p>
                    
                    <ul className="space-y-4">
                       <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 mt-1">
                             <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">water_drop</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg">Derinlemesine Temizlik</h4>
                             <p className="text-[var(--color-text-muted)]">Cilt altındaki siyah nokta (komedon), yağ butonları ve birikmiş kirlerden cildi tamamen arındırır.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 mt-1">
                             <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">healing</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg">Hücre Yenilenmesi</h4>
                             <p className="text-[var(--color-text-muted)]">Cilt yüzeyindeki ölü hücreler uzaklaştırılarak, yeni ve sağlıklı cilt dokusunun oluşumu tetiklenir.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 mt-1">
                             <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">health_and_safety</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg">Yaşlanma Karşıtı Koruma</h4>
                             <p className="text-[var(--color-text-muted)]">Kolajen ve elastin üretimi desteklenerek kırışıklık oluşumu engellenir, cilt sıkılaşır.</p>
                          </div>
                       </li>
                    </ul>
                 </div>
                 
                 <div className="w-full lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-primary)] to-[#4ade80] rounded-[3rem] rotate-3 opacity-20 blur-xl"></div>
                    <img src="/images/aroma-terapi.webp" alt="Profesyonel Cilt Bakımı Mersin" className="relative w-full h-[500px] object-cover rounded-[3rem] shadow-2xl border border-white/10" />
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-20 relative bg-[var(--color-bg-card)]/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-3">Soru & Cevap</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white">Sıkça Sorulan Sorular</h3>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="space-y-6">
               <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                 <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">help</span>
                   Cilt bakımı ne sıklıkla yapılmalıdır?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Normal bir cilt yapısına sahipseniz hücre yenilenme döngüsü olan ortalama 28 günde bir profesyonel cilt bakımı yaptırmanız tavsiye edilir. Ancak akneli veya problemli ciltlerde uzmanımız bu süreyi 15 güne indirebilir.</p>
               </div>
               
               <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                 <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">help</span>
                   İşlem sonrası güneşe çıkabilir miyim?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Derinlemesine temizlik ve peeling işlemlerinden sonra cildiniz hassaslaşacağı için doğrudan güneşe maruz kalmamalısınız. Bakım sonunda uzmanlarımız tarafından cildinize yüksek faktörlü güneş koruyucu uygulanacaktır.</p>
               </div>

               <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                 <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">help</span>
                   İşlem sırasında acı hisseder miyim?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Yeni nesil Amerikan cilt bakımı cihazları ve HydraFacial teknolojisi sayesinde işlemlerimiz tamamen acısız ve konforludur. Komedon temizliğinde bile minimum hassasiyet yaşarsınız.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Aggressive CTA Banner */}
        <section className="py-12 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-bg-card)] border-y border-[var(--color-border-dark)] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/images/soft-masaj.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
           <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                 <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Cildinize Hak Ettiği Değeri Verin</h3>
                 <p className="text-white/80 font-medium">Ücretsiz cilt analizi ve size özel bakım paketleri için hemen ulaşın.</p>
              </div>
              <a href="https://wa.me/905407903333?text=Merhaba,%20ücretsiz%20cilt%20analizi%20için%20randevu%20almak%20istiyorum." target="_blank" className="whitespace-nowrap bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl flex items-center gap-2">
                 <span className="material-symbols-outlined">calendar_month</span>
                 Randevu Al
              </a>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
