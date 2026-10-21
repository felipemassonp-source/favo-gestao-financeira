const fs = require('fs');

let filePath = './src/components/Layout.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const target = `  return (
    <div className="flex flex-col min-h-screen bg-[#fffff0] text-[#472f5b] font-sans selection:bg-[#D8B36B]/30">
      <BeeCursor />`;
      
const replacement = `  return (
    <div className="flex flex-col min-h-screen bg-[#fffff0] text-[#472f5b] font-sans selection:bg-[#D8B36B]/30 relative">
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04] mix-blend-multiply" 
        style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\` }}
      ></div>
      <BeeCursor />`;

content = content.replace(target, replacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added noise texture to Layout.tsx');
