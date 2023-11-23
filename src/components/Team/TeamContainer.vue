<template>
    <div class="team">
        <div class="middle-wrap">
            <div class="team_title">
                <h2>Наша команда</h2>

                <div class="team_navigation">
                    <div class="team_button team_button-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 20L8 12L16 4" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div class="team_button team_button-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 20L16 12L8 4" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="team_description">
                <p>Металл-Маркет — это команда профессионалов, влюбленных в свое дело.</p>
                <p>Уверены, что развитие компании начинается с развития ее сотрудников</p>
            </div>

            <div class="team_slider">
                <swiper
                        :modules="team.modules"
                        :slides-per-view="team.view_items"
                        :space-between="team.column_gap"
                        :pagination="team.pagination"
                        :navigation="team.navigation"
                        :grid="team.grid"
                        :breakpoints="team.breakpoints"
                >
                    <swiper-slide v-for="(slide, index) in team.slides" :key="index">
                        <div class="team_slider-slide">
                            <img :src="slide.image" class="team_slide-image" alt="" draggable="false" />

                            <div class="team_slide-nameplate">
                                <div class="team_slide-nameplate_title">
                                    {{ slide.last_name }}<br />{{ slide.name }}
                                </div>

                                <div class="team_slide-nameplate_work-position">
                                    {{ slide.work_position }}
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <div class="team_controls">
                    <div class="team_pagination"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {DATA_TEAM} from "@/data/team";

    import 'swiper/css';
    import 'swiper/css/grid';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    export default {
        name: 'TeamContainer',

        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                team: DATA_TEAM
            }
        }
    }
</script>

<style lang="scss">
    .team {
        &_title {
            display: grid;
            grid-template-columns: 1fr auto;
            column-gap: 32px;
        }

        &_description {
            width: 100%;
            margin-top: 32px;

            p {
                margin: 0;
                font-size: 18px;
                line-height: 28px;
            }
        }

        &_slider {
            width: 100%;
            margin-top: 40px;
        }

        &_slide {
            &-image {
                width: 100%;
                user-select: none;
            }

            &-nameplate {
                display: flex;
                flex-direction: column;
                row-gap: 8px;
                padding: 24px 32px;
                border: 1px solid #D9D9D9;
                border-top: 0;

                &_title {
                    font-weight: 600;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                &_work-position {
                    font-size: 14px;
                    line-height: 20px;
                    color: #818181;
                }
            }
        }

        &_controls {
            display: none;
            margin-top: 32px;
        }

        &_pagination {
            display: flex;
            background: #F2F2F2;
            height: 8px;
            position: relative;

            &.swiper-pagination-progressbar.swiper-pagination-horizontal {
                height: 8px;
            }

            .swiper-pagination-progressbar-fill {
                height: 8px;
                background: #00A55A;
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

    @media screen and (max-width: 1440px) {
        .team {
            .middle-wrap {
                padding: 0;
            }

            &_title, &_description, .swiper {
                padding: 0 72px;
            }
        }
    }

    @media screen and (max-width: 1350px) {
        .team {
            &_title, &_description, .swiper {
                padding: 0 36px;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .team {
            .middle-wrap {
                padding: 0 36px;
            }

            &_title {
                grid-template-columns: 1fr;
                padding: 0;
            }

            &_description {
                padding: 0;
            }

            .swiper {
                padding: 0;
            }

            &_controls {
                display: block;
            }

            &_navigation {
                display: none;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .team {
            .middle-wrap {
                padding: 0 12px;
            }

            &_description {
                margin-top: 20px;
            }

            &_slider {
                margin-top: 32px;
            }

            &_controls {
                margin-top: 24px;
            }
        }
    }
</style>
