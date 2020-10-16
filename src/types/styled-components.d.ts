import { CSSProp } from 'styled-components';

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSProp;
        height?: import('react').DetailedHTMLProps;
        source?: import('react').DetailedHTMLProps;
        alt?: import('react').DetailedHTMLProps;
    }
}
