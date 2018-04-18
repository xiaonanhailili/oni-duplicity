
import { Element } from "./interfaces";
import { ELEMENTS } from "./elements";

export function getElement(str: string): Element | null {
    return ELEMENTS.find(x => x.name === str) || null;
}
