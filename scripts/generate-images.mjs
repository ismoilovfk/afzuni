// Import necessary modules
import fs from 'fs';
import path from 'path';

// Define the output directory and file
const outputDir = path.join(process.cwd(), 'images/generated');
const outputFile = path.join(outputDir, 'hero.svg');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate a simple SVG content for the hero background
const svgContent = `
&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"&gt;
  &lt;defs&gt;
    &lt;radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"&gt;
      &lt;stop offset="0%" style="stop-color:rgba(37,99,235,0.2);stop-opacity:1" /&gt;
      &lt;stop offset="100%" style="stop-color:rgba(37,99,235,0);stop-opacity:0" /&gt;
    &lt;/radialGradient&gt;
    &lt;radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"&gt;
      &lt;stop offset="0%" style="stop-color:rgba(34,211,238,0.2);stop-opacity:1" /&gt;
      &lt;stop offset="100%" style="stop-color:rgba(34,211,238,0);stop-opacity:0" /&gt;
    &lt;/radialGradient&gt;
  &lt;/defs&gt;
  &lt;rect width="1200" height="800" fill="url(#grad1)" /&gt;
  &lt;rect x="200" y="100" width="800" height="600" fill="url(#grad2)" /&gt;
&lt;/svg&gt;
`;

// Write the SVG to the file
fs.writeFileSync(outputFile, svgContent.trim());

console.log(`Generated hero.svg at ${outputFile}`); 