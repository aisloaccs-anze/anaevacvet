const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

async function compress() {
  for (const file of files) {
    const input = path.join(imagesDir, file);
    const tmp = input + '.tmp.jpg';
    const stat = fs.statSync(input);
    const sizeMB = (stat.size / 1024 / 1024).toFixed(2);

    try {
      await sharp(input)
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tmp);

      const newStat = fs.statSync(tmp);
      const newSizeMB = (newStat.size / 1024 / 1024).toFixed(2);
      fs.renameSync(tmp, input);
      console.log(`✓ ${file}: ${sizeMB}MB → ${newSizeMB}MB`);
    } catch (err) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  // Also compress the logo
  const logo = path.join(__dirname, 'public', 'logo.jpg');
  if (fs.existsSync(logo)) {
    const tmp = logo + '.tmp.jpg';
    const sizeMB = (fs.statSync(logo).size / 1024 / 1024).toFixed(2);
    await sharp(logo)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(tmp);
    const newSizeMB = (fs.statSync(tmp).size / 1024 / 1024).toFixed(2);
    fs.renameSync(tmp, logo);
    console.log(`✓ logo.jpg: ${sizeMB}MB → ${newSizeMB}MB`);
  }

  console.log('\nDone! All images compressed for web.');
}

compress().catch(console.error);
