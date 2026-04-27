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
        type: "SUV Compact",
        name: "Citroën C3 Aircross (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777306310/Gemini_Generated_Image_oyqngcoyqngcoyqn_li6mr0.png",
        details: {
          passengers: 5,
          transmission: "Manuelle / Auto",
          fuelType: "Diesel / Essence",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: 3,
          description: "Un SUV compact audacieux et polyvalent conçu pour le confort et l'aventure. Avec son style unique et sa position de conduite élevée, c'est le compagnon idéal aussi bien pour les rues de la ville que pour les longs voyages.",
          requirements: [
            { title: "Âge minimum : 21+ ans", desc: "Les exigences standards s'appliquent." },
            { title: "Permis de conduire valide", desc: "Permis international requis pour les permis non locaux." },
            { title: "Assurance incluse", desc: "Assurance collision de base." }
          ]
        }
      },
      {
        type: "Berline de luxe",
        name: "Mercedes-Benz Classe A Sedan (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777306807/Gemini_Generated_Image_ljh6r4ljh6r4ljh6_xs7ggl.png",
        details: {
          passengers: 5,
          transmission: "Automatique (7G-DCT)",
          fuelType: "Diesel / Essence",
          doors: 4,
          airConditioning: "Oui (A/C bi-zone)",
          luggage: 2,
          description: "Découvrez le summum du luxe et de la technologie. La Classe A Sedan combine l'esthétique sportive de la ligne AMG avec un confort inégalé, faisant de chaque trajet une déclaration d'élégance.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Les exigences de la catégorie luxe s'appliquent." },
            { title: "Permis de conduire valide", desc: "Permis international requis pour les permis non locaux." },
            { title: "Assurance Premium incluse", desc: "Couverture complète avec franchise standard." }
          ]
        }
      },
      {
        type: "Berline sportive",
        name: "Audi A3 Sportback S-line (2025)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777305511/Gemini_Generated_Image_7kghux7kghux7kgh_jcfgeg.png",
        details: {
          passengers: 5,
          transmission: "Automatique",
          fuelType: "Essence / Hybride",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: 2,
          description: "Une berline sportive premium alliant luxe allemand et performances dynamiques. Parfaite pour ceux qui recherchent style, agilité et une expérience de conduite haut de gamme.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Les exigences standards s'appliquent" },
            { title: "Permis de conduire valide", desc: "Permis international pour les permis non locaux" },
            { title: "Dépôt de garantie", desc: "Carte de crédit requise pour l'autorisation" }
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
      },
      {
        type: "SUV de luxe",
        name: "Volkswagen Touareg Black Edition (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307086/Gemini_Generated_Image_ra0x7nra0x7nra0x_hpwpir.png",
        details: {
          passengers: 5,
          transmission: "Automatique (Tiptronic 8)",
          fuelType: "Diesel (TDI) / Essence",
          doors: 5,
          airConditioning: "Oui (Clim 4 zones)",
          luggage: 4,
          description: "Le SUV de luxe par excellence qui allie puissance, élégance et technologie de pointe. Avec son design noir audacieux et son intérieur haut de gamme, le Touareg offre une présence imposante sur toutes les routes.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Exigences de la catégorie SUV de luxe." },
            { title: "Permis de conduire valide", desc: "Permis international requis pour les permis non locaux." },
            { title: "Assurance tout risque", desc: "Protection premium incluse pour une tranquillité d'esprit." }
          ]
        }
      },
      {
        type: "Crossover compact",
        name: "Dacia Sandero Stepway (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307374/Gemini_Generated_Image_xgnhlgxgnhlgxgnh_rlhexj.png",
        details: {
          passengers: 5,
          transmission: "Manuelle",
          fuelType: "Diesel (dCi) / Essence (TCe)",
          doors: 5,
          airConditioning: "Oui (A/C)",
          luggage: "3 + Coffre de toit",
          description: "Le crossover compact ultime pour vos aventures. Robuste, élégant et pratique, la Sandero Stepway offre un excellent rapport qualité-prix et un espace de chargement polyvalent avec son coffre de toit inclus, parfait pour les road trips à travers le Maroc.",
          requirements: [
            { title: "Âge minimum : 21+ ans", desc: "Les exigences minimales s'appliquent." },
            { title: "Permis de conduire valide", desc: "Requis depuis au moins 1 an." },
            { title: "Dépôt de garantie", desc: "Assurance de base incluse." }
          ]
        }
      },
      {
        type: "Citadine sportive",
        name: "Peugeot 208 GT (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307527/Gemini_Generated_Image_c5kmb9c5kmb9c5km_efnblr.png",
        details: {
          passengers: 5,
          transmission: "Automatique (EAT8)",
          fuelType: "Diesel (BlueHDi) / Essence (PureTech)",
          doors: 5,
          airConditioning: "Oui (Clim auto et CarPlay)",
          luggage: 3,
          description: "Le mélange parfait de sportivité et de technologie. La nouvelle Peugeot 208 GT redéfinit la voiture compacte avec son design audacieux, son i-Cockpit avancé et ses performances efficaces, idéale pour les trajets élégants en ville et les road trips.",
          requirements: [
            { title: "Âge minimum : 23+ ans", desc: "Les exigences de la catégorie intermédiaire s'appliquent." },
            { title: "Permis de conduire valide", desc: "Requis depuis au moins 2 ans." },
            { title: "Dépôt de garantie et assurance", desc: "Options flexibles disponibles." }
          ]
        }
      },
      {
        type: "Citadine",
        name: "Renault Clio V (Phase 2)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307804/Gemini_Generated_Image_zece3qzece3qzece_shshpv.png",
        details: {
          passengers: 5,
          transmission: "Manuelle",
          fuelType: "Diesel (dCi)",
          doors: 5,
          airConditioning: "Oui (A/C et écran tactile)",
          luggage: 3,
          description: "La citadine française emblématique, maintenant avec un nouveau design avant audacieux. La Renault Clio V offre un équilibre parfait entre technologie moderne, efficacité énergétique exceptionnelle et conduite confortable, ce qui en fait le choix idéal pour explorer Meknès et au-delà.",
          requirements: [
             { title: "Âge minimum : 21+ ans", desc: "Exigences de catégorie flexibles." },
             { title: "Permis de conduire valide", desc: "Requis depuis au moins 1 an." },
             { title: "Dépôt de garantie", desc: "Options d'assurance de base ou complète." }
          ]
        }
      },
      {
        type: "Citadine compacte",
        name: "Hyundai i20 (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777142934/Gemini_Generated_Image_qndgdbqndgdbqndg_astzwo.png",
        details: {
          passengers: 5,
          transmission: "Automatique / Manuelle",
          fuelType: "Essence (1.0T / 1.2)",
          doors: 5,
          airConditioning: "Oui (A/C et technologie intelligente)",
          luggage: 3,
          description: "Redéfinir le hatchback compact. La nouvelle Hyundai i20 présente un design moderne époustouflant, un intérieur rempli de technologies avec un cockpit numérique et des caractéristiques de sécurité de pointe, faisant de chaque trajet urbain une expérience élégante.",
          requirements: [
             { title: "Âge minimum : 21+ ans", desc: "Exigences standards." },
             { title: "Permis de conduire valide", desc: "Requis depuis au moins 1 an." },
             { title: "Dépôt de garantie", desc: "Options de paiement flexibles." }
          ]
        }
      },
      {
        type: "SUV de luxe",
        name: "Volkswagen Touareg Executive (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777308588/Gemini_Generated_Image_tyojyityojyityoj_arwrw3.png",
        details: {
          passengers: 5,
          transmission: "Automatique (Tiptronic 8)",
          fuelType: "Diesel (TDI)",
          doors: 5,
          airConditioning: "Oui (Son premium et A/C)",
          luggage: 4,
          description: "Faites l'expérience du luxe sans compromis. Le Touareg Executive présente un design sophistiqué avec des touches chromées haut de gamme et une conduite douce et puissante. C'est le choix parfait pour les voyages d'affaires haut de gamme ou le confort familial.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Catégorie SUV premium." },
            { title: "Permis de conduire valide", desc: "Requis depuis au moins 2 ans." },
            { title: "Dépôt de garantie", desc: "Autorisation par carte de crédit." }
          ]
        }
      },
      {
        type: "Moto 3 Roues",
        name: "Can-Am Spyder F3-S (Special Series)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777309089/Gemini_Generated_Image_r7dfetr7dfetr7df_impl1d.png",
        details: {
          passengers: 2,
          transmission: "Semi-Automatique",
          fuelType: "Essence (Rotax 1330 ACE)",
          doors: "3 Roues",
          airConditioning: "ABS & Antipatinage",
          luggage: "Petit coffre",
          description: "Découvrez le frisson ultime de la route ouverte avec le Can-Am Spyder. Cette moto à trois roues hautes performances offre une stabilité inégalée, un design musclé audacieux et une conduite exaltante qui fait tourner les têtes partout où vous allez.",
          requirements: [
            { title: "Âge minimum : 25+ ans", desc: "Maîtrise experte requise." },
            { title: "Permis de conduire (B ou A)", desc: "Selon la réglementation locale (la catégorie B suffit souvent)." },
            { title: "Casque inclus", desc: "L'équipement de sécurité est obligatoire pour toutes les locations." }
          ]
        }
      },
      {
        type: "Berline Économique",
        name: "Dacia Logan (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777309516/Gemini_Generated_Image_gzzdpwgzzdpwgzzd_edlqfb.png",
        details: {
          passengers: 5,
          transmission: "Manuelle",
          fuelType: "Diesel (dCi)",
          doors: 5,
          airConditioning: "Oui (A/C & Navigation)",
          luggage: 4,
          description: "La berline économique la plus populaire au Maroc. Offrant un intérieur spacieux, un grand coffre et un moteur diesel très efficace, elle est parfaite pour la conduite en ville ou les longs trajets en famille.",
          requirements: [
            { title: "Âge minimum : 21+ ans", desc: "Exigences standards." },
            { title: "Permis de conduire valide", desc: "Requis depuis au moins 1 an." },
            { title: "Dépôt de garantie", desc: "Options de dépôt et d'assurance abordables." }
          ]
        }
      }
    ],
    testimonials: [
      {
        text: "Meilleure agence de location sur Fès. Pas de caution exagérée, la voiture était presque neuve et l'équipe est très professionnelle. Je recommande !",
        author: "Amine B.",
        role: "Client régulier"
      },
      {
        text: "Service exceptionnel ! Ils nous ont ramené la voiture jusqu'à l'aéroport de Fès-Saïss. La voiture était propre et sentait bon.",
        author: "Marie L.",
        role: "Touriste"
      },
      {
        text: "Toujours satisfait de NAYS CAR. Que ce soit pour un déplacement pro ou pour une voiture de luxe le week-end, ils ont toujours ce qu'il faut à bon prix.",
        author: "Karim M.",
        role: "Entrepreneur"
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
        type: "كروس أوفر / SUV مدمجة",
        name: "Citroën C3 Aircross (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777306310/Gemini_Generated_Image_oyqngcoyqngcoyqn_li6mr0.png",
        details: {
          passengers: 5,
          transmission: "يدوي / أوتوماتيك",
          fuelType: "ديزل / بنزين",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: 3,
          description: "سيارة دفع رباعي مدمجة وجريئة ومتعددة الاستخدامات مصممة للراحة والمغامرة. أسلوبها الفريد وموقع القيادة المرتفع يجعلها الرفيق المثالي لكل من شوارع المدينة والرحلات الطويلة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 21+", desc: "تطبق المتطلبات الأساسية." },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية." },
            { title: "تأمين شامل", desc: "تأمين أساسي ضد الاصطدام." }
          ]
        }
      },
      {
        type: "سيدان فاخرة",
        name: "Mercedes-Benz A-Class Sedan (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777306807/Gemini_Generated_Image_ljh6r4ljh6r4ljh6_xs7ggl.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك (7G-DCT)",
          fuelType: "ديزل / بنزين",
          doors: 4,
          airConditioning: "نعم (A/C مزدوج)",
          luggage: 2,
          description: "جرب قمة الفخامة والتكنولوجيا. تجمع سيارة A-Class Sedan بين الجماليات الرياضية لخط AMG والراحة التي لا مثيل لها، مما يجعل كل رحلة تعبيراً عن الرقي.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+", desc: "تطبق متطلبات الفئة الفاخرة." },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية." },
            { title: "تأمين ممتاز مشمول", desc: "تغطية شاملة مع اقتطاع قياسي." }
          ]
        }
      },
      {
        type: "هاتشباك رياضية فاخرة",
        name: "Audi A3 Sportback S-line (2025)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777305511/Gemini_Generated_Image_7kghux7kghux7kgh_jcfgeg.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك",
          fuelType: "بنزين / هجين",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: 2,
          description: "هاتشباك رياضية فاخرة تمزج بين الفخامة الألمانية والأداء الديناميكي. مثالية لمن يبحثون عن الأناقة والرشاقة وتجربة قيادة راقية.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+", desc: "تطبق المتطلبات الأساسية" },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية" },
            { title: "وديعة تأمين", desc: "مطلوب بطاقة ائتمان للتفويض" }
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
      },
      {
        type: "سيارة دفع رباعي فاخرة",
        name: "Volkswagen Touareg Black Edition (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307086/Gemini_Generated_Image_ra0x7nra0x7nra0x_hpwpir.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك (8 سرعات Tiptronic)",
          fuelType: "ديزل (TDI) / بنزين",
          doors: 5,
          airConditioning: "نعم (تكييف 4 مناطق)",
          luggage: 4,
          description: "قمة سيارات الدفع الرباعي الفاخرة التي تجمع بين القوة والأناقة والتكنولوجيا المتقدمة. بفضل تصميمها الأسود الجريء وتصميمها الداخلي الفاخر، توفر طوارق حضوراً قوياً على أي طريق.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+", desc: "متطلبات فئة سيارات الدفع الرباعي الفاخرة." },
            { title: "رخصة قيادة سارية", desc: "رخصة قيادة دولية للتراخيص غير المحلية." },
            { title: "تأمين شامل", desc: "حماية ممتازة مشمولة لراحة البال." }
          ]
        }
      },
      {
        type: "كروس أوفر مدمجة",
        name: "Dacia Sandero Stepway (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307374/Gemini_Generated_Image_xgnhlgxgnhlgxgnh_rlhexj.png",
        details: {
          passengers: 5,
          transmission: "يدوي",
          fuelType: "ديزل (dCi) / بنزين (TCe)",
          doors: 5,
          airConditioning: "نعم (A/C)",
          luggage: "3 + صندوق السقف",
          description: "كروس أوفر مدمجة مثالية لمغامراتك. تتميز بالقوة والأناقة والعملية، كما توفر مساحة شحن متعددة الاستخدامات مع صندوق السقف المرفق، مثالية للرحلات البرية عبر المغرب.",
          requirements: [
            { title: "الحد الأدنى للعمر: 21+", desc: "تطبق المتطلبات الدنيا." },
            { title: "رخصة قيادة سارية", desc: "مطلوبة لمدة سنة على الأقل." },
            { title: "وديعة تأمين مطلوبة", desc: "تأمين أساسي مشمول." }
          ]
        }
      },
      {
        type: "هاتشباك رياضية",
        name: "Peugeot 208 GT (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307527/Gemini_Generated_Image_c5kmb9c5kmb9c5km_efnblr.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك (EAT8)",
          fuelType: "ديزل (BlueHDi) / بنزين (PureTech)",
          doors: 5,
          airConditioning: "نعم (تكييف تلقائي و CarPlay)",
          luggage: 3,
          description: "المزيج المثالي بين الطابع الرياضي والتكنولوجيا. تعيد بيجو 208 GT الجديدة تعريف السيارة المدمجة بتصميمها الجريء، ومقصورة i-Cockpit المتطورة، والأداء الفعال، مثالية للقيادة الأنيقة في المدينة ورحلات الطرق الفعالة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 23+", desc: "تطبق متطلبات الفئة المتوسطة." },
            { title: "رخصة قيادة سارية", desc: "مطلوبة لمدة سنتين على الأقل." },
            { title: "وديعة تأمين وتأمين", desc: "خيارات مرنة متاحة." }
          ]
        }
      },
      {
        type: "سيارة مدينة",
        name: "Renault Clio V (Phase 2)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307804/Gemini_Generated_Image_zece3qzece3qzece_shshpv.png",
        details: {
          passengers: 5,
          transmission: "يدوي",
          fuelType: "ديزل (dCi)",
          doors: 5,
          airConditioning: "نعم (A/C وشاشة لمس)",
          luggage: 3,
          description: "سيارة المدينة الفرنسية الشهيرة، الآن بتصميم أمامي جديد وجريء. توفر رينو كليو 5 توازناً مثالياً بين التكنولوجيا الحديثة، والكفاءة الاستثنائية في استهلاك الوقود، والقيادة المريحة، مما يجعلها الخيار المثالي لاستكشاف مكناس وما حولها.",
          requirements: [
             { title: "الحد الأدنى للعمر: 21+", desc: "متطلبات فئة مرنة." },
             { title: "رخصة قيادة سارية", desc: "مطلوبة لمدة سنة على الأقل." },
             { title: "وديعة تأمين", desc: "خيارات تأمين أساسي أو شامل." }
          ]
        }
      },
      {
        type: "هاتشباك مدمجة",
        name: "Hyundai i20 (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777142934/Gemini_Generated_Image_qndgdbqndgdbqndg_astzwo.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك / يدوي",
          fuelType: "بنزين (1.0T / 1.2)",
          doors: 5,
          airConditioning: "نعم (A/C وتقنية ذكية)",
          luggage: 3,
          description: "إعادة تعريف سيارة الهاتشباك المدمجة. تتميز هيونداي i20 الجديدة بتصميم حديث مذهل، ومقصورة داخلية مليئة بالتكنولوجيا مع قمرة قيادة رقمية، وميزات أمان رائدة في فئتها، مما يجعل كل رحلة حضرية تجربة أنيقة.",
          requirements: [
             { title: "الحد الأدنى للعمر: 21+", desc: "متطلبات قياسية." },
             { title: "رخصة قيادة سارية", desc: "مطلوبة لمدة سنة على الأقل." },
             { title: "وديعة تأمين", desc: "خيارات دفع مرنة." }
          ]
        }
      },
      {
        type: "سيارة دفع رباعي فاخرة",
        name: "Volkswagen Touareg Executive (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777308588/Gemini_Generated_Image_tyojyityojyityoj_arwrw3.png",
        details: {
          passengers: 5,
          transmission: "أوتوماتيك (8 سرعات Tiptronic)",
          fuelType: "ديزل (TDI)",
          doors: 5,
          airConditioning: "نعم (صوت ممتاز و A/C)",
          luggage: 4,
          description: "جرب الفخامة بدون تنازلات. تتميز طوارق إكزكيوتيف بتصميم متطور مع لمسات من الكروم الفاخر وقيادة سلسة وقوية. إنها الخيار المثالي لسفر الأعمال الراقي أو لراحة الأسرة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+ سنة", desc: "فئة SUV الفاخرة." },
            { title: "رخصة قيادة سارية", desc: "مطلوبة لمدة سنتين على الأقل." },
            { title: "وديعة تأمين", desc: "تفويض بطاقة الائتمان." }
          ]
        }
      },
      {
        type: "دراجة 3 عجلات",
        name: "Can-Am Spyder F3-S (Special Series)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777309089/Gemini_Generated_Image_r7dfetr7dfetr7df_impl1d.png",
        details: {
          passengers: 2,
          transmission: "شبه أوتوماتيك",
          fuelType: "بنزين (Rotax 1330 ACE)",
          doors: "3 عجلات",
          airConditioning: "ABS ونظام التحكم في الجر",
          luggage: "تخزين صغير",
          description: "استمتع بتجربة الإثارة القصوى على الطرق المفتوحة مع Can-Am Spyder. توفر هذه الدراجة النارية ثلاثية العجلات عالية الأداء استقرارًا لا مثيل له، وتصميمًا جريئًا ومفتول العضلات، وقيادة مبهجة تلفت الأنظار أينما ذهبت.",
          requirements: [
            { title: "الحد الأدنى للعمر: 25+ سنة", desc: "مطلوب التعامل بخبرة." },
            { title: "رخصة قيادة (B أو A)", desc: "حسب اللوائح المحلية (غالبا فئة B تكفي)." },
            { title: "خوذة مشمولة", desc: "معدات السلامة إلزامية لجميع الإيجارات." }
          ]
        }
      },
      {
        type: "سيدان اقتصادية",
        name: "Dacia Logan (2024)",
        price: 199,
        currency: "درهم",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777309516/Gemini_Generated_Image_gzzdpwgzzdpwgzzd_edlqfb.png",
        details: {
          passengers: 5,
          transmission: "يدوي",
          fuelType: "ديزل (dCi)",
          doors: 5,
          airConditioning: "نعم (A/C ونظام ملاحة)",
          luggage: 4,
          description: "سيارة السيدان الاقتصادية الأكثر شعبية في المغرب. توفر مساحة داخلية واسعة، وصندوق أمتعة كبير، ومحرك ديزل فعال للغاية، مما يجعلها مثالية للقيادة في المدينة أو الرحلات الطويلة.",
          requirements: [
            { title: "الحد الأدنى للعمر: 21+", desc: "متطلبات قياسية." },
            { title: "رخصة قيادة سارية", desc: "مطلوبة لمدة سنة على الأقل." },
            { title: "وديعة تأمين", desc: "خيارات تأمين ووديعة بأسعار معقولة." }
          ]
        }
      }
    ],
    testimonials: [
      {
        text: "أحسن وكالة كراء طوموبيلات ففاس. تعامل نقي، الطوموبيل كانت نقية وجديدة، وماكاينش ديك كثرة الشروط. تبارك الله عليهم.",
        author: "أمين ب.",
        role: "زبون دائم"
      },
      {
        text: "خدمة واعرة ! جابو لينا الطوموبيل تال مطار فاس سايس، تعامل زوين والسيارة اقتصادية وعمرها خدمات لينا شي مشكل فالسفر.",
        author: "مريم ل.",
        role: "مغربية مقيمة بالخارج"
      },
      {
        text: "دائما كنتعامل معاهم، ثمن مناسب وكيهتمو بالزبون. سياراتهم ديما نقية وفيها الضمان. كنصحكم ب NAYS CAR.",
        author: "كريم م.",
        role: "رجل أعمال"
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
        type: "Compact SUV",
        name: "Citroën C3 Aircross (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777306310/Gemini_Generated_Image_oyqngcoyqngcoyqn_li6mr0.png",
        details: {
          passengers: 5,
          transmission: "Manual / Auto",
          fuelType: "Diesel / Petrol",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: 3,
          description: "A versatile and bold compact SUV designed for comfort and adventure. With its unique style and high driving position, it’s the ideal companion for both city streets and long road trips.",
          requirements: [
            { title: "Minimum Age: 21+ years", desc: "Standard requirements apply." },
            { title: "Valid Driving License", desc: "International permit required for non-local licenses." },
            { title: "Insurance Included", desc: "Basic collision damage waiver." }
          ]
        }
      },
      {
        type: "Luxury Sedan",
        name: "Mercedes-Benz A-Class Sedan (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777306807/Gemini_Generated_Image_ljh6r4ljh6r4ljh6_xs7ggl.png",
        details: {
          passengers: 5,
          transmission: "Automatic (7G-DCT)",
          fuelType: "Diesel / Petrol",
          doors: 4,
          airConditioning: "Yes (Dual-zone A/C)",
          luggage: 2,
          description: "Experience the pinnacle of luxury and technology. The A-Class Sedan combines sporty AMG-line aesthetics with unparalleled comfort, making every journey a statement of class.",
          requirements: [
            { title: "Minimum Age: 25+ years", desc: "Luxury category requirements apply." },
            { title: "Valid Driving License", desc: "International permit required for non-local licenses." },
            { title: "Premium Insurance Included", desc: "Comprehensive coverage with standard deductible." }
          ]
        }
      },
      {
        type: "Premium Sporty Hatchback",
        name: "Audi A3 Sportback S-line (2025)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777305511/Gemini_Generated_Image_7kghux7kghux7kgh_jcfgeg.png",
        details: {
          passengers: 5,
          transmission: "Automatic",
          fuelType: "Petrol / Hybrid",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: 2,
          description: "A premium sporty hatchback blending German luxury with dynamic performance. Perfect for those seeking style, agility, and a high-end driving experience.",
          requirements: [
            { title: "Minimum Age: 25+ years", desc: "Standard requirements apply." },
            { title: "Valid Driving License", desc: "International permit required for non-local licenses." },
            { title: "Security Deposit", desc: "Credit card required for authorization." }
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
      },
      {
        type: "Luxury SUV",
        name: "Volkswagen Touareg Black Edition (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307086/Gemini_Generated_Image_ra0x7nra0x7nra0x_hpwpir.png",
        details: {
          passengers: 5,
          transmission: "Automatic (8-speed Tiptronic)",
          fuelType: "Diesel (TDI) / Petrol",
          doors: 5,
          airConditioning: "Yes (4-zone Climate Control)",
          luggage: 4,
          description: "The ultimate luxury SUV that combines power, elegance, and advanced technology. With its bold black-out design and premium interior, the Touareg offers a commanding presence on any road.",
          requirements: [
            { title: "Minimum Age: 25+ years", desc: "Luxury SUV category requirements apply." },
            { title: "Valid Driving License", desc: "International permit required for non-local licenses." },
            { title: "Full Coverage Insurance", desc: "Premium protection included for peace of mind." }
          ]
        }
      },
      {
        type: "Compact Crossover",
        name: "Dacia Sandero Stepway (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307374/Gemini_Generated_Image_xgnhlgxgnhlgxgnh_rlhexj.png",
        details: {
          passengers: 5,
          transmission: "Manual",
          fuelType: "Diesel (dCi) / Petrol (TCe)",
          doors: 5,
          airConditioning: "Yes (A/C)",
          luggage: "3 + Roof Box",
          description: "The ultimate compact crossover for your adventures. Robust, stylish, and practical, the Sandero Stepway offers great value and versatile cargo space with its included roof box, perfect for road trips across Morocco.",
          requirements: [
            { title: "Minimum Age: 21+ years", desc: "Minimum requirements apply." },
            { title: "Valid Driving License", desc: "Required for at least 1 year." },
            { title: "Security Deposit Required", desc: "Basic insurance included." }
          ]
        }
      },
      {
        type: "Sporty Hatchback",
        name: "Peugeot 208 GT (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307527/Gemini_Generated_Image_c5kmb9c5kmb9c5km_efnblr.png",
        details: {
          passengers: 5,
          transmission: "Automatic (EAT8)",
          fuelType: "Diesel (BlueHDi) / Petrol (PureTech)",
          doors: 5,
          airConditioning: "Yes (Auto A/C & CarPlay)",
          luggage: 3,
          description: "The perfect blend of sportiness and technology. The new Peugeot 208 GT redefines the compact car with its bold design, advanced i-Cockpit, and efficient performance, ideal for stylish city cruising and efficient road trips.",
          requirements: [
            { title: "Minimum Age: 23+ years", desc: "Medium category requirements apply." },
            { title: "Valid Driving License", desc: "Required for at least 2 years." },
            { title: "Security Deposit & Insurance", desc: "Flexible options available." }
          ]
        }
      },
      {
        type: "City Car",
        name: "Renault Clio V (Phase 2)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777307804/Gemini_Generated_Image_zece3qzece3qzece_shshpv.png",
        details: {
          passengers: 5,
          transmission: "Manual",
          fuelType: "Diesel (dCi)",
          doors: 5,
          airConditioning: "Yes (A/C & Touchscreen)",
          luggage: 3,
          description: "The iconic French city car, now with a bold new front design. The Renault Clio V offers a perfect balance of modern technology, exceptional fuel efficiency, and a comfortable ride, making it the ideal choice for exploring Meknes and beyond.",
          requirements: [
            { title: "Minimum Age: 21+ years", desc: "Flexible category requirements." },
            { title: "Valid Driving License", desc: "Required for at least 1 year." },
            { title: "Security Deposit", desc: "Basic or full insurance options." }
          ]
        }
      },
      {
        type: "Compact Hatchback",
        name: "Hyundai i20 (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777142934/Gemini_Generated_Image_qndgdbqndgdbqndg_astzwo.png",
        details: {
          passengers: 5,
          transmission: "Automatic / Manual",
          fuelType: "Petrol (1.0T / 1.2)",
          doors: 5,
          airConditioning: "Yes (A/C & Smart Tech)",
          luggage: 3,
          description: "Redefining the compact hatchback. The new Hyundai i20 features a stunning modern design, a tech-filled interior with a digital cockpit, and class-leading safety features, making every urban drive a stylish experience.",
          requirements: [
             { title: "Minimum Age: 21+ years", desc: "Standard requirements." },
             { title: "Valid Driving License", desc: "Required for at least 1 year." },
             { title: "Security Deposit", desc: "Flexible payment options." }
          ]
        }
      },
      {
        type: "Luxury SUV",
        name: "Volkswagen Touareg Executive (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777308588/Gemini_Generated_Image_tyojyityojyityoj_arwrw3.png",
        details: {
          passengers: 5,
          transmission: "Automatic (8-speed Tiptronic)",
          fuelType: "Diesel (TDI)",
          doors: 5,
          airConditioning: "Yes (Premium Sound & A/C)",
          luggage: 4,
          description: "Experience luxury without compromise. The Touareg Executive features a sophisticated design with premium chrome accents and a smooth, powerful drive. It's the perfect choice for high-end business travel or family comfort.",
          requirements: [
            { title: "Minimum Age: 25+ years", desc: "Premium SUV category." },
            { title: "Valid Driving License", desc: "Required for at least 2 years." },
            { title: "Security Deposit", desc: "Credit card authorization." }
          ]
        }
      },
      {
        type: "3-Wheel Motorcycle",
        name: "Can-Am Spyder F3-S (Special Series)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777309089/Gemini_Generated_Image_r7dfetr7dfetr7df_impl1d.png",
        details: {
          passengers: 2,
          transmission: "Semi-Automatic",
          fuelType: "Petrol (Rotax 1330 ACE)",
          doors: "3 Wheels",
          airConditioning: "ABS & Traction Control",
          luggage: "Small Storage",
          description: "Experience the ultimate open-road thrill with the Can-Am Spyder. This high-performance three-wheel motorcycle offers unmatched stability, a bold muscular design, and an exhilarating ride that turns heads everywhere you go.",
          requirements: [
            { title: "Minimum Age: 25+ years", desc: "Expert handling required." },
            { title: "Driving License (B or A)", desc: "Depending on local regulations (Category B is often enough)." },
            { title: "Helmet Included", desc: "Safety gear is mandatory for all rentals." }
          ]
        }
      },
      {
        type: "Economic Sedan",
        name: "Dacia Logan (2024)",
        price: 199,
        currency: "DH",
        image: "https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1777309516/Gemini_Generated_Image_gzzdpwgzzdpwgzzd_edlqfb.png",
        details: {
          passengers: 5,
          transmission: "Manual",
          fuelType: "Diesel (dCi)",
          doors: 5,
          airConditioning: "Yes (A/C & Navigation)",
          luggage: 4,
          description: "The most popular economic sedan in Morocco. Offering a spacious interior, a large trunk, and an incredibly efficient diesel engine, it is perfect for city driving or long trips with family.",
          requirements: [
            { title: "Minimum Age: 21+ years", desc: "Standard requirements." },
            { title: "Valid Driving License", desc: "Required for at least 1 year." },
            { title: "Security Deposit", desc: "Affordable insurance and deposit options." }
          ]
        }
      }
    ],
    testimonials: [
      {
        text: "Best car rental in Fes! No crazy deposit requirements, the car was practically new, and the team is super professional.",
        author: "Amine B.",
        role: "Regular Client"
      },
      {
        text: "Amazing service! They delivered the car right to Fes-Saiss airport. The car was spotless, smelled fresh, and ran perfectly during our morocco trip.",
        author: "Marie L.",
        role: "Tourist"
      },
      {
        text: "I always rent from NAYS CAR when visiting Fes. They have great prices, no hidden fees, and their cars are top-notch. Highly recommended.",
        author: "Karim M.",
        role: "Business Traveler"
      }
    ]
  }
};
