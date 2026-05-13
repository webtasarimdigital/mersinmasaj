"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const services = [
  {
    id: "klasik",
    title: "Klasik Masaj",
    description: "Stres gidermek için idealdir. Bu klasik İsveç masajı, dolaşımı iyileştirmek ve tüm vücutta rahatlamayı teşvik etmek için uzun, akıcı vuruşlar kullanır.",
    features: ["Kandaki oksijen seviyesini artırır", "Kas toksinlerini azaltır", "Derin rahatlama sağlar"],
    duration: "60 Dakika",
    image: "/images/klasik-masaj.webp",
    message: "Klasik Masaj hakkında bilgi almak istiyorum.",
    introTitle: "Klasik Dokunuş, Derin Rahatlama",
    introDescription: "Günün yorgunluğunu atmak ve bedeninizi şımartmak için en popüler tercihimiz. Klasik masaj ile kaslarınızdaki gerginlik yerini huzura bırakır."
  },
  {
    id: "medikal",
    title: "Medikal Masaj",
    description: "Kronik ağrı ve yaralanma iyileşmesi için hedefe yönelik terapi. Uzmanlarımız, inatçı gerginliği serbest bırakmak için kas dokusunun daha derin katmanlarına odaklanır.",
    features: ["Ağrı giderme ve rehabilitasyon", "Hareket aralığını artırır", "Bölgesel tedavi"],
    duration: "50 Dakika",
    image: "/images/medikal-masaj.webp",
    message: "Medikal Masaj hakkında bilgi almak istiyorum.",
    introTitle: "Ağrılarınıza Profesyonel Çözüm",
    introDescription: "Bedeninizdeki kronik ağrılar ve kas sıkışmaları için uzman terapistlerimizle medikal bir yaklaşım. Sağlığınıza kavuşmanız için buradayız."
  },
  {
    id: "mix",
    title: "Mix Masaj",
    description: "Her iki dünyanın en iyisi. Vücudunuzun özel ihtiyaçlarına göre uyarlanmış Thai esneme ve İsveç rahatlama tekniklerinin kişiselleştirilmiş bir kombinasyonu.",
    features: ["Özelleştirilmiş basınç yoğunluğu", "Tam vücut dengelemesi", "Esnekliği artırır"],
    duration: "60 Dakika",
    image: "/images/mix-masaj.webp",
    message: "Mix Masaj hakkında bilgi almak istiyorum.",
    introTitle: "Kişiye Özel Terapi Deneyimi",
    introDescription: "Farklı masaj tekniklerinin en etkili yönlerini birleştirerek size özel bir seans oluşturuyoruz. Tamamen sizin ihtiyaçlarınıza odaklı bir terapi."
  },
  {
    id: "derin",
    title: "Derin Doku Masajı",
    description: "Özellikle kas gerginliği, kronik ağrı ve duruş bozukluğu yaşayanlar için tavsiye edilir. Kas liflerine ve bağ dokularına derin ve güçlü baskılar uygulanır.",
    features: ["Kronik ağrıları hafifletir", "Duruş bozukluklarını düzeltir", "Sertleşmiş kasları açar"],
    duration: "60 Dakika",
    image: "/images/derin-doku-masaj.png",
    message: "Derin Doku Masajı hakkında bilgi almak istiyorum.",
    introTitle: "Güçlü Dokunuşlar, Gerçek Rahatlama",
    introDescription: "Yoğun spor yapanlar veya masa başında çalışanlar için ideal. Kaslarınızın en derin katmanlarına ulaşarak kronik gerginlikleri ortadan kaldırıyoruz."
  },
  {
    id: "aromaterapi",
    title: "Aromaterapi Masajı",
    description: "Bitkisel öz yağlar kullanılarak yapılan, hem fiziksel hem de zihinsel olarak derin bir rahatlama sağlayan hafif tempolu masajdır.",
    features: ["Doğal bitkisel yağlar", "Zihinsel arınma", "Stres ve kaygıyı azaltır"],
    duration: "60 Dakika",
    image: "/images/aroma-terapi.webp",
    message: "Aromaterapi Masajı hakkında bilgi almak istiyorum.",
    introTitle: "Doğanın İyileştirici Gücü",
    introDescription: "Seçtiğiniz özel uçucu yağların kokusu ve terapistimizin nazik dokunuşlarıyla stresten tamamen arının. Ruhunuzu dinlendiren bir deneyim."
  },
  {
    id: "soft",
    title: "Soft Masaj",
    description: "Hassas ciltler için mükemmel, tamamen rahatlama ve stres atma amaçlı tasarlanmış nazik, yatıştırıcı dokunuşlar. Uyku kalitesini artırır.",
    features: ["Hassas ciltlere uygun", "Uyku kalitesini artırır", "Zihinsel dinginlik"],
    duration: "45 Dakika",
    image: "/images/soft-masaj.webp",
    message: "Soft Masaj hakkında bilgi almak istiyorum.",
    introTitle: "Hafif Dokunuşlar, Büyük Huzur",
    introDescription: "Günün stresinden nazikçe uzaklaşın. Soft masaj ile zihniniz dinginleşirken bedeniniz kuş gibi hafifleyecek."
  },
  {
    id: "thai",
    title: "Thai Masajı",
    description: "Geleneksel uzak doğu teknikleriyle bedenin enerji kanallarını açan, esnetme ve germe hareketlerinden oluşan yağsız masaj uygulamasıdır.",
    features: ["Esnekliği artırır", "Enerji akışını düzenler", "Eklemleri rahatlatır"],
    duration: "60 Dakika",
    image: "/images/spa-relax-green.webp",
    message: "Thai Masajı hakkında bilgi almak istiyorum.",
    introTitle: "Uzak Doğunun Kadim Sırrı",
    introDescription: "Yoga benzeri esneme hareketleri ve akupresür teknikleriyle bedeninizi yeniden canlandırın. Dinamik ve yenileyici bir seans sizi bekliyor."
  },
  {
    id: "sultan",
    title: "Sultan Masaj",
    description: "Kraliyet deneyimi. İki terapist, mümkün olan en derin rahatlama durumunu sağlamak için koreografili bir masaj uygular. Dört elin eşsiz uyumu.",
    features: ["2 Uzman Terapist", "Aromaterapi Yağları", "Senkronize Hareketler"],
    duration: "75 Dakika",
    image: "/images/sultan-masaj.webp",
    message: "Sultan Masaj hakkında bilgi almak istiyorum.",
    isPremium: true,
    introTitle: "Kendinizi Özel Hissedin",
    introDescription: "Sultanlara layık bir bakım. İki terapistin senkronize hareketleriyle benzersiz bir rahatlama deneyimi yaşamaya hazır olun."
  },
  {
    id: "vip",
    title: "VIP Masaj",
    description: "Özel süitinizde, jakuzi keyfi ile başlayan kişiselleştirilmiş bir masaj deneyimi. Premium yağlar ve ikramlarla kendinizi şımartın.",
    features: ["Özel VIP Süit", "Jakuzi Keyfi", "Özel İkramlar"],
    duration: "90 Dakika",
    image: "/images/vip-jakuzi.webp",
    message: "VIP Masaj hakkında bilgi almak istiyorum.",
    isPremium: true,
    introTitle: "Ayrıcalığın Zirvesi",
    introDescription: "Size özel hazırlanmış bir ortamda, tüm detayların düşünüldüğü kusursuz bir hizmet. VIP masaj ile lüksü ve rahatlığı doruklarda yaşayın."
  }
];

