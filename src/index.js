import {
    model
} from './model.js';
import {
    templates
} from './templates.js';
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach(block => {
    const generate = templates[block.type];
    if (generate) {
        const html = generate(block);
        document.querySelector('#site').insertAdjacentHTML('beforeend', html);
    }
});