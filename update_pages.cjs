const fs = require('fs');
const path = require('path');

const titles = {
  'Home.jsx': 'Drew\'s Berries - Fresh Farm Produce in Grants Pass, Oregon',
  'About.jsx': 'About Us - Drew\'s Berries in Grants Pass, Oregon',
  'Cabins.jsx': 'Farm Cabins - Stay at Drew\'s Berries, Grants Pass',
  'Contact.jsx': 'Contact Us - Drew\'s Berries Farm',
  'Harvest.jsx': 'This Week\'s Harvest - Fresh Farm Produce in Grants Pass, Oregon',
  'Membership.jsx': 'Farm Membership - Join Drew\'s Berries Association',
  'Offerings.jsx': 'Farm Offerings - Drew\'s Berries Private Harvest',
  'Wholesale.jsx': 'Wholesale & Restaurant Produce - Grants Pass, Oregon'
};

const dir = 'c:/Users/prern/Documents/GitHub/Drew-Berries-/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const title = titles[file];
  
  if (!title) return;
  
  if (!content.includes('useEffect(() => { document.title')) {
    // 1. Add useEffect to import if not present
    if (!content.includes('useEffect')) {
      content = content.replace(/import React(?:,\s*\{([^}]*)\})?\s*from\s*["']react["'];?/, (match, p1) => {
        if (p1) {
          return `import React, { ${p1.trim()}, useEffect } from "react";`;
        } else {
          return `import React, { useEffect } from "react";`;
        }
      });
    }

    // 2. Insert useEffect hook inside the component
    const componentRegex = /(const \w+\s*=\s*(?:\([^)]*\))?\s*=>\s*\{|function \w+\s*\([^)]*\)\s*\{)/;
    content = content.replace(componentRegex, (match) => {
      return `${match}\n  useEffect(() => {\n    document.title = "${title}";\n  }, []);\n`;
    });

    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  } else {
    console.log('Already has title: ' + file);
  }
});
