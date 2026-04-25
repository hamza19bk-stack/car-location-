import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  CalendarDays, 
  ChevronRight, 
  Star,
  Menu,
  X,
  ArrowRight,
  Users,
  Settings2,
  Fuel,
  DoorOpen,
  Briefcase,
  Snowflake,
  UserCheck,
  CreditCard,
  Globe
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [lang, setLang] = useState<Language>('fr');

  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-[#070707] text-white ${lang === 'ar' ? 'font-sans text-right' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className={`flex items-center gap-3 cursor-pointer ${lang === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <img 
                src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777131526/Gemini_Generated_Image_ldh4o2ldh4o2ldh4_dyk5ql.png" 
                alt="NAYS CAR" 
                className="w-10 h-10 object-cover rounded-lg"
              />
              <span className="font-display font-bold text-2xl tracking-tight">NAYS CAR</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-white text-sm font-medium hover:text-brand-primary transition-colors">{t.nav.home}</a>
              <a href="#category" className="text-gray-400 text-sm font-medium hover:text-brand-primary transition-colors">{t.nav.category}</a>
              <a href="#about" className="text-gray-400 text-sm font-medium hover:text-brand-primary transition-colors">{t.nav.aboutUs}</a>
              <a href="#blog" className="text-gray-400 text-sm font-medium hover:text-brand-primary transition-colors">{t.nav.blog}</a>
              <a href="#contact" className="text-gray-400 text-sm font-medium hover:text-brand-primary transition-colors">{t.nav.contactUs}</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">
                <button 
                  onClick={() => setLang('fr')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${lang === 'fr' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('ar')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${lang === 'ar' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  AR
                </button>
              </div>
              <a href="https://wa.me/212665253565" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#22bf5b] transition-colors flex items-center gap-2">
                {t.nav.whatsappUs}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 shrink-0">
                <button 
                  onClick={() => setLang('fr')}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors ${lang === 'fr' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors ${lang === 'en' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('ar')}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors ${lang === 'ar' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  AR
                </button>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-brand-primary focus:outline-none shrink-0"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-4 pt-2 pb-6 space-y-4 shadow-2xl"
          >
            <a href="#" className="block px-3 py-2 text-white font-medium rounded-md">{t.nav.home}</a>
            <a href="#category" className="block px-3 py-2 text-gray-400 font-medium hover:text-white rounded-md">{t.nav.category}</a>
            <a href="#about" className="block px-3 py-2 text-gray-400 font-medium hover:text-white rounded-md">{t.nav.aboutUs}</a>
            <a href="#blog" className="block px-3 py-2 text-gray-400 font-medium hover:text-white rounded-md">{t.nav.blog}</a>
            <a href="#contact" className="block px-3 py-2 text-gray-400 font-medium hover:text-white rounded-md">{t.nav.contactUs}</a>
            <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
              <a href="https://wa.me/212665253565" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white font-bold px-4 py-3 rounded-full hover:bg-[#22bf5b] transition-colors flex items-center justify-center gap-2">
                {t.nav.whatsappUs}
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-48 overflow-hidden flex flex-col items-center min-h-[80vh] justify-center">
        {/* Background Video Behind Text */}
        <div className="absolute inset-0 z-0">
          <video 
            src="https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1777145256/Drone_orbit_shot_202604252127_ohyhue.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-[#070707]/60 to-[#070707]" />
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 rounded-[100%] blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mx-auto text-center max-w-4xl relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-display font-bold text-white tracking-tight leading-[1.05]"
            >
              {t.hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="https://wa.me/212665253565" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                {t.hero.bookACar} <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
              </a>
              <button className="w-full sm:w-auto text-white font-medium px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
                {t.hero.howItWorks}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section (Infinite Horizontal Scroll) */}
      <section className="py-12 border-y border-white/5 bg-[#0a0a0a] overflow-hidden whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex w-max animate-scroll items-center gap-16 md:gap-32 opacity-60 grayscale hover:grayscale-0 transition-opacity duration-300">
            {/* Repeated twice to create the infinite loop effect continuously */}
            {[
              "Hyundai Tucson", "Volkswagen T-Roc", "Peugeot 208", 
              "Renault Clio 5", "Hyundai i20", "Citroën C3",
              "Hyundai Tucson", "Volkswagen T-Roc", "Peugeot 208", 
              "Renault Clio 5", "Hyundai i20", "Citroën C3"
            ].map((brand, i) => (
              <span key={i} className={`font-display font-medium tracking-widest text-2xl text-white ${lang === 'ar' ? 'font-sans' : ''}`}>
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area - Split between Features and Featured Cars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 mb-24 lg:grid-cols-2 gap-16 items-center">
            {/* Features Left */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                {t.features.title}
              </h2>
              <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
                {t.features.subtitle}
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="mt-1 shrink-0">
                    <div className="w-10 h-10 rounded-full border border-brand-primary/30 flex items-center justify-center">
                      <MapPin className="text-brand-primary" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{t.features.locationTitle}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t.features.locationDesc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 shrink-0">
                    <div className="w-10 h-10 rounded-full border border-brand-primary/30 flex items-center justify-center">
                      <MapPin className="text-brand-primary" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{t.features.accessTitle}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t.features.accessDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-[2rem] overflow-hidden h-[400px] md:h-[500px]">
                <img 
                  src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777130965/Fes_City_in_Morocco_xo6h3l.png" 
                  alt="Fes City in Morocco" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Car Grid Component within the same flow */}
          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-white mb-10">{t.fleet.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.cars.map((car, idx) => (
                <div key={idx} onClick={() => setSelectedCar(car)} className="bg-brand-card rounded-[2rem] p-4 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 group cursor-pointer">
                  <div className="rounded-[1.5rem] overflow-hidden mb-5 h-56 bg-black relative">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                  <div className="px-3 pb-2">
                    <p className="text-gray-500 text-sm mb-1 font-medium">{car.type}</p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-bold text-xl font-display" dir="ltr">{car.name}</h3>
                      <span className="bg-[#2a1608] text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold border border-brand-primary/20">
                        {car.price} <span className="uppercase">{car.currency}</span><span className="text-brand-primary/70 text-xs font-normal">{t.fleet.perDay}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.testimonials.title}</h2>
            <p className="text-gray-400">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((test, idx) => (
              <div key={idx} className="bg-brand-card p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors">
                <div className={`flex gap-1 mb-6 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="text-brand-primary fill-brand-primary" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 h-20">"{test.text}"</p>
                <div>
                  <p className="text-white font-bold" dir="auto">{test.author}</p>
                  <p className="text-gray-500 text-xs mt-1">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-12 bg-[#070707] z-30 relative px-4 md:px-8">
        <div className="bg-brand-card rounded-3xl md:rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
          
          <div className="flex-1 flex items-center px-4 md:px-6 w-full md:w-auto md:border-b border-white/5 pb-4 md:pb-0">
            <div className={`w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 ${lang === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <MapPin className="text-brand-primary" size={20} />
            </div>
            <div className="w-full">
              <p className="text-white font-bold text-sm mb-0.5">{t.search.bookNowTitle}</p>
              <p className="text-gray-500 text-xs truncate">{t.search.city}</p>
            </div>
          </div>
          
          <div className="flex-1 flex items-center px-4 md:px-6 w-full md:w-auto md:border-b border-white/5 pb-4 md:pb-0">
            <div className={`w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 ${lang === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <CalendarDays className="text-brand-primary" size={20} />
            </div>
            <div className="w-full">
              <p className="text-white font-bold text-sm mb-0.5">{t.search.pickUpDate}</p>
              <p className="text-gray-500 text-xs truncate" dir="auto">{t.search.date1}</p>
            </div>
          </div>

          <div className="flex-1 flex items-center px-4 md:px-6 w-full md:w-auto md:border-b border-white/5 pb-4 md:pb-0">
            <div className={`w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 ${lang === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <CalendarDays className="text-brand-primary" size={20} />
            </div>
            <div className="w-full">
              <p className="text-white font-bold text-sm mb-0.5">{t.search.returnDate}</p>
              <p className="text-gray-500 text-xs truncate" dir="auto">{t.search.date2}</p>
            </div>
          </div>

          <div className="w-full md:w-auto px-2 md:px-0">
            <a href="https://wa.me/212665253565" target="_blank" rel="noopener noreferrer" className="block text-center w-full md:w-auto bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl md:rounded-full hover:bg-[#22bf5b] transition-colors text-sm whitespace-nowrap">
              {t.search.bookNow}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden h-[400px] flex items-center justify-center text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=2000&q=80" 
                alt="Cars aligned" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-2xl px-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t.cta.title}</h2>
              <p className="text-gray-300 mb-8 font-light leading-relaxed">
                {t.cta.subtitle}
              </p>
              <button className="bg-brand-primary text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition-colors">
                {t.cta.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{t.map.title}</h2>
            <p className="text-gray-400 font-light text-lg">{t.map.subtitle}</p>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px] w-full">
            <iframe 
              src="https://maps.google.com/maps?q=NAYS%20CAR%20Fes&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NAYS CAR Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-16 pb-8 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777131526/Gemini_Generated_Image_ldh4o2ldh4o2ldh4_dyk5ql.png" 
                alt="NAYS CAR" 
                className="w-8 h-8 object-cover rounded-md grayscale hover:grayscale-0 transition-all"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white mb-0" dir="ltr">NAYS CAR</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.company}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.service}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.newsletter}</a>
            </div>
          </div>
          
          <div className="flex justify-center text-center">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} NAYS CAR. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

       {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-gray-900 rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row border border-white/20 text-left" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <button onClick={() => setSelectedCar(null)} className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full p-2 transition-colors z-10`}>
              <X size={24} />
            </button>
            <div className={`md:w-1/2 bg-gray-50 flex items-center justify-center p-8 rounded-t-[2rem] ${lang === 'ar' ? 'md:rounded-tr-none md:rounded-r-[2rem]' : 'md:rounded-tl-none md:rounded-l-[2rem]'}`}>
              <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply" />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col space-y-6">
              <div>
                <span className="uppercase text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-md inline-block">{selectedCar.type}</span>
                <div className="flex justify-between items-start mt-4">
                  <h2 className="text-3xl font-display font-bold text-gray-900" dir="ltr">{selectedCar.name}</h2>
                  <div className={`whitespace-nowrap ${lang === 'ar' ? 'mr-4 text-left' : 'ml-4 text-right'}`}>
                    <span className="text-sm font-medium text-gray-500 block">{t.modal.from}</span>
                    <p className="text-2xl font-bold text-gray-900 leading-none" dir="ltr">{selectedCar.price} {selectedCar.currency}</p>
                    <span className="text-xs text-gray-400 block">{t.modal.perDay}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{t.modal.similar}</p>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{selectedCar.details.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-gray-100">
                  <Users className="text-gray-700" size={20} />
                  <span className="text-xs font-semibold text-gray-800">{selectedCar.details.passengers}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-gray-100">
                  <Settings2 className="text-gray-700" size={20} />
                  <span className="text-xs font-semibold text-gray-800 text-center">{selectedCar.details.transmission}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-gray-100">
                  <Fuel className="text-gray-700" size={20} />
                  <span className="text-xs font-semibold text-gray-800 text-center">{selectedCar.details.fuelType}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-gray-100">
                  <DoorOpen className="text-gray-700" size={20} />
                  <span className="text-xs font-semibold text-gray-800">{selectedCar.details.doors}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-gray-100">
                  <Briefcase className="text-gray-700" size={20} />
                  <span className="text-xs font-semibold text-gray-800 text-center">{selectedCar.details.luggage}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-gray-100">
                  <Snowflake className="text-gray-700" size={20} />
                  <span className="text-xs font-semibold text-gray-800 text-center text-[10px] sm:text-xs">{selectedCar.details.airConditioning}</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-gray-900 mb-4">{t.modal.requirements}</h3>
                <div className="bg-gray-50 rounded-2xl p-5 space-y-4 border border-gray-100">
                  {selectedCar.details.requirements.map((req: any, idx: number) => {
                    const Icon = idx === 0 ? UserCheck : CreditCard;
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1">
                          <Icon className="text-gray-700 bg-white p-1.5 rounded-full shadow-sm" size={28} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{req.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{req.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                 <div className="hidden sm:flex flex-col">
                    <span className="text-sm font-medium text-gray-500 block">{t.modal.from}</span>
                    <p className="text-xl font-bold text-gray-900 leading-none" dir="ltr">{selectedCar.price} {selectedCar.currency}</p>
                    <span className="text-xs text-gray-400">{t.modal.perDay}</span>
                  </div>
                <a href={`https://wa.me/212665253565?text=${t.modal.whatsappMessage}${selectedCar.name}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#22bf5b] transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#25D366]/20 w-full sm:w-auto">
                  {t.modal.continueBooking} <ChevronRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
