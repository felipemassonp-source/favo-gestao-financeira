const fs = require('fs');

let content = fs.readFileSync('./src/pages/Home.tsx', 'utf8');

// Insert import
if (!content.includes('import BeforeAfterReveal')) {
  content = content.replace(
    'import ComparisonGrid from "../components/ComparisonGrid";',
    'import ComparisonGrid from "../components/ComparisonGrid";\nimport BeforeAfterReveal from "../components/BeforeAfterReveal";'
  );
}

// Insert component
// Let's place it right before the ComparisonGrid
if (!content.includes('<BeforeAfterReveal />')) {
  content = content.replace(
    '<ComparisonGrid />',
    '<BeforeAfterReveal />\n\n      <FadeInUp>\n        <ComparisonGrid />\n      </FadeInUp>'
  );
}

fs.writeFileSync('./src/pages/Home.tsx', content, 'utf8');
