const fs = require('fs');
const d = new Date();
const menu = { date: d.toLocaleString(), menu: { random: Math.random(), menu: 'things' } } 

fs.writeFileSync('menu.json', JSON.stringify(menu, null, 4));
return { props: {menu: menu}};
