/// <reference types="vite/client" />

declare module 'mjml-browser' {
  const transform: (
    vml: string,
    options?: {
      beautify?: boolean;
      minify?: boolean;
      keepComments?: boolean;
      validationLevel: 'strict' | 'soft' | 'skip';
    }
  ) => {
    json: MjmlBlockItem;
    html: string;
    errors: string[];
  };
  export default transform;
}
