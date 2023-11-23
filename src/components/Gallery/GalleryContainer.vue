<template>
    <div class="gallery">
        <div class="middle-wrap">
            <swiper
                    :modules="gallery.modules"
                    :slides-per-view="gallery.view_items"
                    :space-between="gallery.column_gap"
                    :pagination="gallery.pagination"
                    :navigation="gallery.navigation"
                    :breakpoints="gallery.breakpoints"
            >
                <swiper-slide v-for="(slide, index) in gallery.slides" :key="index">
                    <img :src="slide" class="gallery_slide-image" alt="" draggable="false" />
                </swiper-slide>
            </swiper>

            <div class="gallery_controls">
                <div class="gallery_pagination"></div>

                <div class="gallery_navigation">
                    <div class="gallery_button gallery_button-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 20L8 12L16 4" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div class="gallery_button gallery_button-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 20L16 12L8 4" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination } from 'swiper/modules';
    import 'swiper/scss';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';

    import slide1 from '@/assets/images/gallery/slide-1.jpg';
    import slide2 from '@/assets/images/gallery/slide-2.jpg';
    import slide3 from '@/assets/images/gallery/slide-3.jpg';
    import slide4 from '@/assets/images/gallery/slide-1.jpg';
    import slide5 from '@/assets/images/gallery/slide-2.jpg';
    import slide6 from '@/assets/images/gallery/slide-3.jpg';

    export default {
        name: 'GalleryContainer',

        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                gallery: {
                    modules: [Navigation, Pagination],
                    view_items: 1,
                    column_gap: 40,
                    navigation: {
                        prevEl: '.gallery_button-prev',
                        nextEl: '.gallery_button-next',
                    },
                    pagination: {
                        el: '.gallery_pagination',
                        type: 'progressbar'
                    },
                    slides: [slide1, slide2, slide3, slide4, slide5, slide6],
                    breakpoints: {
                        '0': {
                            slidesPerView: 1,
                            spaceBetween: 24,
                        },
                        '750': {
                            slidesPerView: 'auto',
                            spaceBetween: 40,
                        },
                        '1000': {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        '1440': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .gallery {
        &_slide {
            &-image {
                width: 100%;
                height: 396px;
                object-fit: cover;
                user-select: none;
            }
        }

        &_controls {
            display: grid;
            grid-template-columns: 1fr auto;
            column-gap: 64px;
            align-items: center;
            margin-top: 32px;
        }

        &_pagination {
            display: flex;
            background: #F2F2F2;
            height: 8px;
            position: relative;

            &.swiper-pagination-progressbar {
                position: relative;

                .swiper-pagination-progressbar-fill {
                    height: 8px;
                    background: #00A55A;
                }
            }

            &.swiper-pagination-progressbar.swiper-pagination-horizontal {
                height: 8px;
            }


        }

        &_navigation {
            display: flex;
            column-gap: 16px;
        }

        &_button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 56px;
            height: 56px;
            border: 1px solid transparent;
            user-select: none;
            cursor: pointer;
            transition: 0.2s;

            svg path {
                transition: 0.2s;
            }

            &:hover {
                border: 1px solid #00A55A;

                svg path {
                    stroke: #00A55A;
                }
            }
        }
    }

    @media screen and (min-width: 750px) {
        .gallery {
            .swiper-slide {
                width: 70%;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .gallery {
            &_slide {
                &-image {
                    height: 252px;
                }
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .gallery {
            .middle-wrap {
                padding: 0;
            }

            .swiper {
                padding: 0 36px;
            }

            &_controls {
                grid-template-columns: 1fr;
                padding: 0 36px;
            }

            &_navigation {
                display: none;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .gallery {
            .middle-wrap {
                padding: 0 12px;
            }

            .swiper {
                padding: 0;
            }

            &_controls {
                padding: 0;
            }
        }
    }
</style>
