import {
    model
} from './model.js';
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach(block => {
    document.querySelector('#site').insertAdjacentHTML('beforeend', block.toHTML());
});