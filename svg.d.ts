declare module '*.svg?react' {
  import { FunctionComponent, SVGAttributes } from 'react';
  export const ReactComponent: FunctionComponent<SVGAttributes<SVGElement>>;
  const src: string;
  export default src;
}