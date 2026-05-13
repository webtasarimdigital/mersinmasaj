import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] border-t border-[var(--color-border-dark)] pt-16 pb-8 px-6 lg:px-20 mb-16 lg:mb-0 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-light)] rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
      
      <div className="mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">spa</span>
                Mersin<span className="text-[var(--color-primary)]">Severium</span>Masaj
             </span>
            </Link>
            <p className="text-[var(--color-text-sub)] text-sm leading-relaxed max-w-xs">
              Şehrin stresinden uzaklaşıp kendinizi yenileyeceğiniz profesyonel spa ve masaj merkezi. Deneyimli terapistlerimizle hizmetinizdeyiz.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                className="w-10 h-10 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white transition-all hover:scale-110 shadow-lg"
                href="#"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white transition-all hover:scale-110 shadow-lg"
                href="#"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg font-display tracking-wide">Hizmetlerimiz</h4>
            <div className="flex flex-col gap-3">
              <Link
                className="text-[var(--color-text-sub)] text-sm hover:text-[var(--color-primary)] hover:translate-x-1 transition-all flex items-center gap-2"
                href="/masaj-hizmetleri"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-50"></span>
                Masaj Terapisi
              </Link>
              <Link
                className="text-[var(--color-text-sub)] text-sm hover:text-[var(--color-primary)] hover:translate-x-1 transition-all flex items-center gap-2"
                href="/cilt-bakimi"
              >
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-50"></span>
                Cilt Bakımı
              </Link>
              <Link
                className="text-[var(--color-text-sub)] text-sm hover:text-[var(--color-primary)] hover:translate-x-1 transition-all flex items-center gap-2"
                href="/lazer-epilasyon"
              >
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-50"></span>
                Lazer Epilasyon
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg font-display tracking-wide">İletişim</h4>
            <div className="flex flex-col gap-4">
               <div className="flex gap-4 items-start group">
                 <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-card)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-light)] transition-colors">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">
                     location_on
                   </span>
                 </div>
                 <p className="text-[var(--color-text-sub)] text-sm leading-relaxed pt-1">
                   Yenişehir Mahallesi, Adnan Menderes Bulvarı <br />
                   Mersin, Türkiye
                 </p>
               </div>
               <div className="flex gap-4 items-center group">
                 <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-card)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-light)] transition-colors">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">
                     call
                   </span>
                 </div>
                 <a href="tel:05407903333" className="text-[var(--color-text-sub)] text-sm hover:text-white transition-colors">
                   0540 790 33 33
                 </a>
               </div>
               <div className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-card)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-light)] transition-colors">
                   <span className="material-symbols-outlined text-[var(--color-primary)]">
                     schedule
                   </span>
                 </div>
                 <p className="text-[var(--color-text-sub)] text-sm">
                   Her Gün: 11:30 - 02:00
                 </p>
               </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg font-display tracking-wide">Konum</h4>
            <a
              href="https://maps.app.goo.gl/67E5W57eJYCyj7DKA"
              target="_blank"
              className="h-36 w-full rounded-xl bg-gray-800 bg-cover bg-center overflow-hidden block relative group shadow-lg border border-[var(--color-border-dark)]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKmWu6Xy6DljKRpY8vnd1IBBYIbanJzjhLNg_EyTUorAJ8XhMnKF6zfQKgzDoSWqhYEBL8VaBeSpTGGOQh4Qsr_bC9nVzg2jZCYdXXABUyPriZhtamNcD2lrBAWtfF3g0iDTrkFzrELtQkVLbp7zgH-YyQ0LcWE01h3VX-CbFSNAra0LBlg3tnCNcgqZV6elbSX2sEf-eRqa8gIG2N6yxMIvwXvZSEYwEirPeaB2V1IiK7Fvlc55HjRr1uHuj9vjIOFVCy3snPfyjs=w600-rw")',
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300 flex items-center justify-center">
                <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform group-hover:scale-105 transition-transform flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">map</span>
                  Haritada Aç
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--color-border-dark)] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-text-muted)] gap-4">
          <p>© {new Date().getFullYear()} Mersin Severium Masaj Salonu. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-text-sub)] transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-[var(--color-text-sub)] transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
