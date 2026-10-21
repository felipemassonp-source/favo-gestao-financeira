const fs = require('fs');

let content = fs.readFileSync('./src/pages/Home.tsx', 'utf8');

// Insert import
if (!content.includes('import FounderLetter')) {
  content = content.replace(
    'import Testimonials from "../components/Testimonials";',
    'import Testimonials from "../components/Testimonials";\nimport FounderLetter from "../components/FounderLetter";'
  );
}

// Insert component
if (!content.includes('<FounderLetter />')) {
  content = content.replace(
    '{/* Testimonials / Social Proof Section */}',
    '<FounderLetter />\n\n      {/* Testimonials / Social Proof Section */}'
  );
}

fs.writeFileSync('./src/pages/Home.tsx', content, 'utf8');
