import {
    row, col
} from "./utils";

export function title(block) {
    const {styles, tag} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}> `), styles);
}

export function text(block) {
    const {styles, tag} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

export function image(block) {
    const {styles, tag, alt} = block.options;
    return row(col(`<${tag} src="/${block.value}" alt="${alt}" />`), styles);
}

export function textColumns(block) {
    const {styles, tag} = block.options;
    const html = block.value.map(el => col(`${el}`));
    return row(html.join(''), styles);
}

export const templates = {
    title,
    text,
    textColumns,
    image
}