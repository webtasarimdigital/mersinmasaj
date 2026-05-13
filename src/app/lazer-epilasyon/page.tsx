"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const services = [
  {
    id: "buz",
    title: "Buz Lazer",
    description: "Yeni nesil soğutma teknolojisi ile acısız, ağrısız ve son derece konforlu epilasyon deneyimi. Tüm cilt ve kıl tiplerinde etkilidir.",
    features: ["Acısız ve ağrısız uygulama", "Hızlı sonuç", "Dört mevsim uygulanabilir"],
    duration: "Bölgeye Göre",
    image: "/images/buz-lazer.webp",
    message: "Buz Lazer Epilasyon hakkında bilgi almak istiyorum.",
    introTitle: "Konforlu ve Kesin Çözüm",
    introDescription: "Buz lazerin gelişmiş soğutma başlığı sayesinde epilasyon artık bir acı değil, konforlu bir bakım rutinine dönüşüyor."
  },
  {
    id: "tum-vucut",
    title: "Tüm Vücut Lazer",
    description: "İstenmeyen tüylerden kalıcı olarak kurtulmak için en ekonomik ve etkili çözüm. Erkek ve kadınlara özel paket programlar.",
    features: ["Ekonomik paketler", "Kalıcı pürüzsüzlük", "Uzman estetisyenler"],
    duration: "45-60 Dakika",
    image: "/images/tum-vucut-lazer.webp",
    message: "Tüm Vücut Lazer Epilasyon paketleri hakkında bilgi almak istiyorum.",
    introTitle: "Pürüzsüz Bir Cilde Merhaba",
    introDescription: "Tüm vücut paketlerimizle istenmeyen tüylerle vedalaşın. Size özel planlanmış seanslarla kalıcı sonuçlara ulaşın."
  },
  {
    id: "bolgesel",
    title: "Bölgesel Lazer",
    description: "Yüz, koltuk altı, bikini bölgesi, sırt veya bacak gibi spesifik alanlar için hedefe yönelik etkili epilasyon hizmeti.",
    features: ["İhtiyaca özel planlama", "Kısa seans süreleri", "Yüksek başarı oranı"],
    duration: "10-30 Dakika",
    image: "/images/bolgesel-lazer.webp",
    message: "Bölgesel Lazer Epilasyon hakkında bilgi almak istiyorum.",
    introTitle: "Sadece İhtiyacınız Olan Bölgeye",
    introDescription: "Rahatsızlık duyduğunuz belirli bölgeler için hızlı ve etkili çözümler sunuyoruz. Kendi paketinizi kendiniz oluşturun."
  }
];

export default function LaserPage() {
  const [activeTab, setActiveTab] = useState("buz");
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
             <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/images/lazer-epilasyon-hero.webp")' }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/70 to-[var(--color-bg-dark)]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 items-center justify-center px-4 max-w-4xl text-center animate-fade-in-up">
            <span className="text-[var(--color-primary)] text-sm uppercase tracking-widest font-bold">
              Kalıcı Pürüzsüzlük
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
              Lazer Epilasyon
            </h1>
            <p className="text-[var(--color-text-sub)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Son teknoloji cihazlarımız ve uzman estetisyenlerimizle istenmeyen tüylere acısız ve kalıcı olarak veda edin.
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
              flare
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
      </main>
      
      <Footer />
    </div>
  );
}
