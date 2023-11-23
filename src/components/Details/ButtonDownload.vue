<template>
    <a href="/" class="button-download" download>
        <form-button :icon="iconDownload" />

        <div class="button-download_content">
            <div class="button-download_title">
                Скачать реквизиты
            </div>

            <div class="button-download_subtitle">
                Скачать pdf файл
            </div>
        </div>
    </a>
</template>

<script>
    import FormButton from '@/components/Form/Button'

    const ICON_DOWNLOAD = require('@/assets/images/icons/map-route.svg');

    export default {
        name: 'ButtonDownload',

        components: {
            FormButton
        },

        data() {
            return {
                iconDownload: ICON_DOWNLOAD,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-download {
        display: flex;
        column-gap: 24px;
        width: 100%;
        padding: 24px 32px 24px 24px;
        background: #FAFAFA;
        text-decoration: none;

        &_content {
            display: flex;
            flex-direction: column;
            row-gap: 4px;
        }

        &_title {
            font-size: 20px;
            line-height: 28px;
            color: #282828;
            font-weight: 600;
        }

        &_subtitle {
            color: #818181;
        }
    }
</style>
