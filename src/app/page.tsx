"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-pulse-glow"
              style={{ backgroundImage: 'url("/images/spa-welcome.webp")', animationDuration: '20s' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/80 via-[var(--color-bg-dark)]/60 to-[var(--color-bg-dark)]"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 flex flex-col items-center text-center animate-fade-in-up -mt-36 sm:-mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              <span className="text-white text-sm tracking-widest uppercase font-medium">Mersin'in En İyi Spa Merkezi</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Ruhunuzu ve <br />
              Bedeninizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#4ade80]">Yenileyin</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-text-sub)] max-w-2xl mb-10 font-light">
              Şehrin gürültüsünden uzaklaşın. Uzman terapistlerimiz ve özel atmosferimizle huzuru yeniden keşfedin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/905407903333?text=Merhaba,%20randevu%20almak%20istiyorum."
                target="_blank"
                className="flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(29,184,155,0.4)] hover:shadow-[0_0_30px_rgba(29,184,155,0.6)] hover:-translate-y-1 gap-2 group"
              >
                Hemen Randevu Al
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <Link
                href="/masaj-hizmetleri"
                className="flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-lg backdrop-blur-md transition-all hover:-translate-y-1"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
             <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">Aşağı Kaydır</span>
             <span className="material-symbols-outlined text-[var(--color-primary)]">keyboard_arrow_down</span>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] py-6 relative overflow-hidden shadow-[0_10px_30px_rgba(29,184,155,0.3)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
             <h3 className="text-white font-bold text-xl md:text-2xl text-center md:text-left">
               Günün Stresinden Hemen Kurtulun.
             </h3>
             <a href="https://wa.me/905407903333?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" className="flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg">
               <span className="material-symbols-outlined">event_available</span>
               Randevu Oluştur
             </a>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 px-6 lg:px-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-3">Tedavilerimiz</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white">Öne Çıkan Hizmetler</h3>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {/* Service Card 1 */}
              <div className="snap-center min-w-[85vw] sm:min-w-[350px] md:min-w-0 group rounded-3xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-dark)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(29,184,155,0.2)] flex flex-col h-full relative">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent opacity-80 z-10"></div>
                  <img src="/images/klasik-masaj.webp" alt="Klasik Masaj" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20 bg-[var(--color-bg-dark)]/80 backdrop-blur-md p-2 rounded-xl text-[var(--color-primary)] border border-white/10 shadow-lg">
                    <span className="material-symbols-outlined">spa</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-20 -mt-10 bg-gradient-to-b from-transparent to-[var(--color-bg-card)]">
                  <h4 className="text-2xl font-bold text-white mb-3">Klasik Masaj</h4>
                  <p className="text-[var(--color-text-sub)] mb-6 flex-1">Günlük stres ve yorgunluktan kurtulmak, kasları gevşetmek için uygulanan geleneksel İsveç masajı tekniği.</p>
                  <Link href="/masaj-hizmetleri" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold group-hover:gap-3 transition-all">
                    Detaylı Bilgi <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="snap-center min-w-[85vw] sm:min-w-[350px] md:min-w-0 group rounded-3xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-dark)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(29,184,155,0.2)] flex flex-col h-full relative">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent opacity-80 z-10"></div>
                  <img src="/images/medikal-masaj.webp" alt="Medikal Masaj" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20 bg-[var(--color-bg-dark)]/80 backdrop-blur-md p-2 rounded-xl text-[var(--color-primary)] border border-white/10 shadow-lg">
                    <span className="material-symbols-outlined">medical_services</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-20 -mt-10 bg-gradient-to-b from-transparent to-[var(--color-bg-card)]">
                  <h4 className="text-2xl font-bold text-white mb-3">Medikal Masaj</h4>
                  <p className="text-[var(--color-text-sub)] mb-6 flex-1">Bölgesel ağrılar, kas tutulmaları ve kronik rahatsızlıklara yönelik profesyonel tedavi edici masaj.</p>
                  <Link href="/masaj-hizmetleri" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold group-hover:gap-3 transition-all">
                    Detaylı Bilgi <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="snap-center min-w-[85vw] sm:min-w-[350px] md:min-w-0 group rounded-3xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-dark)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(29,184,155,0.2)] flex flex-col h-full relative">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent opacity-80 z-10"></div>
                  <img src="/images/vip-jakuzi.webp" alt="VIP Masaj" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20 bg-[var(--color-bg-dark)]/80 backdrop-blur-md p-2 rounded-xl text-[#F4C025] border border-white/10 shadow-lg">
                    <span className="material-symbols-outlined">diamond</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-20 -mt-10 bg-gradient-to-b from-transparent to-[var(--color-bg-card)]">
                  <h4 className="text-2xl font-bold text-white mb-3">VIP Masaj</h4>
                  <p className="text-[var(--color-text-sub)] mb-6 flex-1">Size özel ayrılmış jakuzili VIP odalarımızda, lüks ve konforun buluştuğu eşsiz bir spa deneyimi.</p>
                  <Link href="/masaj-hizmetleri" className="inline-flex items-center gap-2 text-[#F4C025] font-bold group-hover:gap-3 transition-all">
                    Detaylı Bilgi <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
               <Link href="/masaj-hizmetleri" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold transition-all gap-2">
                 Tüm Hizmetleri Gör <span className="material-symbols-outlined">grid_view</span>
               </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-20 bg-[var(--color-bg-card)] relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[100px]"></div>

           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                 <div className="w-full lg:w-1/2 relative">
                    <div className="grid grid-cols-2 gap-4">
                       <img src="/images/spa-relax-green.webp" alt="Spa Atmosphere" className="w-full h-64 object-cover rounded-2xl mt-8 shadow-lg" />
                       <img src="/images/aroma-terapi.webp" alt="Aromatherapy" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
                    </div>
                    {/* Experience Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-bg-dark)] p-6 rounded-2xl border border-[var(--color-border-dark)] shadow-2xl text-center">
                       <span className="block text-4xl font-black text-[var(--color-primary)] mb-1">10+</span>
                       <span className="text-sm text-white font-medium uppercase tracking-wider">Yıllık Deneyim</span>
                    </div>
                 </div>

                 <div className="w-full lg:w-1/2">
                    <h2 className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-3">Neden Biz?</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Mersin'in En Prestijli <br/> Masaj Salonu</h3>
                    <p className="text-[var(--color-text-sub)] text-lg mb-8 leading-relaxed">
                       Uzman kadromuz, hijyenik ortamımız ve kişiye özel hizmet anlayışımızla sizlere unutulmaz bir deneyim sunuyoruz. Bedeninizi ve ruhunuzu şımartmak için doğru yerdesiniz.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                             <span className="material-symbols-outlined text-[var(--color-primary)]">verified</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg mb-1">Sertifikalı Terapistler</h4>
                             <p className="text-[var(--color-text-muted)] text-sm">Alanında uzman, eğitimli profesyoneller.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                             <span className="material-symbols-outlined text-[var(--color-primary)]">clean_hands</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg mb-1">%100 Hijyen</h4>
                             <p className="text-[var(--color-text-muted)] text-sm">Her seanstan sonra sterilize edilen odalar.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                             <span className="material-symbols-outlined text-[var(--color-primary)]">support_agent</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg mb-1">Özel İlgi</h4>
                             <p className="text-[var(--color-text-muted)] text-sm">Size ve ihtiyaçlarınıza özel terapi programı.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                             <span className="material-symbols-outlined text-[var(--color-primary)]">local_cafe</span>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg mb-1">Ücretsiz İkramlar</h4>
                             <p className="text-[var(--color-text-muted)] text-sm">Sıcak ve soğuk içecek ikramlarımız.</p>
                          </div>
                       </div>
                    </div>
                    
                    <a href="https://wa.me/905407903333?text=Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline">
                      <span className="material-symbols-outlined">chat</span> Bizimle İletişime Geçin
                    </a>
                 </div>
              </div>
           </div>
        </section>

        {/* Spa Ritual Process */}
        <section className="py-24 px-6 lg:px-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-3">Deneyim</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white">Spa Ritüelimiz</h3>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
              <p className="text-[var(--color-text-sub)] mt-6 max-w-2xl mx-auto text-lg">Salonumuzdan içeri adım attığınız andan itibaren, tamamen size özel tasarlanmış bir rahatlama yolculuğuna çıkacaksınız.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-dark)] relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-[var(--color-primary)]/10 text-8xl font-black absolute top-4 right-4 z-0 group-hover:text-[var(--color-primary)]/20 transition-colors">01</div>
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-6">local_cafe</span>
                    <h4 className="text-xl font-bold text-white mb-3">Karşılama</h4>
                    <p className="text-[var(--color-text-sub)]">Güler yüzlü ekibimiz sizi bitki çayı veya detoks suyu ikramımızla karşılar. İhtiyaçlarınızı dinleyip, size en uygun masaj türünü belirleriz.</p>
                  </div>
               </div>
               <div className="bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-dark)] relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-[var(--color-primary)]/10 text-8xl font-black absolute top-4 right-4 z-0 group-hover:text-[var(--color-primary)]/20 transition-colors">02</div>
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-6">bathtub</span>
                    <h4 className="text-xl font-bold text-white mb-3">Hazırlık</h4>
                    <p className="text-[var(--color-text-sub)]">Sterilize edilmiş, loş aydınlatmalı ve dinlendirici müziklerin çaldığı özel odanıza alınırsınız. Temiz havlu ve peştemalleriniz hazırdır.</p>
                  </div>
               </div>
               <div className="bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-dark)] relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-[var(--color-primary)]/10 text-8xl font-black absolute top-4 right-4 z-0 group-hover:text-[var(--color-primary)]/20 transition-colors">03</div>
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-6">spa</span>
                    <h4 className="text-xl font-bold text-white mb-3">Terapi</h4>
                    <p className="text-[var(--color-text-sub)]">Uzman terapistimiz, belirlediğiniz tekniklerle, kaslarınızı gevşeten ve zihninizi arındıran profesyonel masaj seansına başlar.</p>
                  </div>
               </div>
               <div className="bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-dark)] relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-[var(--color-primary)]/10 text-8xl font-black absolute top-4 right-4 z-0 group-hover:text-[var(--color-primary)]/20 transition-colors">04</div>
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-6">self_improvement</span>
                    <h4 className="text-xl font-bold text-white mb-3">Dinlenme</h4>
                    <p className="text-[var(--color-text-sub)]">Seans bitiminde anında kalkmak zorunda değilsiniz. Dinlenme alanımızda sıcak içeceğinizi yudumlayarak rahatlamanın tadını çıkarabilirsiniz.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 lg:px-20 bg-[var(--color-bg-dark)] border-y border-[var(--color-border-dark)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-3">Müşteri Yorumları</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white">Sizden Gelenler</h3>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 gap-6">
              <div className="snap-center min-w-[85vw] sm:min-w-[400px] md:w-1/3 bg-[var(--color-bg-card)] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#F4C025] mb-6 text-xl">
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 italic">"Mersin'de birçok yeri denedim ama burası gerçekten bambaşka. Özellikle Medikal Masaj kronik sırt ağrılarıma çok iyi geldi. Ortam inanılmaz temiz ve personel çok ilgili."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center font-bold text-[var(--color-primary)]">A.K</div>
                  <div>
                    <h5 className="text-white font-bold">Ahmet K.</h5>
                    <span className="text-[var(--color-text-muted)] text-sm">Düzenli Müşteri</span>
                  </div>
                </div>
              </div>
              
              <div className="snap-center min-w-[85vw] sm:min-w-[400px] md:w-1/3 bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-primary)]/20 shadow-[0_0_30px_rgba(29,184,155,0.1)] flex flex-col justify-between relative">
                <div className="absolute top-0 right-8 -mt-4 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full">Popüler</div>
                <div>
                  <div className="flex gap-1 text-[#F4C025] mb-6 text-xl">
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 italic">"Eşimle birlikte VIP odada masaj aldık. Jakuzi keyfi ve ardından uygulanan Aromaterapi masajı tüm haftanın stresini sildi süpürdü. Kesinlikle tavsiye ediyorum."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F4C025]/20 flex items-center justify-center font-bold text-[#F4C025]">S.Y</div>
                  <div>
                    <h5 className="text-white font-bold">Seda Y.</h5>
                    <span className="text-[var(--color-text-muted)] text-sm">VIP Üye</span>
                  </div>
                </div>
              </div>

              <div className="snap-center min-w-[85vw] sm:min-w-[400px] md:w-1/3 bg-[var(--color-bg-card)] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#F4C025] mb-6 text-xl">
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                    <span className="material-symbols-outlined fill-current">star</span>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 italic">"İş yorgunluğundan boynumu çeviremiyordum. Bir seans klasik masaj bile mucizeler yarattı. İçerideki müzik ve atmosfer çok dinlendirici. Teşekkürler Mersin Severium."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center font-bold text-[var(--color-primary)]">M.T</div>
                  <div>
                    <h5 className="text-white font-bold">Murat T.</h5>
                    <span className="text-[var(--color-text-muted)] text-sm">Müşteri</span>
                  </div>
                </div>
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
                   Masaja gelirken ne giymeliyim?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Rahat kıyafetler tercih edebilirsiniz. Masaj esnasında kullanmanız için sterilize edilmiş tek kullanımlık iç çamaşırı, peştemal ve havlular salonumuz tarafından size temin edilmektedir.</p>
               </div>
               
               <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                 <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">help</span>
                   Hangi masajı seçeceğime nasıl karar verebilirim?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Eğer ilk defa masaj yaptırıyorsanız veya hafif bir rahatlama arıyorsanız Klasik Masajı önerebiliriz. Kronik ağrılarınız varsa Medikal Masaj, tamamen stresten arınmak istiyorsanız Aromaterapi Masajı idealdir. Geldiğinizde uzmanlarımız da sizi yönlendirecektir.</p>
               </div>

               <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                 <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">help</span>
                   Randevusuz gelebilir miyim?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Size en iyi ve beklemesiz hizmeti sunabilmemiz için randevu ile çalışıyoruz. Gelmeden önce WhatsApp üzerinden veya telefonla bizi arayarak yerinizi ayırtmanızı önemle rica ederiz.</p>
               </div>

               <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
                 <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">help</span>
                   Hamileler masaj yaptırabilir mi?
                 </h4>
                 <p className="text-[var(--color-text-sub)] pl-9">Hamileliğin ilk 3 ayında masaj tavsiye etmiyoruz. 3. aydan sonra doktorunuzun onayıyla birlikte uzman terapistlerimiz tarafından hafif baskılı özel masajlar uygulanabilir.</p>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-24 px-6 lg:px-20 relative">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-dark)] rounded-3xl p-10 md:p-16 border border-[var(--color-border-dark)] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[url('/images/spa-relax-green.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Kendinize Bir İyilik Yapın</h2>
              <p className="text-[var(--color-text-sub)] text-lg mb-10">
                Bugün randevunuzu alın, Mersin Severium Masaj Salonu'nda yenilenmenin ve huzurun tadını çıkarın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/905407903333?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg hover:bg-[var(--color-primary-hover)] transition-all shadow-[0_0_20px_rgba(29,184,155,0.3)] hover:-translate-y-1 gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  WhatsApp'tan Yazın
                </a>
                <a href="tel:05407903333" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 border border-white/10 transition-all hover:-translate-y-1 gap-2 backdrop-blur-md">
                  <span className="material-symbols-outlined">call</span>
                  Hemen Arayın
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
