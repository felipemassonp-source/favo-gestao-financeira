const fs = require('fs');

let content = fs.readFileSync('./src/pages/Home.tsx', 'utf8');

// Insert import
if (!content.includes('import OrganicJourney')) {
  content = content.replace(
    'import BeforeAfterReveal from "../components/BeforeAfterReveal";',
    'import BeforeAfterReveal from "../components/BeforeAfterReveal";\nimport OrganicJourney from "../components/OrganicJourney";'
  );
}

// Insert component before the Reveal
if (!content.includes('<OrganicJourney />')) {
  content = content.replace(
    '<BeforeAfterReveal />',
    '<OrganicJourney />\n\n      <BeforeAfterReveal />'
  );
}

fs.writeFileSync('./src/pages/Home.tsx', content, 'utf8');
