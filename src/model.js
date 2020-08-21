import img from './image/site.jpg';
import {
    TitleBlock, TextBlock, TextColumnsBlock, ImageBlock
} from './classess/block'

export const model = [
    new TitleBlock('Конструктор сайтов', {
        tag: 'h1',
        styles: 'background: darkblue;color: #fff;text-align:center;'
    }),
    new TextBlock('Приветсвем Вас на сайте "Конструктор сайтов". Мы поможем Вам сделать сайт мечты!', {
        styles: 'color:darkblue;margin:10px 5px;font-size:18px;text-align:center;',
        tag: 'p',
    }),
    new ImageBlock(img, {
        styles: 'text-align:center;',
        tag: 'img'
    }),
    new TextColumnsBlock([
        'tata_98@ukr.net',
        '050 111 11 11',
        '512 222 22 22',
        'Киев',
    ], {
        styles: `padding: 1rem;text-align: center; font-size: 16px;background: darkblue;color: #fff;position: fixed;bottom: 0;width: 100%;`
    }),
];