const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // We want to replace text-[#D8B36B] with text-[#866428] in TrustBadges and LeadCaptureForm
  // because they sit on a light background.
  if (filePath.includes('TrustBadges.tsx') || filePath.includes('LeadCaptureForm.tsx')) {
    content = content.replace(/text-\[#D8B36B\]/g, 'text-[#866428]');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  });
}

walkDir('./src');
