const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const rawList = [
  { file: '1000000518.jpg', title: 'Koralni sezonski šopek', cat: 'bouquets', price: '55 €', desc: 'Prepoznaven ročno vezan šopek v toplih koralnih in pastelnih tonih.' },
  { file: '1000015154.jpg', title: 'Spomladanski ambient', cat: 'events', price: 'Po dogovoru', desc: 'Ambientalna cvetlična dekoracija z naravnim gibanjem stebel.' },
  { file: '1000015168.jpg', title: 'Skulpturalni cvetlični aranžma', cat: 'custom', price: '85 €', desc: 'Umetniška kompozicija z poudarjeno strukturo in čistimi linijami.' },
  { file: '1000015200.jpg', title: 'Poročni cvetlični obok Anaeva', cat: 'weddings', price: 'Po dogovoru', desc: 'Monumentalna cvetlična dekoracija poročnega obreda s svežim cvetjem.' },
  { file: '1000015201.jpg', title: 'Slonokoščeni poročni šopek', cat: 'weddings', price: '95 €', desc: 'Prestižen nevestin šopek iz izbranih belih in kremnih cvetov.' },
  { file: '1000015202.jpg', title: 'Poročna namizna scenografija', cat: 'weddings', price: 'Po dogovoru', desc: 'Romantična cvetlična linija vzdolž poročnih miz s svečami.' },
  { file: '1000015203.jpg', title: 'Festivna cvetlična dekoracija', cat: 'events', price: '120 €', desc: 'Bujna cvetlična kompozicija za svečane dogodke in praznovanja.' },
  { file: '1000018634.jpg', title: 'Rožnati šopek z evkaliptusom', cat: 'bouquets', price: '65 €', desc: 'Bogat šopek rožnatih vrtnic in dišečega evkaliptusa.' },
  { file: '1000018679.jpg', title: 'Spomladanska harmonija', cat: 'seasonal', price: '50 €', desc: 'Sveža sezonska kombinacija pomladnih cvetov v pastelni paleti.' },
  { file: '1000018687.jpg', title: 'Kraljevski pastelni šopek', cat: 'bouquets', price: '75 €', desc: 'Raskošen šopek velikih dimenzij za posebne obletnice.' },
  { file: '1000018699.jpg', title: 'Ambientalni cvetlični aranžma', cat: 'events', price: '90 €', desc: 'Prostorska kreacija za sprejemne pulte in salone.' },
  { file: '1000018700.jpg', title: 'Romantična nevestina kreacija', cat: 'weddings', price: '85 €', desc: 'Nežen ročno vezan poročno šopek z mehkimi padajočimi trakovi.' },
  { file: '1000018777.jpg', title: 'Unikatna botanična instalacija', cat: 'custom', price: '130 €', desc: 'Arhitekturna suha in sveža botanična instalacija po meri.' },
  { file: '1000018779.jpg', title: 'Sončni sezonski šopek', cat: 'seasonal', price: '45 €', desc: 'Svetel in igriv šopek sezonskega cvetja za vsak dom.' },
  { file: '1000020901.jpg', title: 'Nežni pudrasti šopek', cat: 'bouquets', price: '60 €', desc: 'Prefinjena barvna harmonija v rožnatih in belih tonih.' },
  { file: '1000027254.jpg', title: 'Poročni naprsni in mizni aranžmaji', cat: 'weddings', price: 'Po dogovoru', desc: 'Uskladeni cvetlični detajli za ženina, svate in mizne dekoracije.' },
  { file: '1000027255.jpg', title: 'Elegantna poročna dekoracija lokacije', cat: 'weddings', price: 'Po dogovoru', desc: 'Cvetlično oblikovanje ambienta na lokaciji obreda ali slavja.' },
  { file: '1000027606.jpg', title: 'Jesenska cvetlična simfonija', cat: 'seasonal', price: '55 €', desc: 'Topli bordo in zlati toni jesenskega cvetja.' },
  { file: '1000028000.jpg', title: 'Sodobna botanična skulptura', cat: 'custom', price: '105 €', desc: 'Minimalistična kreacija v ročno oblikovani podlagi.' },
  { file: '1000028788.jpg', title: 'Beli elegantski šopek Anaeva', cat: 'bouquets', price: '70 €', desc: 'Čist in bezčasen šopek iz belih vrtnic in nežnega zelenja.' },
  { file: '1000031093.jpg', title: 'Cvetlični aranžma za posebne priložnosti', cat: 'events', price: '95 €', desc: 'Vrhunski namizni aranžma z izbranimi cvetnimi stebli.' },
  { file: '1000031743.jpg', title: 'Raskošen cvetlični šopek', cat: 'bouquets', price: '80 €', desc: 'Velik in bogat šopek z raznolikimi teksturami cvetja.' },
  { file: '1000031944.jpg', title: 'Zimska cvetlična pravljica', cat: 'seasonal', price: '65 €', desc: 'Zimski cvetlični aranžma s storžki in posušenimi botaničnimi poudarki.' },
  { file: '1000032275.jpg', title: 'Poročna dekoracija mize', cat: 'weddings', price: 'Po dogovoru', desc: 'Cvetlični aranžmaji na poročni mizi z elegantnim svečevjem.' },
  { file: '1000036182.jpg', title: 'Artizanska botanična vaza', cat: 'custom', price: '85 €', desc: 'Unikatno cvetlično oblikovanje v ročno narejeni vazi.' },
  { file: '1000036402.jpg', title: 'Mini romantični šopek', cat: 'bouquets', price: '40 €', desc: 'Kompakten, a izjemno prikupen ročno vezan šopek.' },
  { file: '1000043009.jpg', title: 'Poletni pisani šopek', cat: 'seasonal', price: '50 €', desc: 'Razgiban poletni šopek živo obarvanega cvetja.' },
  { file: '20220812_132846.jpg', title: 'Tradicionalni ročno vezan šopek', cat: 'bouquets', price: '55 €', desc: 'Klasično vezan šopek iz najboljših cvetov lokalnih vzrediteljev.' },
  { file: '20230120_093114.jpg', title: 'Zimska ambientna dekoracija', cat: 'events', price: '75 €', desc: 'Topel praznični aranžma za ambient pisarn in salonov.' },
  { file: '20230406_145421.jpg', title: 'Velikonočni spomladanski šopek', cat: 'seasonal', price: '60 €', desc: 'Igra spomladanskih barv z narcisami in tulipani.' },
  { file: '20230511_174649.jpg', title: 'Majski cvetlični šopek', cat: 'bouquets', price: '65 €', desc: 'Razkošen majski šopek svežih potonik in rožnatih cvetov.' },
  { file: '20250109_175505.jpg', title: 'Minimalistični aranžma', cat: 'custom', price: '70 €', desc: 'Trajen aranžma z suhim cvetjem in lesnimi poudarki.' },
  { file: '20250529_170041.jpg', title: 'Bujni šopek potonik', cat: 'bouquets', price: '85 €', desc: 'Dišeč in bogat šopek potonik v polnem cvetu.' },
  { file: '20250701_170205.jpg', title: 'Poletni poljski šopek', cat: 'seasonal', price: '45 €', desc: 'Naraven in mehek šopek s poljskim cvetjem.' },
  { file: '20250731_161428_20260120130639513.jpg', title: 'Umetniški cvetlični lonček', cat: 'custom', price: '55 €', desc: 'Dekorativen cvetlični aranžma v keramični posodi.' },
  { file: '20250811_200941.jpg', title: 'Poletni namizni aranžma', cat: 'events', price: '80 €', desc: 'Nizek namizni aranžma za letne terase in praznovanja.' },
  { file: '20250812_201635.jpg', title: 'Poletni šopek z sončnicami', cat: 'bouquets', price: '50 €', desc: 'Topel in optimističen šopek z sončnicami in poljskim rastjem.' },
  { file: '20250905_135350_20260120130419478_20260320101516308.jpg', title: 'Jesenski botanični aranžma', cat: 'custom', price: '75 €', desc: 'Teksturirana kompozicija s suhimi in svežimi jesenskimi stebli.' },
  { file: '20251020_105112.jpg', title: 'Jesenska bogata kompozicija', cat: 'seasonal', price: '65 €', desc: 'Bogat jesenski aranžma v toplih rjavih in koralnih odtenkih.' },
  { file: '20260325_094511.jpg', title: 'Pomladanski šopek tulipanov', cat: 'bouquets', price: '55 €', desc: 'Sveže obrani tulipani in zlatice v živahnih spomladanskih barvah.' },
  { file: 'IMG-1cc07b810ff2ac63bb84830fc2a32e6c-V.jpg', title: 'Delikatni nevestin šopek', cat: 'weddings', price: '90 €', desc: 'Eleganten nevestin šopek z nežno strukturo cvetja.' },
  { file: 'Messenger_creation_1ADAC6E4-9693-4AF6-B681-4F47B24BDE86.jpg', title: 'Ljubka cvetlična pozornost', cat: 'bouquets', price: '40 €', desc: 'Nežen šopek za hitro presenečenje ali lep dan.' },
  { file: 'Messenger_creation_224A14D7-C8E9-43F5-AEE9-7AF2231C422E_20260206142740236.jpg', title: 'Cvetlični venec za vrata', cat: 'custom', price: '60 €', desc: 'Ročno spleten stenski ali vratni venec iz suhega in svežega cvetja.' },
  { file: 'received_198400358902557.jpg', title: 'Droban sezonski šopek', cat: 'seasonal', price: '35 €', desc: 'Priljubljen majhen šopek za obisk ali drobno veselje.' }
];

async function processAll() {
  const newItems = [];
  let count = 0;
  for (const item of rawList) {
    const srcPath = path.join(__dirname, '..', item.file);
    if (!fs.existsSync(srcPath)) {
      console.log('Skipping missing file:', item.file);
      continue;
    }
    count++;
    const outName = `g_item_${count}.jpg`;
    const outPath = path.join(outDir, outName);

    await sharp(srcPath)
      .resize(1200, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Processed ${item.file} -> ${outName} (${Math.round(stat.size / 1024)} KB)`);

    newItems.push({
      id: `g_new_${count}`,
      title: item.title,
      category: item.cat,
      image: `/images/gallery/${outName}`,
      description: item.desc,
      dimensions: 'V: 55 cm | Š: 40 cm',
      price: item.price
    });
  }

  const scratchDir = path.join(__dirname, '..', 'scratch');
  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }
  fs.writeFileSync(path.join(scratchDir, 'gallery_items.json'), JSON.stringify(newItems, null, 2));
  console.log('Finished processing', newItems.length, 'gallery items');
}

processAll().catch(err => console.error(err));
