export interface GalleryItem {
  id: string;
  title: string;
  category: 'bouquets' | 'weddings' | 'events' | 'seasonal' | 'custom';
  image: string;
  description: string;
  dimensions: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  image: string;
  priceStart: string;
  details: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Eterični šopek Elysian",
    category: "bouquets",
    image: "/images/bouquet_luxury.jpg",
    description: "Prepoznaven, ročno vezan šopek iz nežnih rožnatih vrtnic, skulpturalnih evkaliptusovih vejic, belih zlatic in posušenih travnih bilk, ki ustvarjajo mehko in naravno teksturo.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "85 €"
  },
  {
    id: "g2",
    title: "Žajbljev in slonokoščeni poročni lok",
    category: "weddings",
    image: "/images/wedding_floral.jpg",
    description: "Cvetlična scenografija po meri za poročni obred. Ustvarjena z belimi vrtnicami Avalanche, okrasno pampaško travo, evkaliptusom in nežno padajočimi rožnatimi orhidejami.",
    dimensions: "Dekoracija na lokaciji",
    price: "Po dogovoru"
  },
  {
    id: "g3",
    title: "Banketni namizni aranžma",
    category: "events",
    image: "/images/event_floral.jpg",
    description: "Razkošen namizni aranžma, oblikovan za romantične večerje ob svečah. Združuje nevtralne vrtnice, rožnate zlatice in izbrano sezonsko zelenje okoli starinskih medeninastih svečnikov.",
    dimensions: "V: 70 cm | Š: 50 cm",
    price: "Po dogovoru"
  },
  {
    id: "g4",
    title: "Minimalistična skulptura s kalami",
    category: "custom",
    image: "/images/corporate_floral.jpg",
    description: "Arhitekturna kreacija s čistimi linijami belih kal in strukturiranih vej v surovem betonskem podstavku. Popolna za sprejemne pisarne ali galerije.",
    dimensions: "V: 110 cm | Š: 35 cm",
    price: "140 € / teden"
  },
  {
    id: "g5",
    title: "Jesenska zarja v vazi",
    category: "seasonal",
    image: "/images/hero_floral.jpg",
    description: "Topel, sezonski izrazni aranžma, ki združuje oranžne dalije, vrhunske vrtnice Quicksand, bordo listje in teksturirane veje v ročno izdelani keramični vazi.",
    dimensions: "V: 60 cm | Š: 45 cm",
    price: "110 €"
  },
  {
    id: "g6",
    title: "Artizanska cvetlična vaza",
    category: "custom",
    image: "/images/brand_story.jpg",
    description: "Umetniški aranžma s poudarkom na praznem prostoru in čistih linijah. Ročno oblikovan za odprtja zasebnih galerij z uporabo potonik in izbranega listja.",
    dimensions: "V: 45 cm | Š: 30 cm",
    price: "95 €"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ana & Matej",
    role: "Nevesta & ženin",
    text: "Cvetličarna Anaeva je naš poročni prostor spremenila v breztelesne sanje. Pozornost do detajlov v žajbljevi in rožnati barvni paleti je bila izjemna. Gostje še vedno občudujejo najin cvetlični lok!",
    rating: 5
  },
  {
    id: "t2",
    name: "Lara Kozmetika",
    role: "Poslovna stranka",
    text: "Tedenski botanični aranžmaji prinašajo prefinjeno in naravno energijo v naš salon. Vsaka kreacija deluje kot unikatna prostorska skulptura in ne le kot navaden šopek.",
    rating: 5
  },
  {
    id: "t3",
    name: "Maja K.",
    role: "Redna stranka",
    text: "Naročanje unikatnih šopkov za družinske praznike je vedno pravo doživetje. Embalaža je vrhunska, izbor cvetja redek in umetniški, cvetje pa ostane sveže neverjetno dolgo.",
    rating: 5
  }
];

