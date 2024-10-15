declare module 'color-name-lib' {
  interface RGB {
    r: number;
    g: number;
    b: number;
  }

  function colorName(color: string, language?: 'en' | 'ja' | 'cn'): string;
  function colorName(color: [number, number, number], language?: 'en' | 'ja' | 'cn'): string;
  function colorName(color: RGB, language?: 'en' | 'ja' | 'cn'): string;

  export default colorName;
}
