<template>
    <div class="contacts">
        <div class="contacts_caption">
            Контакты
        </div>

        <div class="contacts_item contacts_item-phones has-button margin-lg">
            <div class="contacts_item-details">
                <div class="contacts_item-details_info">
                    <div class="contacts_item-title">
                        8-900-000-00-00
                    </div>

                    <div class="contacts_item-description">
                        Москва
                    </div>
                </div>

                <div class="contacts_item-details_info">
                    <div class="contacts_item-title">
                        8-900-000-00-00
                    </div>

                    <div class="contacts_item-description">
                        Россия
                    </div>
                </div>
            </div>

            <button class="contacts_item-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.1429 8H9.85714C8.83147 8 8 8.83147 8 9.85714V19.1429C8 20.1685 8.83147 21 9.85714 21H19.1429C20.1685 21 21 20.1685 21 19.1429V9.85714C21 8.83147 20.1685 8 19.1429 8Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.85714 16C3.83571 16 3 15.1643 3 14.1429V4.85714C3 3.83571 3.83571 3 4.85714 3H14.1429C15.1643 3 16 3.83571 16 4.85714" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div class="contacts_item has-button margin-lg">
            <div class="contacts_item-details">
                <div class="contacts_item-details_info">
                    <div class="contacts_item-title">
                        metall-market@mail.ru
                    </div>

                    <div class="contacts_item-description">
                        Ежедневно 9:00 — 18:00
                    </div>
                </div>
            </div>

            <button class="contacts_item-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.1429 8H9.85714C8.83147 8 8 8.83147 8 9.85714V19.1429C8 20.1685 8.83147 21 9.85714 21H19.1429C20.1685 21 21 20.1685 21 19.1429V9.85714C21 8.83147 20.1685 8 19.1429 8Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.85714 16C3.83571 16 3 15.1643 3 14.1429V4.85714C3 3.83571 3.83571 3 4.85714 3H14.1429C15.1643 3 16 3.83571 16 4.85714" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div class="contacts_item margin-lg">
            <div class="contacts_item-details">
                <div class="contacts_item-details_info">
                    <div class="contacts_item-title">
                        Адрес
                    </div>

                    <div class="contacts_item-description">
                        123456, г. Москва, ул. Ленина 3А, помещ. 2-7
                    </div>
                </div>
            </div>
        </div>

        <div class="contacts_item margin-lg">
            <div class="contacts_item-details">
                <div class="contacts_item-details_info">
                    <div class="contacts_item-title">
                        Время работы
                    </div>

                    <div class="contacts_item-description">
                        Ежедневно 9:00 — 18:00
                    </div>
                </div>
            </div>
        </div>

        <div class="contacts_controls">
            <form-button :icon="iconMapRoute" caption="Карта проезда" />

            <form-button :icon="iconCall" caption="Заказать звонок" :isActive="true" />
        </div>
    </div>
</template>

<script>
    import FormButton from '@/components/Form/Button'

    const ICON_MAP_ROUTE = require('@/assets/images/icons/map-route.svg');
    const ICON_CALL = require('@/assets/images/icons/call.svg');

    export default {
        name: 'ContactsContainer',

        components: {
            FormButton
        },

        data() {
            return {
                iconMapRoute: ICON_MAP_ROUTE,
                iconCall: ICON_CALL
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contacts {
        width: 554px;
        padding: 56px;
        background: #ffffff;
        position: relative;
        z-index: 2;

        &_caption {
            font-size: 32px;
            line-height: 40px;
            font-weight: 600;
        }

        &_item {
            $this: &;

            display: grid;
            grid-template-columns: 1fr;

            &.has-button {
                grid-template-columns: 1fr 56px;
            }

            &-details {
                display: flex;
                column-gap: 32px;

                &_info {
                    display: flex;
                    flex-direction: column;
                    row-gap: 8px;
                }
            }

            &-title {
                font-weight: 600;
            }

            &-description {
                color: #818181;
            }

            &-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 56px;
                height: 56px;
                background: #ffffff;
                border: 1px solid #D9D9D9;
                cursor: pointer;
                transition: 0.2s;

                svg path {
                    stroke: #818181;
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

        &_controls {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 24px;
            margin-top: 80px;
        }
    }

    @media screen and (max-width: 1350px) {
        .contacts {
            width: 100%;
            background: #FAFAFA;

            &_controls {
                margin-top: 58px;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .contacts {
            padding: 16px;

            &_caption {
                font-size: 20px;
                line-height: 28px;
            }

            &_item {
                align-items: center;

                &-phones {
                    align-items: flex-end;
                }

                &-details {
                    flex-direction: column;
                    row-gap: 16px;

                    &_info {
                        row-gap: 0;
                    }
                }
            }

            &_controls {
                grid-template-columns: 1fr;
                row-gap: 16px;
                margin-top: 32px;
            }
        }
    }
</style>