export const servicesData: ServiceDetail[] = [
  {
    id: "s1",
    title: "Unikatni šopki",
    slug: "bouquets",
    description: "Individualno oblikovani, ročno vezani šopki, oviti v vrhunski ekološki papir, namenjeni obeleževanju najlepših življenjskih trenutkov.",
    benefits: [
      "Cvetje izbrane kakovosti lokalnih gojiteljev",
      "Barvna harmonija, prilagojena vaši priložnosti",
      "Elegantno ročno napisano posvetilo na teksturiranem kartonu",
      "Butična dostava na dom na območju Ljubljane z okolico"
    ],
    image: "/images/bouquet_luxury.jpg",
    priceStart: "od 60 €",
    details: [
      "Verjamemo, da je šopek zgodba, povedana skozi cvetne liste. Naši cvetlični ustvarjalci vsako steblo izberejo glede na teksturo, obliko in obstojnost.",
      "Na voljo kot enkratno darilo ali kot naročnina na redno cvetlično osvežitev doma."
    ]
  },
  {
    id: "s2",
    title: "Poročna scenografija",
    slug: "weddings",
    description: "Celostno cvetlično oblikovanje za butične in luksuzne poroke. Ustvarjamo vse od nevestinega šopka do monumentalnih prostorskih instalacij.",
    benefits: [
      "Podrobna zasnova barvne palete in vizualni predlog dekoracije",
      "Uklajeno cvetje za nevesto, ženina in svate",
      "Monumentalne instalacije na lokaciji obreda (loki, cvetlične poti)",
      "Popolno stilsko oblikovanje miz in ambienta s svečniki"
    ],
    image: "/images/wedding_floral.jpg",
    priceStart: "po svetovanju",
    details: [
      "Vaš poročni dan je edinstven trenutek. Tesno sodelujemo z vami in vašimi organizatorji porok, da ustvarimo botanično okolje, ki odraža vajino zgodbo.",
      "Od sodobnega minimalizma do bogatih romantičnih cvetličnih sten."
    ]
  },
  {
    id: "s3",
    title: "Dekoracija dogodkov",
    slug: "events",
    description: "Ambiantalne cvetlične dekoracije za zasebne sprejeme, predstavitve blagovnih znamk, galerije in intimna praznovanja, ki zahtevajo visok vizualni učinek.",
    benefits: [
      "Konceptualno oblikovanje po meri, prilagojeno temi dogodka",
      "Izrazni cvetlični aranžmaji na vhodih in osrednjih točkah",
      "Usklajevanje z namiznimi prti, svečami in ambientalno svetlobo",
      "Profesionalna postavitev in nemoten prevzem po dogodku"
    ],
    image: "/images/event_floral.jpg",
    priceStart: "od 450 €",
    details: [
      "Oblikujemo cvetlične kulise, ki usmerjajo gibanje gostov in poudarjajo celotno vzdušje. Popolno za blagovne znamke, ki želijo pustiti nepozaben vtis."
    ]
  },
  {
    id: "s4",
    title: "Poslovni naročniški abonma",
    slug: "corporate",
    description: "Tedenske botanične skulpture, ki oplemenitijo poslovne prostore, butične hotele, restavracije in prodajalne s prefinjenim cvetličnim oblikovanjem.",
    benefits: [
      "Brezplačen najem ustreznih dizajnerskih vaz",
      "Tedenska dostava in strokovna namestitev na lokaciji",
      "Skrbno izbrana dolgotrajna stebla, prilagojena prostoru",
      "Mesečni obračun in prilagodljivo sodelovanje"
    ],
    image: "/images/corporate_floral.jpg",
    priceStart: "od 120 € / teden",
    details: [
      "Delovni prostor, oplemeniten z živo umetnostjo, deluje toplo in prefinjeno. Naši poslovni aranžmaji poudarjajo čiste linije in skulpturalne cvetove, ki ostanejo brezhibni ves teden."
    ]
  }
];

export interface WorkshopDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  image: string;
  priceStart: string;
  details: string[];
}

export const workshopsData: WorkshopDetail[] = [
  {
    id: "w1",
    title: "Izdelaj svoj šopek + All You Can Drink Aperol Spritz",
    slug: "workshop-aperol",
    description: "Združite ustvarjalnost in prijetno druženje. Na naši najbolj priljubljeni cvetlični delavnici vas naučimo teorije barv, pravilne izbire cvetja in tehnike vezave šopkov, medtem ko uživate v neomejenem osvežilnem Aperol Spritzu.",
    benefits: [
      "Teorija kompozicije in tehnike vezave šopkov",
      "Vsa sveža sezonska stebla in profesionalno orodje",
      "Neomejen Aperol Spritz ter butični prigrizki",
      "Svoj čudovit ročno ustvarjen šopek odnesete domov"
    ],
    image: "/images/workshop_aperol.jpg",
    priceStart: "85 € / osebo",
    details: [
      "Kot nalašč za dekliščine, rojstne dneve ali preprosto čudovit popoldan s prijateljicami. Naša cvetličarka vas bo vodila skozi vsak korak, od priprave stebel do končne vezave in pakiranja.",
      "Delavnice potekajo ob petkih in sobotah v našem cvetličnem studiu v Ljubljani."
    ]
  },
  {
    id: "w2",
    title: "Izdelovanje cvetličnih vencev s konji",
    slug: "workshop-horses",
    description: "Popoln botanični umik v naravo. Na čudovitem posestvu se boste naučili spletanja lasnih in stenskih cvetličnih vencev v pomirjujoči družbi plemenitih konj.",
    benefits: [
      "Tehniko spletanja trpežnih stenskih in lasnih vencev",
      "Srečanje, povezovanje in sproščanje ob prisotnosti konj",
      "Profesionalno fotografiranje z vašimi kreacijami v naravi",
      "Domača kulinarika in osvežilni lokalni napitki"
    ],
    image: "/images/workshop_horses.jpg",
    priceStart: "120 € / osebo",
    details: [
      "Edinstveno doživetje, ki združuje cvetlično ustvarjalnost z naravno terapijo. Prisotnost konj prinaša globok občutek miru, kar se odraža tudi v vašem ustvarjalnem izrazu.",
      "Vključuje vsa cvetlična stebla, fotografije v visoki ločljivosti in pogostitev s tradicionalnimi lokalnimi dobrotami."
    ]
  }
];

