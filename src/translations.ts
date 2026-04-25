export type Language = 'fr' | 'ar' | 'en';

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      category: "Catégorie",
      aboutUs: "À propos",
      blog: "Blog",
      contactUs: "Contactez-nous",
      whatsappUs: "Contactez-nous sur WhatsApp",
    },
    hero: {
      title: "Trouvez la Voiture Parfaite pour Chaque Voyage",
      subtitle: "NAYS CAR vous donne accès à des voitures premium à des prix transparents. Choisissez votre véhicule, indiquez vos dates et prenez la route en quelques clics.",
      bookACar: "Réserver une voiture",
      howItWorks: "Comment ça marche",
    },
    features: {
      title: "Conduisez vers votre destination avec un confort maximal",
      subtitle: "Qu'il s'agisse d'un voyage d'affaires rapide ou d'une escapade d'un week-end, NAYS CAR rend la location de voiture simple, sûre et confortable.",
      locationTitle: "Emplacement de choix à Fès",
      locationDesc: "Idéalement situé au cœur de Fès, ce qui facilite la récupération de votre voiture premium et le début rapide de votre voyage.",
      accessTitle: "Accessibilité facile",
      accessDesc: "Que vous ayez besoin d'une livraison à l'aéroport ou d'une prise en charge en ville, notre emplacement vous garantit d'obtenir votre voiture sans tracas.",
    },
    fleet: {
      title: "Notre flotte premium",
      perDay: "/jour",
    },
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "Découvrez pourquoi des milliers d'utilisateurs nous font confiance pour leur voyage.",
    },
    search: {
      bookNowTitle: "Réserver maintenant",
      city: "Ville ou Aéroport",
      pickUpDate: "Date de prise",
      returnDate: "Date de retour",
      date1: "Mer, 24 Juil - 12:00",
      date2: "Sam, 27 Juil - 10:00",
      bookNow: "Réserver",
    },
    cta: {
      title: "Vivez le luxe selon vos conditions",
      subtitle: "Des trajets quotidiens aux occasions spéciales, NAYS CAR vous permet de choisir la voiture qui correspond à votre moment.",
      button: "Parcourir nos voitures",
    },
    map: {
      title: "Retrouvez-nous à Fès",
      subtitle: "Visitez l'agence NAYS CAR pour récupérer facilement votre véhicule premium.",
    },
    footer: {
      company: "Entreprise",
      service: "Service",
      newsletter: "S'abonner à la newsletter",
      rights: "Tous droits réservés.",
    },
    modal: {
      from: "À partir de",
      perDay: "par jour",
      similar: "Ou similaire",
      requirements: "Exigences du véhicule",
      continueBooking: "Continuer la réservation",
      whatsappMessage: "Bonjour, je voudrais réserver la ",
    },
    cars: [
      {
        type: "Citadine à hayon",
        name: "Hyundai i20 (2024)",
        price: 200,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777133997/Gemini_Generated_Image_5h17eh5h17eh5h17_d3sstd.png",
        details: {
          passengers: 5,
          transmission: "Manuelle",
          fuelType: "Essence",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: 2,
          description: "Économique et économe en carburant, idéale pour la conduite en ville et les trajets courts. Idéal pour les voyageurs en solo ou les couples.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Des frais peuvent s'appliquer pour les conducteurs de moins de 25 ans" },
            { title: "Permis de conduire valide", desc: "Permis international pour les permis non locaux" }
          ]
        }
      },
      {
        type: "Citadine",
        name: "Peugeot 208",
        price: 250,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777135011/Gemini_Generated_Image_t3ry4bt3ry4bt3ry_iqb9ol.png",
        details: {
          passengers: 5,
          transmission: "Manuelle",
          fuelType: "Diesel/Essence",
          doors: 4,
          airConditioning: "Oui (A/C)",
          luggage: 2,
          description: "Une citadine élégante et confortable, parfaite pour naviguer dans les rues étroites.",
          requirements: [
            { title: "Âge minimum : 21+ ans", desc: "Les exigences standards s'appliquent" },
            { title: "Permis de conduire valide", desc: "Permis international pour les permis non locaux" }
          ]
        }
      },
      {
        type: "Citadine sportive",
        name: "Hyundai i20",
        price: 300,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777142934/Gemini_Generated_Image_qndgdbqndgdbqndg_astzwo.png",
        details: {
          passengers: 5,
          transmission: "Manuelle",
          fuelType: "Essence",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: 2,
          description: "Une citadine sportive et dynamique qui offre une conduite fluide et un excellent rendement énergétique.",
          requirements: [
            { title: "Âge minimum : 21+ ans", desc: "Les exigences standards s'appliquent" },
            { title: "Permis de conduire valide", desc: "Permis international pour les permis non locaux" }
          ]
        }
      },
      {
        type: "SUV Compact",
        name: "Volkswagen T-Roc",
        price: 450,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777143183/nouvelle-t-roc-947_tzcv1f.png",
        details: {
          passengers: 5,
          transmission: "Automatique (DSG)",
          fuelType: "Diesel",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: 3,
          description: "Un SUV compact élégant qui équilibre parfaitement confort, technologie et efficacité pour les rues de la ville et les aventures sur l'autoroute.",
          requirements: [
            { title: "Âge minimum : 21+ ans", desc: "Les exigences standards s'appliquent" },
            { title: "Permis de conduire valide", desc: "Permis international pour les permis non locaux" }
          ]
        }
      },
      {
        type: "SUV Premium",
        name: "Hyundai Tucson",
        price: 600,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777143341/Gemini_Generated_Image_r1t70or1t70or1t7_uzevm2.png",
        details: {
          passengers: 5,
          transmission: "Automatique",
          fuelType: "Diesel",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: 4,
          description: "Un SUV premium offrant un confort spacieux, une technologie avancée et des performances puissantes pour tout voyage.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Les exigences standards s'appliquent" },
            { title: "Permis de conduire valide", desc: "Permis international pour les permis non locaux" }
          ]
        }
      }
    ],
    testimonials: [
      {
        text: "Service incroyable à Fès ! La voiture était impeccable, le processus a été rapide et toute l'expérience avec NAYS CAR était premium.",
        author: "Youssef K.",
        role: "Entrepreneur local"
      },
      {
        text: "NAYS CAR a rendu notre road trip à travers le Maroc inoubliable. Prix transparents, aucun frais caché et le véhicule roulait parfaitement.",
        author: "Sarah Jenkins",
        role: "Touriste"
      },
      {
        text: "Réservation facile, voitures fiables et un excellent service client. Idéalement situé à Fès. La meilleure location de voiture !",
        author: "David T.",
        role: "Consultant"
      }
    ],
  },
  ar: {
    nav: {
      home: "الرئيسية",
      category: "الفئة",
      aboutUs: "معلومات عنا",
      blog: "المدونة",
      contactUs: "اتصل بنا",
      whatsappUs: "تواصل معنا عبر واتساب",
    },
    hero: {
      title: "ابحث عن السيارة المثالية لكل رحلة",
      subtitle: "تمنحك NAYS CAR إمكانية الوصول إلى سيارات فاخرة بأسعار شفافة. اختر رحلتك، وحدد التواريخ، وانطلق في الطريق ببضع نقرات.",
      bookACar: "احجز سيارة",
      howItWorks: "كيف تعمل",
    },
    features: {
      title: "قد إلى وجهتك بأقصى درجات الراحة",
      subtitle: "سواء كانت رحلة عمل سريعة أو عطلة نهاية أسبوع. تجعل NAYS CAR تأجير السيارات بسيطًا وآمنًا ومريحًا.",
      locationTitle: "موقع متميز في فاس",
      locationDesc: "يقع في موقع مناسب في قلب فاس، مما يسهل استلام سيارتك الفاخرة وبدء رحلتك بسرعة.",
      accessTitle: "سهولة الوصول",
      accessDesc: "سواء كنت بحاجة إلى التوصيل إلى المطار أو الاستلام من المدينة، فإن موقعنا يضمن لك الحصول على سيارتك دون عناء.",
    },
    fleet: {
      title: "أسطولنا الفاخر",
      perDay: "/يوم",
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "اكتشف لماذا يثق بنا آلاف المستخدمين في رحلتهم.",
    },
    search: {
      bookNowTitle: "احجز الآن",
      city: "المدينة أو المطار",
      pickUpDate: "تاريخ الاستلام",
      returnDate: "تاريخ الإرجاع",
      date1: "الأربعاء، 24 يوليو - 12:00",
      date2: "السبت، 27 يوليو - 10:00",
      bookNow: "احجز الآن",
    },
    cta: {
      title: "جرب الفخامة بشروطك",
      subtitle: "من الرحلات اليومية إلى المناسبات الخاصة، تتيح لك NAYS CAR اختيار السيارة التي تناسب لحظتك.",
      button: "تصفح سياراتنا",
    },
    map: {
      title: "تجدنا في فاس",
      subtitle: "قم بزيارة وكالة NAYS CAR لاستلام سيارتك الفاخرة بسهولة.",
    },
    footer: {
      company: "الشركة",
      service: "الخدمة",
      newsletter: "اشترك في نشرتنا الإخبارية",
      rights: "جميع الحقوق محفوظة.",
    },
    modal: {
      from: "ابتداءً من",
      perDay: "في اليوم",
      similar: "أو ما شابه",
      requirements: "متطلبات المركبة",
      continueBooking: "متابعة الحجز",
      whatsappMessage: "مرحبًا، أرغب في حجز ",
    },
    cars: [
      {
        type: "هاتشباك مدمجة",
        name: "Hyundai i20 (2024)",
        price: 200,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777133997/Gemini_Generated_Image_5h17eh5h17eh5h17_d3sstd.png",
        details: {
          passengers: 5,
          transmission: "يدوي",
          fuelType: "بنزين",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: 2,
          description: "سيارة اقتصادية في استهلاك الوقود، مثالية لقيادة المدينة والرحلات القصيرة. الأفضل للمسافرين المنفردين أو الأزواج.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+", desc: "قد يتم تطبيق رسوم إضافية للسائقين الأقل من 25 عامًا" },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية" }
          ]
        }
      },
      {
        type: "سيارة مدينة",
        name: "Peugeot 208",
        price: 250,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777135011/Gemini_Generated_Image_t3ry4bt3ry4bt3ry_iqb9ol.png",
        details: {
          passengers: 5,
          transmission: "يدوي",
          fuelType: "ديزل/بنزين",
          doors: 4,
          airConditioning: "نعم (A/C)",
          luggage: 2,
          description: "سيارة مدينة أنيقة ومريحة، مثالية للتنقل في الشوارع الضيقة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 21+", desc: "تطبق المتطلبات الأساسية" },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية" }
          ]
        }
      },
      {
        type: "هاتشباك رياضية",
        name: "Hyundai i20",
        price: 300,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777142934/Gemini_Generated_Image_qndgdbqndgdbqndg_astzwo.png",
        details: {
          passengers: 5,
          transmission: "يدوي",
          fuelType: "بنزين",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: 2,
          description: "سيارة هاتشباك رياضية وديناميكية توفر قيادة سلسة وكفاءة ممتازة في استهلاك الوقود.",
          requirements: [
            { title: "الحد الأدنى للعمر: 21+", desc: "تطبق المتطلبات الأساسية" },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية" }
          ]
        }
      },
      {
        type: "كروس أوفر / SUV",
        name: "Volkswagen T-Roc",
        price: 450,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777143183/nouvelle-t-roc-947_tzcv1f.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك (DSG)",
          fuelType: "ديزل",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: 3,
          description: "سيارة دفع رباعي مدمجة أنيقة توازن بشكل مثالي بين الراحة والتكنولوجيا والكفاءة لشوارع المدينة ومغامرات الطرق السريعة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 21+", desc: "تطبق المتطلبات الأساسية" },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية" }
          ]
        }
      },
      {
        type: "SUV فاخرة",
        name: "Hyundai Tucson",
        price: 600,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777143341/Gemini_Generated_Image_r1t70or1t70or1t7_uzevm2.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك",
          fuelType: "ديزل",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: 4,
          description: "سيارة دفع رباعي فاخرة توفر راحة واسعة وتكنولوجيا متقدمة وأداء قوي لأي رحلة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+", desc: "تطبق المتطلبات الأساسية" },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية" }
          ]
        }
      }
    ],
    testimonials: [
      {
        text: "خدمة لا تصدق في فاس! كانت السيارة نظيفة، وكانت العملية سريعة، والتجربة الكاملة مع NAYS CAR كانت فاخرة.",
        author: "يوسف ك.",
        role: "رجل أعمال محلي"
      },
      {
        text: "جعلت NAYS CAR رحلتنا عبر المغرب لا تُنسى. أسعار شفافة، لا رسوم خفية، والمركبة تسير بشكل مثالي.",
        author: "سارة جينكينز",
        role: "سائحة"
      },
      {
        text: "حجز سلس، سيارات موثوقة، ودعم رائع. موقع الاستلام في فاس مريح للغاية. أفضل تأجير سيارات جربته!",
        author: "ديفيد ت.",
        role: "مستشار أعمال"
      }
    ],
  },
  en: {
    nav: {
      home: "Home",
      category: "Category",
      aboutUs: "About Us",
      blog: "Blog",
      contactUs: "Contact Us",
      whatsappUs: "WhatsApp Us",
    },
    hero: {
      title: "Find the Perfect Car for Every Journey",
      subtitle: "NAYS CAR gives you access to premium cars at transparent prices. Choose your ride, set your dates, and hit the road in a few clicks.",
      bookACar: "Book a Car",
      howItWorks: "How It Works",
    },
    features: {
      title: "Drive to your destination with maximum comfort",
      subtitle: "Whether it's a quick business trip or a weekend getaway. NAYS CAR makes car rental simple, safe, and comfortable.",
      locationTitle: "Prime Location in Fes",
      locationDesc: "Conveniently located in the heart of Fes, making it easy to pick up your premium car and start your journey quickly.",
      accessTitle: "Easy Accessibility",
      accessDesc: "Whether you need airport delivery or city pickup, our location ensures you get your car hassle-free.",
    },
    fleet: {
      title: "Our Premium Fleet",
      perDay: "/day",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Discover why thousands of users trust us for their journey.",
    },
    search: {
      bookNowTitle: "Book Now",
      city: "City or Airport",
      pickUpDate: "Pick-up Date",
      returnDate: "Return Date",
      date1: "Wed, 24 Jul - 12:00",
      date2: "Sat, 27 Jul - 10:00",
      bookNow: "Book Now",
    },
    cta: {
      title: "Experience luxury on your terms",
      subtitle: "From daily commutes to special occasions, NAYS CAR lets you choose the car that fits your moment.",
      button: "Browse our cars",
    },
    map: {
      title: "Find us in Fes",
      subtitle: "Visit the NAYS CAR agency to easily pick up your premium vehicle.",
    },
    footer: {
      company: "Company",
      service: "Service",
      newsletter: "Subscribe to newsletter",
      rights: "All rights reserved.",
    },
    modal: {
      from: "From",
      perDay: "per day",
      similar: "Or similar",
      requirements: "Vehicle Requirements",
      continueBooking: "Continue Booking",
      whatsappMessage: "Hello, I would like to book the ",
    },
    cars: [
      {
        type: "Compact Hatchback",
        name: "Hyundai i20 (2024)",
        price: 200,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777133997/Gemini_Generated_Image_5h17eh5h17eh5h17_d3sstd.png",
        details: {
          passengers: 5,
          transmission: "Manual",
          fuelType: "Petrol",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: 2,
          description: "Affordable and fuel-efficient, ideal for city driving and short trips. Best for solo travelers or couples.",
          requirements: [
            { title: "Minimum Age: 25+", desc: "Additional fees may apply for drivers under 25" },
            { title: "Valid driving license", desc: "International driving permit for non-local licenses" }
          ]
        }
      },
      {
        type: "City Car",
        name: "Peugeot 208",
        price: 250,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777135011/Gemini_Generated_Image_t3ry4bt3ry4bt3ry_iqb9ol.png",
        details: {
          passengers: 5,
          transmission: "Manual",
          fuelType: "Diesel/Petrol",
          doors: 4,
          airConditioning: "Yes (A/C)",
          luggage: 2,
          description: "A stylish and comfortable city car, perfect for navigating tight streets.",
          requirements: [
            { title: "Minimum Age: 21+", desc: "Standard requirements apply" },
            { title: "Valid driving license", desc: "International driving permit for non-local licenses" }
          ]
        }
      },
      {
        type: "Sporty Hatchback",
        name: "Hyundai i20",
        price: 300,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777142934/Gemini_Generated_Image_qndgdbqndgdbqndg_astzwo.png",
        details: {
          passengers: 5,
          transmission: "Manual",
          fuelType: "Petrol",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: 2,
          description: "A sporty and dynamic hatchback that offers a smooth ride and excellent fuel efficiency.",
          requirements: [
            { title: "Minimum Age: 21+", desc: "Standard requirements apply" },
            { title: "Valid driving license", desc: "International driving permit for non-local licenses" }
          ]
        }
      },
      {
        type: "Compact SUV",
        name: "Volkswagen T-Roc",
        price: 450,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777143183/nouvelle-t-roc-947_tzcv1f.png",
        details: {
          passengers: 5,
          transmission: "Automatic (DSG)",
          fuelType: "Diesel",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: 3,
          description: "A stylish compact SUV that perfectly balances comfort, technology, and efficiency for both city streets and highway adventures.",
          requirements: [
            { title: "Minimum Age: 21+", desc: "Standard requirements apply" },
            { title: "Valid driving license", desc: "International driving permit for non-local licenses" }
          ]
        }
      },
      {
        type: "Premium SUV",
        name: "Hyundai Tucson",
        price: 600,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777143341/Gemini_Generated_Image_r1t70or1t70or1t7_uzevm2.png",
        details: {
          passengers: 5,
          transmission: "Automatic",
          fuelType: "Diesel",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: 4,
          description: "A premium SUV offering spacious comfort, advanced technology, and powerful performance for any journey.",
          requirements: [
            { title: "Minimum Age: 25+", desc: "Standard requirements apply" },
            { title: "Valid driving license", desc: "International driving permit for non-local licenses" }
          ]
        }
      }
    ],
    testimonials: [
      {
        text: "Incredible service in Fes! The car was spotless, the process was quick, and the whole experience with NAYS CAR was premium.",
        author: "Youssef K.",
        role: "Local Entrepreneur"
      },
      {
        text: "NAYS CAR made our road trip across Morocco unforgettable. Transparent pricing, no hidden fees, and the vehicle ran perfectly.",
        author: "Sarah Jenkins",
        role: "Tourist"
      },
      {
        text: "Smooth booking, reliable cars, and great support. Pick-up location in Fes is very convenient. Best car rental I've tried!",
        author: "David T.",
        role: "Business Consultant"
      }
    ]
  }
};
