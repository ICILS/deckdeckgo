/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoGif {
        "alt": string;
        "fullscreen": boolean;
        "lazyLoadContent": () => Promise<void>;
        "src": string;
    }
    interface DeckgoSlideGif {
        "afterSwipe": () => Promise<void>;
        "alt": string;
        "beforeSwipe": (_enter: boolean, _reveal: boolean) => Promise<boolean>;
        "customActions": boolean;
        "customBackground": boolean;
        "fullscreen": boolean;
        "hideContent": () => Promise<void>;
        "lazyLoadContent": () => Promise<void>;
        "revealContent": () => Promise<void>;
        "src": string;
    }
}
declare global {
    interface HTMLDeckgoGifElement extends Components.DeckgoGif, HTMLStencilElement {
    }
    var HTMLDeckgoGifElement: {
        prototype: HTMLDeckgoGifElement;
        new (): HTMLDeckgoGifElement;
    };
    interface HTMLDeckgoSlideGifElement extends Components.DeckgoSlideGif, HTMLStencilElement {
    }
    var HTMLDeckgoSlideGifElement: {
        prototype: HTMLDeckgoSlideGifElement;
        new (): HTMLDeckgoSlideGifElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-gif": HTMLDeckgoGifElement;
        "deckgo-slide-gif": HTMLDeckgoSlideGifElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoGif {
        "alt"?: string;
        "fullscreen"?: boolean;
        "onGifLoaded"?: (event: CustomEvent<boolean>) => void;
        "src"?: string;
    }
    interface DeckgoSlideGif {
        "alt"?: string;
        "customActions"?: boolean;
        "customBackground"?: boolean;
        "fullscreen"?: boolean;
        "onSlideDidLoad"?: (event: CustomEvent<void>) => void;
        "src"?: string;
    }
    interface IntrinsicElements {
        "deckgo-gif": DeckgoGif;
        "deckgo-slide-gif": DeckgoSlideGif;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-gif": LocalJSX.DeckgoGif & JSXBase.HTMLAttributes<HTMLDeckgoGifElement>;
            "deckgo-slide-gif": LocalJSX.DeckgoSlideGif & JSXBase.HTMLAttributes<HTMLDeckgoSlideGifElement>;
        }
    }
}
