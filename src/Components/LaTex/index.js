import { MathComponent } from 'mathjax-react';

export const TexInLine = (a) => (
  <MathComponent tex={String.raw`${a}`} display={false} />
);

export const TexBlock = (a) => (
  <MathComponent tex={String.raw`${a}`} display={true} />
);

export const vecto = (a) => (
  <MathComponent tex={String.raw`\overrightarrow{${a}}`} display={false} />
);
export const can = (a, b = '') => (
  <MathComponent tex={String.raw`${b}\sqrt{${a}}`} display={false} />
);
