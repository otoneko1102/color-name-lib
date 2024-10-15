# color-name-lib
Search for names of colors close to that color.

## Usage
### colorName(color, language)
color: hex (ex: '#FFFFFF'|'FFFFFF')|rgb (ex: [255, 255, 255]|{ r: 255, g: 255, b: 255 })<br>
language?: string ('en'|'ja'|'cn', default: 'en')
```js
const colorName = require('color-name-lib');

console.log(colorName('#FFFFFF')); // 'white'
console.log(colorName('#FFFFFF', 'en')); // 'white'
console.log(colorName('#FFFFFF', 'ja')); // '白'
console.log(colorName('#FFFFFF', 'cn')); // '白'
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>
