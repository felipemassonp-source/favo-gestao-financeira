const fs = require('fs');

let content = fs.readFileSync('./src/pages/Home.tsx', 'utf8');

// Insert import
if (!content.includes('import WasteCalculator')) {
  content = content.replace(
    'import FounderLetter from "../components/FounderLetter";',
    'import FounderLetter from "../components/FounderLetter";\nimport WasteCalculator from "../components/WasteCalculator";'
  );
}

// Insert component before ComparisonGrid or after FounderLetter
if (!content.includes('<WasteCalculator />')) {
  content = content.replace(
    '<FounderLetter />',
    '<FounderLetter />\n\n      {/* Interactive Calculator Section */}\n      <FadeInUp>\n        <WasteCalculator />\n      </FadeInUp>'
  );
}

fs.writeFileSync('./src/pages/Home.tsx', content, 'utf8');
