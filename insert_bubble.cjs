const fs = require('fs');

let content = fs.readFileSync('./src/components/Layout.tsx', 'utf8');

if (!content.includes('import FloatingVideoBubble')) {
  content = content.replace(
    'import InstagramFeed from "./InstagramFeed";',
    'import InstagramFeed from "./InstagramFeed";\nimport FloatingVideoBubble from "./FloatingVideoBubble";'
  );
}

if (!content.includes('<FloatingVideoBubble />')) {
  content = content.replace(
    '<BeeCursor />',
    '<BeeCursor />\n      <FloatingVideoBubble />'
  );
}

fs.writeFileSync('./src/components/Layout.tsx', content, 'utf8');
