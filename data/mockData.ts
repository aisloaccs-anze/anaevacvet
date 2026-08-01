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
    id: "g_new_1",
    title: "Koralni sezonski šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_1.jpg",
    description: "Prepoznaven ročno vezan šopek v toplih koralnih in pastelnih tonih.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "55 €"
  },
  {
    id: "g_new_2",
    title: "Spomladanski ambient",
    category: "events",
    image: "/images/gallery/g_item_2.jpg",
    description: "Ambientalna cvetlična dekoracija z naravnim gibanjem stebel.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "Po dogovoru"
  },
  {
    id: "g_new_3",
    title: "Skulpturalni cvetlični aranžma",
    category: "custom",
    image: "/images/gallery/g_item_3.jpg",
    description: "Umetniška kompozicija z poudarjeno strukturo in čistimi linijami.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "85 €"
  },
  {
    id: "g_new_4",
    title: "Poročni cvetlični obok Anaeva",
    category: "weddings",
    image: "/images/gallery/g_item_4.jpg",
    description: "Monumentalna cvetlična dekoracija poročnega obreda s svežim cvetjem.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "Po dogovoru"
  },
  {
    id: "g_new_5",
    title: "Slonokoščeni poročni šopek",
    category: "weddings",
    image: "/images/gallery/g_item_5.jpg",
    description: "Prestižen nevestin šopek iz izbranih belih in kremnih cvetov.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "95 €"
  },
  {
    id: "g_new_6",
    title: "Poročna namizna scenografija",
    category: "weddings",
    image: "/images/gallery/g_item_6.jpg",
    description: "Romantična cvetlična linija vzdolž poročnih miz s svečami.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "Po dogovoru"
  },
  {
    id: "g_new_7",
    title: "Festivna cvetlična dekoracija",
    category: "events",
    image: "/images/gallery/g_item_7.jpg",
    description: "Bujna cvetlična kompozicija za svečane dogodke in praznovanja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "120 €"
  },
  {
    id: "g_new_8",
    title: "Rožnati šopek z evkaliptusom",
    category: "bouquets",
    image: "/images/gallery/g_item_8.jpg",
    description: "Bogat šopek rožnatih vrtnic in dišečega evkaliptusa.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "65 €"
  },
  {
    id: "g_new_9",
    title: "Spomladanska harmonija",
    category: "seasonal",
    image: "/images/gallery/g_item_9.jpg",
    description: "Sveža sezonska kombinacija pomladnih cvetov v pastelni paleti.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "50 €"
  },
  {
    id: "g_new_10",
    title: "Kraljevski pastelni šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_10.jpg",
    description: "Raskošen šopek velikih dimenzij za posebne obletnice.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "75 €"
  },
  {
    id: "g_new_11",
    title: "Ambientalni cvetlični aranžma",
    category: "events",
    image: "/images/gallery/g_item_11.jpg",
    description: "Prostorska kreacija za sprejemne pulte in salone.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "90 €"
  },
  {
    id: "g_new_12",
    title: "Romantična nevestina kreacija",
    category: "weddings",
    image: "/images/gallery/g_item_12.jpg",
    description: "Nežen ročno vezan poročno šopek z mehkimi padajočimi trakovi.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "85 €"
  },
  {
    id: "g_new_13",
    title: "Unikatna botanična instalacija",
    category: "custom",
    image: "/images/gallery/g_item_13.jpg",
    description: "Arhitekturna suha in sveža botanična instalacija po meri.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "130 €"
  },
  {
    id: "g_new_14",
    title: "Sončni sezonski šopek",
    category: "seasonal",
    image: "/images/gallery/g_item_14.jpg",
    description: "Svetel in igriv šopek sezonskega cvetja za vsak dom.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "45 €"
  },
  {
    id: "g_new_15",
    title: "Nežni pudrasti šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_15.jpg",
    description: "Prefinjena barvna harmonija v rožnatih in belih tonih.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "60 €"
  },
  {
    id: "g_new_16",
    title: "Poročni naprsni in mizni aranžmaji",
    category: "weddings",
    image: "/images/gallery/g_item_16.jpg",
    description: "Uskladeni cvetlični detajli za ženina, svate in mizne dekoracije.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "Po dogovoru"
  },
  {
    id: "g_new_17",
    title: "Elegantna poročna dekoracija lokacije",
    category: "weddings",
    image: "/images/gallery/g_item_17.jpg",
    description: "Cvetlično oblikovanje ambienta na lokaciji obreda ali slavja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "Po dogovoru"
  },
  {
    id: "g_new_18",
    title: "Jesenska cvetlična simfonija",
    category: "seasonal",
    image: "/images/gallery/g_item_18.jpg",
    description: "Topli bordo in zlati toni jesenskega cvetja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "55 €"
  },
  {
    id: "g_new_19",
    title: "Sodobna botanična skulptura",
    category: "custom",
    image: "/images/gallery/g_item_19.jpg",
    description: "Minimalistična kreacija v ročno oblikovani podlagi.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "105 €"
  },
  {
    id: "g_new_20",
    title: "Beli elegantski šopek Anaeva",
    category: "bouquets",
    image: "/images/gallery/g_item_20.jpg",
    description: "Čist in bezčasen šopek iz belih vrtnic in nežnega zelenja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "70 €"
  },
  {
    id: "g_new_21",
    title: "Cvetlični aranžma za posebne priložnosti",
    category: "events",
    image: "/images/gallery/g_item_21.jpg",
    description: "Vrhunski namizni aranžma z izbranimi cvetnimi stebli.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "95 €"
  },
  {
    id: "g_new_22",
    title: "Raskošen cvetlični šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_22.jpg",
    description: "Velik in bogat šopek z raznolikimi teksturami cvetja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "80 €"
  },
  {
    id: "g_new_23",
    title: "Zimska cvetlična pravljica",
    category: "seasonal",
    image: "/images/gallery/g_item_23.jpg",
    description: "Zimski cvetlični aranžma s storžki in posušenimi botaničnimi poudarki.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "65 €"
  },
  {
    id: "g_new_24",
    title: "Poročna dekoracija mize",
    category: "weddings",
    image: "/images/gallery/g_item_24.jpg",
    description: "Cvetlični aranžmaji na poročni mizi z elegantnim svečevjem.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "Po dogovoru"
  },
  {
    id: "g_new_25",
    title: "Artizanska botanična vaza",
    category: "custom",
    image: "/images/gallery/g_item_25.jpg",
    description: "Unikatno cvetlično oblikovanje v ročno narejeni vazi.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "85 €"
  },
  {
    id: "g_new_26",
    title: "Mini romantični šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_26.jpg",
    description: "Kompakten, a izjemno prikupen ročno vezan šopek.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "40 €"
  },
  {
    id: "g_new_27",
    title: "Poletni pisani šopek",
    category: "seasonal",
    image: "/images/gallery/g_item_27.jpg",
    description: "Razgiban poletni šopek živo obarvanega cvetja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "50 €"
  },
  {
    id: "g_new_28",
    title: "Tradicionalni ročno vezan šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_28.jpg",
    description: "Klasično vezan šopek iz najboljših cvetov lokalnih vzrediteljev.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "55 €"
  },
  {
    id: "g_new_29",
    title: "Zimska ambientna dekoracija",
    category: "events",
    image: "/images/gallery/g_item_29.jpg",
    description: "Topel praznični aranžma za ambient pisarn in salonov.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "75 €"
  },
  {
    id: "g_new_30",
    title: "Velikonočni spomladanski šopek",
    category: "seasonal",
    image: "/images/gallery/g_item_30.jpg",
    description: "Igra spomladanskih barv z narcisami in tulipani.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "60 €"
  },
  {
    id: "g_new_31",
    title: "Majski cvetlični šopek",
    category: "bouquets",
    image: "/images/gallery/g_item_31.jpg",
    description: "Razkošen majski šopek svežih potonik in rožnatih cvetov.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "65 €"
  },
  {
    id: "g_new_32",
    title: "Minimalistični aranžma",
    category: "custom",
    image: "/images/gallery/g_item_32.jpg",
    description: "Trajen aranžma z suhim cvetjem in lesnimi poudarki.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "70 €"
  },
  {
    id: "g_new_33",
    title: "Bujni šopek potonik",
    category: "bouquets",
    image: "/images/gallery/g_item_33.jpg",
    description: "Dišeč in bogat šopek potonik v polnem cvetu.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "85 €"
  },
  {
    id: "g_new_34",
    title: "Poletni poljski šopek",
    category: "seasonal",
    image: "/images/gallery/g_item_34.jpg",
    description: "Naraven in mehek šopek s poljskim cvetjem.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "45 €"
  },
  {
    id: "g_new_35",
    title: "Umetniški cvetlični lonček",
    category: "custom",
    image: "/images/gallery/g_item_35.jpg",
    description: "Dekorativen cvetlični aranžma v keramični posodi.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "55 €"
  },
  {
    id: "g_new_36",
    title: "Poletni namizni aranžma",
    category: "events",
    image: "/images/gallery/g_item_36.jpg",
    description: "Nizek namizni aranžma za letne terase in praznovanja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "80 €"
  },
  {
    id: "g_new_37",
    title: "Poletni šopek z sončnicami",
    category: "bouquets",
    image: "/images/gallery/g_item_37.jpg",
    description: "Topel in optimističen šopek z sončnicami in poljskim rastjem.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "50 €"
  },
  {
    id: "g_new_38",
    title: "Jesenski botanični aranžma",
    category: "custom",
    image: "/images/gallery/g_item_38.jpg",
    description: "Teksturirana kompozicija s suhimi in svežimi jesenskimi stebli.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "75 €"
  },
  {
    id: "g_new_39",
    title: "Jesenska bogata kompozicija",
    category: "seasonal",
    image: "/images/gallery/g_item_39.jpg",
    description: "Bogat jesenski aranžma v toplih rjavih in koralnih odtenkih.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "65 €"
  },
  {
    id: "g_new_40",
    title: "Pomladanski šopek tulipanov",
    category: "bouquets",
    image: "/images/gallery/g_item_40.jpg",
    description: "Sveže obrani tulipani in zlatice v živahnih spomladanskih barvah.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "55 €"
  },
  {
    id: "g_new_41",
    title: "Delikatni nevestin šopek",
    category: "weddings",
    image: "/images/gallery/g_item_41.jpg",
    description: "Eleganten nevestin šopek z nežno strukturo cvetja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "90 €"
  },
  {
    id: "g_new_42",
    title: "Ljubka cvetlična pozornost",
    category: "bouquets",
    image: "/images/gallery/g_item_42.jpg",
    description: "Nežen šopek za hitro presenečenje ali lep dan.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "40 €"
  },
  {
    id: "g_new_43",
    title: "Cvetlični venec za vrata",
    category: "custom",
    image: "/images/gallery/g_item_43.jpg",
    description: "Ročno spleten stenski ali vratni venec iz suhega in svežega cvetja.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "60 €"
  },
  {
    id: "g_new_44",
    title: "Droban sezonski šopek",
    category: "seasonal",
    image: "/images/gallery/g_item_44.jpg",
    description: "Priljubljen majhen šopek za obisk ali drobno veselje.",
    dimensions: "V: 55 cm | Š: 40 cm",
    price: "35 €"
  },
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

