const fs = require('fs-extra');
const path = require('path');

function toRgb(color) {
  switch (typeof color) {
    case 'string':
      const hex = color.startsWith('#') ? color.slice(1) : color;
      if (hex.length !== 6) throw new Error("invalid color format.");
      
      const bigint = parseInt(hex, 16);
      if (isNaN(bigint)) throw new Error("invalid color format.");
      
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };

    case 'object':
      if (Array.isArray(color)) {
        if (color.length !== 3 || !color.every(c => Number.isInteger(c) && c >= 0 && c <= 255)) {
          throw new Error("invalid color format.");
        }
        return { r: color[0], g: color[1], b: color[2] };
      }
      
      if (
        color !== null &&
        Number.isInteger(color.r) && color.r >= 0 && color.r <= 255 &&
        Number.isInteger(color.g) && color.g >= 0 && color.g <= 255 &&
        Number.isInteger(color.b) && color.b >= 0 && color.b <= 255
      ) {
        return color;
      }
      
      throw new Error("invalid color format.");

    default:
      throw new Error("invalid color format.");
  }
}

function colorDistance(color1, color2) {
  return Math.sqrt(
    Math.pow(color1.r - color2.r, 2) +
    Math.pow(color1.g - color2.g, 2) +
    Math.pow(color1.b - color2.b, 2)
  );
}

function getClosestColor(color, language) {
  const filePath = path.join(__dirname, `./data/${language}.json`);
  const colors = fs.readJsonSync(filePath);
  const targetColor = toRgb(color);
  let closestColor = null;
  let minDistance = Infinity;

  for (const [colorHex, colorName] of Object.entries(colors)) {
    const currentColor = toRgb(colorHex);
    const distance = colorDistance(targetColor, currentColor);

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = colorName;
    }
  }

  return closestColor;
}

function name(color, language = 'en') {
  if (!color) throw new Error("invalid color format.");
  const langList = ['en', 'ja', 'cn'];
  if (!langList.includes(language)) throw new Error("invalid language.");
  return getClosestColor(color, language);
}

module.exports = name;
