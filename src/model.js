import img from './image/site.jpg';

export const model = [{
        type: 'title',
        value: 'Конструктор сайтов',
        options: {
            tag: 'h1',
            styles: 'background: darkblue;color: #fff;text-align:center;width: 100%;'
        }
    },
    {
        type: 'text',
        value: 'Приветсвем Вас на сайте "Конструктор сайтов". Мы поможем Вам сделать сайт мечты!',
        options: {
            styles: 'color:darkblue;margin:10px 5px;font-size:18px;text-align:center;',
            tag: 'p',
        }
    },
    {
        type: 'image',
        value: img,
        options: {
            styles: 'text-align:center;',
            tag: 'img',
        }
    },
    {
        type: 'textColumns',
        value: [
            'tata_98@ukr.net',
            '050 111 11 11',
            '512 222 22 22',
            'Киев',
        ],
        options: {
            styles: `padding: 1rem;text-align: center; font-size: 16px;background: darkblue;color: #fff;position: fixed;bottom: 0;width: 100%;
        `
        }
    },
];