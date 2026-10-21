const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix that broken input syntax if it exists
  content = content.replace(/placeholder="Seu nome" className="\.\.\. placeholder:text-\[#472f5b\]\/70"/g, 'placeholder="Seu nome"');

  // Replace bg-[#4e653d] with bg-[#2a3a1e] (darker hover states etc)
  content = content.replace(/bg-\[#4e653d\]/g, 'bg-[#2a3a1e]');
  
  // Replace text-[#4e653d] with text-[#2a3a1e]
  content = content.replace(/text-\[#4e653d\]/g, 'text-[#2a3a1e]');
  
  // Update inputs to have darker placeholders (Tailwind placeholder pseudo-class)
  content = content.replace(/className="w-full bg-transparent border-b border-\[#472f5b\]\/20 py-3 text-sm text-\[#472f5b\] focus:outline-none focus:border-\[#D8B36B\] transition-colors"/g, 'className="w-full bg-transparent border-b border-[#472f5b]/20 py-3 text-sm text-[#472f5b] placeholder:text-[#472f5b]/60 focus:outline-none focus:border-[#D8B36B] transition-colors"');

  // In LeadCaptureForm and TrustBadges, we used text-[#866428] instead of text-[#D8B36B] to increase contrast on light backgrounds.
  // Wait, I already did this via sed, let's just make sure text-[#D8B36B] isn't used anywhere else on a light bg.

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
