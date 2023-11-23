<template>
    <div class="map_company-message_wrapper">
        <img :src="iconInfo" alt="" draggable="false" />

        <div class="map_company-message">
            Вход в офис находится на углу здания со стороны Ленинградского проспекта на пересечении с ул. Балтийская.
        </div>
    </div>
</template>

<script>
    const ICON_INFO = require('@/assets/images/icons/info.svg');

    export default {
        name: 'CompanyMessageContainer',

        data() {
            return {
                iconInfo: ICON_INFO
            }
        }
    }
</script>

<style lang="scss" scoped>
    .map_company-message {
        font-size: 14px;
        line-height: 20px;
        color: #818181;

        &_wrapper {
            display: grid;
            grid-template-columns: 24px 1fr;
            column-gap: 16px;
            width: 100%;
            max-width: 644px;
            padding: 32px;
            background: #ffffff;
            transition: 0.3s;
            position: absolute;
            top: 56px;
            right: 56px;
            z-index: 2;
        }
    }

    @media screen and (max-width: 1780px) {
        .map_company-message {
            &_wrapper {
                max-width: 510px;
            }
        }
    }

    @media screen and (max-width: 1350px) {
        .map_company-message {
            &_wrapper {
                max-width: 100%;
                background: #FAFAFA;
                position: relative;
                top: 0;
                right: 0;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .map_company-message {
            &_wrapper {
                padding: 24px;
            }
        }
    }
</style>
