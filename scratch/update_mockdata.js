const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '..', 'data', 'mockData.ts');
const newItems = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'scratch', 'gallery_items.json'), 'utf8'));

let content = fs.readFileSync(mockDataPath, 'utf8');

// Parse existing items or append to galleryItems array
const newItemsCode = newItems.map(item => `  {
    id: "${item.id}",
    title: "${item.title}",
    category: "${item.category}",
    image: "${item.image}",
    description: "${item.description}",
    dimensions: "${item.dimensions}",
    price: "${item.price}"
  }`).join(',\n');

// Replace the end of galleryItems array
content = content.replace('export const galleryItems: GalleryItem[] = [', `export const galleryItems: GalleryItem[] = [\n${newItemsCode},`);

fs.writeFileSync(mockDataPath, content, 'utf8');
console.log('Successfully updated data/mockData.ts with', newItems.length, 'new real gallery photos');