export default function MassagePage() {
  const [activeTab, setActiveTab] = useState("klasik");
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
                style={{ backgroundImage: 'url("/images/services-hero.webp")' }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/70 to-[var(--color-bg-dark)]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 items-center justify-center px-4 max-w-4xl text-center animate-fade-in-up">
            <span className="text-[var(--color-primary)] text-sm uppercase tracking-widest font-bold bg-[var(--color-primary)]/10 px-4 py-2 rounded-full border border-[var(--color-primary)]/30 backdrop-blur-sm">
              Uzman Dokunuşlar
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
              Masaj Hizmetleri
            </h1>
            <p className="text-[var(--color-text-sub)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Dengenizi yeniden kurun. Mersin Severium Masaj Salonu'ndaki uzman terapistlerimizle rahatlama sanatını deneyimleyin.
            </p>
            <a href="https://wa.me/905407903333?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" className="mt-4 px-10 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:bg-[var(--color-primary-hover)] transition-all hover:scale-105 shadow-[0_0_20px_rgba(29,184,155,0.4)] flex items-center gap-2">
              <span className="material-symbols-outlined">event_available</span>
              Hemen Randevu Al
            </a>
          </div>
        </section>

        {/* Tabs */}
        <div className="sticky top-[72px] lg:top-[88px] z-40 bg-[var(--color-bg-dark)]/95 backdrop-blur-md border-y border-[var(--color-border-dark)] shadow-lg">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-20">
            <div className="flex overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center items-center gap-6 md:gap-8 h-16">
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
                  <span className="text-sm md:text-base whitespace-nowrap px-2 py-1 rounded-md hover:bg-white/5">{service.title}</span>
                  {activeTab === service.id && (
                     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary)] rounded-t-full shadow-[0_-2px_10px_rgba(29,184,155,0.5)]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Intro */}
        <section className="py-16 px-6 lg:px-20">
          <div key={activeTab} className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl mb-6 opacity-80 animate-pulse">
              self_improvement
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
            <div className={`flex flex-col md:flex-row gap-8 bg-[var(--color-bg-card)] rounded-3xl p-6 md:p-8 border ${activeService.isPremium ? 'border-[#F4C025] shadow-[0_0_40px_rgba(244,192,37,0.15)]' : 'border-[var(--color-border-dark)] shadow-xl hover:border-[var(--color-primary)]/50'} transition-all duration-300 relative overflow-hidden group`}>
              
              {/* Decorative Blur */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -z-10 ${activeService.isPremium ? 'bg-[#F4C025]/10' : 'bg-[var(--color-primary)]/10'}`}></div>

              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden min-h-[350px]">
                <img src={activeService.image} alt={activeService.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white font-medium text-sm text-center">
                    Kendinizi şımartmak için sadece bir adım uzaktasınız.
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white">{activeService.title}</h3>
                  {activeService.isPremium && (
                    <span className="bg-[#F4C025] text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-[0_0_15px_rgba(244,192,37,0.4)]">
                      <span className="material-symbols-outlined text-sm">diamond</span>
                      Premium
                    </span>
                  )}
                </div>
                
                <p className="text-[var(--color-text-sub)] text-lg mb-8 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="space-y-4 mb-10 bg-[var(--color-bg-dark)]/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-white font-semibold mb-2">Bu masajın faydaları:</h4>
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${activeService.isPremium ? 'bg-[#F4C025]/20 text-[#F4C025]' : 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'}`}>
                         <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[var(--color-border-dark)] gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-[var(--color-text-muted)] bg-black/20 px-4 py-2 rounded-lg">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">schedule</span>
                    <span className="font-medium text-white">{activeService.duration}</span>
                  </div>
                  
                  <a
                    href={`https://wa.me/905407903333?text=${encodeURIComponent(activeService.message)}`}
                    target="_blank"
                    className={`w-full sm:w-auto text-center px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2 ${
                       activeService.isPremium 
                       ? 'bg-gradient-to-r from-[#F4C025] to-[#d4a315] text-black shadow-[0_5px_20px_rgba(244,192,37,0.4)] hover:shadow-[0_8px_25px_rgba(244,192,37,0.6)]' 
                       : 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white shadow-[0_5px_20px_rgba(29,184,155,0.4)] hover:shadow-[0_8px_25px_rgba(29,184,155,0.6)]'
                    }`}
                  >
                    <span className="material-symbols-outlined">touch_app</span>
                    Hemen Randevu Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aggressive CTA Banner */}
        <section className="py-12 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-bg-card)] border-y border-[var(--color-border-dark)] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/images/aroma-terapi.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
           <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                 <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Ağrılarınızdan ve Stresten Kurtulun</h2>
                 <p className="text-white/80 text-lg">Hemen randevunuzu oluşturun, size en uygun masajı belirleyelim.</p>
              </div>
              <a href="https://wa.me/905407903333?text=Merhaba,%20hizmetler%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum." target="_blank" className="px-10 py-5 bg-white text-[var(--color-primary)] font-black text-xl rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                 <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
                 0540 790 33 33
              </a>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
