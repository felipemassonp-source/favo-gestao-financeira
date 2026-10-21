const fs = require('fs');

let content = fs.readFileSync('./src/components/BeforeAfterReveal.tsx', 'utf8');

content = content.replace(
  'src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600"',
  'src="https://images.unsplash.com/photo-1580828369160-f1c990089a8a?auto=format&fit=crop&q=80&w=1600"'
);

content = content.replace(
  'alt="Caos financeiro e planilhas"',
  'alt="Empresário estressado com planilhas e boletos"'
);

content = content.replace(
  'src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"',
  'src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600"'
);

content = content.replace(
  'alt="Dashboard financeiro limpo"',
  'alt="Empresária tranquila focada no negócio"'
);

content = content.replace(
  'Arraste para o lado e veja a diferença entre tentar controlar tudo em planilhas manuais e ter a Favo organizando o seu negócio com dashboards visuais e limpos.',
  'Arraste para o lado e veja a diferença entre perder noites de sono organizando boletos e ter a Favo cuidando do seu caixa enquanto você foca em fazer o seu negócio crescer.'
);

fs.writeFileSync('./src/components/BeforeAfterReveal.tsx', content, 'utf8');
