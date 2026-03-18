import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

async function checkSEO() {
  const files = [];
  
  function getAstroFiles(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getAstroFiles(filePath);
      } else if (filePath.endsWith('.astro') && !file.startsWith('[')) {
        files.push(filePath);
      }
    }
  }

  getAstroFiles(pagesDir);
  
  let out = '';
  let mismatches = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Extract title and description from <Layout title="..." description="...">
    const titleMatch = content.match(/title\s*=\s*["']([^"']+)["']/);
    const descMatch = content.match(/description\s*=\s*["']([^"']+)["']/);
    
    if (titleMatch || descMatch) {
      const localTitle = titleMatch ? titleMatch[1] : null;
      const localDesc = descMatch ? descMatch[1] : null;
      
      let relativePath = file.replace(pagesDir, '').replace(/\\/g, '/').replace('.astro', '');
      if (relativePath === '/index') relativePath = '/';
      
      const liveUrl = `https://nialabs.in${relativePath}`;
      
      try {
        const response = await fetch(liveUrl);
        if (!response.ok) continue;
        const html = await response.text();
        const $ = cheerio.load(html);
        
        const liveTitle = $('title').text();
        const liveDesc = $('meta[name="description"]').attr('content');
        
        let fileHasMismatch = false;
        
        if (localTitle && liveTitle && localTitle !== liveTitle) {
          out += `\n❌ Title Mismatch in ${relativePath}\n`;
          out += `  Local: ${localTitle}\n`;
          out += `  Live : ${liveTitle}\n`;
          fileHasMismatch = true;
        }
        
        if (localDesc && liveDesc && localDesc !== liveDesc) {
          out += `\n❌ Description Mismatch in ${relativePath}\n`;
          out += `  Local: ${localDesc}\n`;
          out += `  Live : ${liveDesc}\n`;
          fileHasMismatch = true;
        }
        
        if (fileHasMismatch) mismatches++;
      } catch (e) { }
    }
  }
  
  out += `\nTotal pages with mismatches: ${mismatches}\n`;
  fs.writeFileSync('seo-mismatch.txt', out);
}

checkSEO();
