// This script will update all HTML files to use the new menu system
const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
  'artigos.html',
  'detonados.html',
  'downloads.html',
  'sobre.html',
  'apoiadores.html',
  'cartao.html',
  'doacao.html'
];

// The menu HTML to insert
const menuHTML = `
    <!-- Menu will be injected here by menu.js -->
    <script src="js/menu.js"></script>`;

// Update each HTML file
htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  // Check if file exists
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the old menu with the new one
    content = content.replace(
      /<button id="neonToggle">[\s\S]*?<\/aside>/,
      menuHTML
    );
    
    // Save the updated file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated menu in ${file}`);
  } else {
    console.log(`Skipping ${file} (not found)`);
  }
});

console.log('Menu update complete!');
