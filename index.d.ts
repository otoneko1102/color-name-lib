declare module 'color-name-lib' {
  interface RGB {
    r: number;
    g: number;
    b: number;
  }

  function colorName(color: string | [number, number, number] | RGB, language?: 'en' | 'ja' | 'cn'): string;

  export default colorName;
}
