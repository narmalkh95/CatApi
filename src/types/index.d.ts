declare module '*.svg';
declare module '*.png';

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
