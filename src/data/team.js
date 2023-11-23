
import { Grid, Navigation, Pagination } from 'swiper/modules';

import slide1 from '@/assets/images/team/photo-1.jpg';
import slide2 from '@/assets/images/team/photo-2.jpg';
import slide3 from '@/assets/images/team/photo-3.jpg';
import slide4 from '@/assets/images/team/photo-4.jpg';
import slide5 from '@/assets/images/team/photo-5.jpg';
import slide6 from '@/assets/images/team/photo-6.jpg';
import slide7 from '@/assets/images/team/photo-7.jpg';
import slide8 from '@/assets/images/team/photo-8.jpg';

export const DATA_TEAM = {
    modules: [Grid, Navigation, Pagination],
    view_items: 1,
    column_gap: 40,
    navigation: {
        prevEl: '.team_button-prev',
        nextEl: '.team_button-next',
    },
    pagination: {
        el: '.team_pagination',
        type: 'progressbar'
    },
    slides: [
        {
            image: slide1,
            name: 'Сергей Вячеславович',
            last_name: 'Ворончихин',
            work_position: 'Директор'
        },
        {
            image: slide2,
            name: 'Александра Константиновна',
            last_name: 'Ситникова',
            work_position: 'Офис-менеджер'
        },
        {
            image: slide3,
            name: 'Валерия Максимовна',
            last_name: 'Лазарева',
            work_position: 'Бухгалтер'
        },
        {
            image: slide4,
            name: 'Илья Семёнович',
            last_name: 'Наумов',
            work_position: 'Руководитель отдела продаж'
        },
        {
            image: slide5,
            name: 'Сергей Вячеславович',
            last_name: 'Ворончихин',
            work_position: 'Директор'
        },
        {
            image: slide6,
            name: 'Александра Константиновна',
            last_name: 'Ситникова',
            work_position: 'Офис-менеджер'
        },
        {
            image: slide7,
            name: 'Валерия Максимовна',
            last_name: 'Лазарева',
            work_position: 'Бухгалтер'
        },
        {
            image: slide8,
            name: 'Илья Семёнович',
            last_name: 'Наумов',
            work_position: 'Руководитель отдела продаж'
        }
    ],
    grid: {
        rows: 1,
        fill: 'row'
    },
    breakpoints: {
        '0': {
            slidesPerView: 1,
            spaceBetween: 24,
            grid: {
                rows: 1
            }
        },
        '750': {
            slidesPerView: 2,
            spaceBetween: 24,
            grid: {
                rows: 2
            }
        },
        '1000': {
            slidesPerView: 3,
            spaceBetween: 24,
            grid: {
                rows: 1
            }
        },
        '1440': {
            slidesPerView: 4,
            spaceBetween: 40,
            grid: {
                rows: 1
            }
        }
    }
};
