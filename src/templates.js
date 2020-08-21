import {
    row, col
} from "./utils";

export function title(block) {
   let {styles, tag} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}> `), styles);
}

export function text(block) {
    let {styles, tag} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

export function image(block) {
    let {styles, tag} = block.options;
    return row(col(`<${tag} src="/${block.value}" />`), styles);
}

export function textColumns(block) {
    let {styles, tag} = block.options;
    const html = block.value.map(el => col(`${el}`));
    return row(html.join(''), styles);
}

export const templates = {
    title,
    text,
    textColumns,
    image
}