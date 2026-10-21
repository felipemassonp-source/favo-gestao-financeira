const fs = require('fs');

let content = fs.readFileSync('./src/pages/Home.tsx', 'utf8');
content = content.replace(
  '<FadeInUp>\n        <ComparisonGrid />\n      </FadeInUp>\n      </FadeInUp>',
  '<ComparisonGrid />\n      </FadeInUp>'
);

fs.writeFileSync('./src/pages/Home.tsx', content, 'utf8');
