import { col, row } from "../utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {styles, tag} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}> `), styles);
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {styles, tag, alt} = this.options;
        return row(col(`<${tag} src="/${this.value}" alt="${alt}" />`), styles);
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {styles, tag} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), styles);
    }
}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {styles} = this.options;
        const html = this.value.map(el => col(`${el}`));
        return row(html.join(''), styles);
    }
}