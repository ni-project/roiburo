<template>
    <div class="middle-wrap">
        <bread-crumbs-container page="contacts" />

        <h1 class="margin-md">Контакты</h1>

        <div class="map_container">
            <div class="map_wrapper">
                <YandexMap
                        class="map"
                        :coordinates="map.coords"
                        :behaviors="map.behaviors"
                        :controls="map.controls"
                        :zoom="map.zoom"
                >
                    <YandexMarker
                            v-for="(marker, index) in map.markers"
                            :key="index"
                            :markerId="index"
                            :coordinates="marker.coords"
                            :options="marker.options"
                    />
                </YandexMap>
            </div>

            <company-message-container />

            <contacts-container />
        </div>
    </div>
</template>

<script>
    import BreadCrumbsContainer from '@/components/Breadcrumbs/BreadcrumbsContainer'
    import CompanyMessageContainer from '@/components/Map/ComanyMessageContainer'
    import ContactsContainer from '@/components/Map/ContactsContainer'
    import { YandexMap, YandexMarker } from 'vue-yandex-maps'
    import {DATA_MAP} from '@/data/map'

    export default {
        name: 'MapContainer',

        components: {
            BreadCrumbsContainer,
            CompanyMessageContainer,
            ContactsContainer,
            YandexMap,
            YandexMarker
        },

        data() {
            return {
                map: DATA_MAP
            }
        }
    }
</script>

<style lang="scss" scoped>
    .map {
        width: 100%;
        height: 100%;

        &_container {
            width: 100%;
            margin-top: 56px;
            padding: 56px;
            position: relative;
        }

        &_wrapper {
            width: 100%;
            height: 100%;
            background: #ffffff;
            overflow: hidden;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }
    }

    @media screen and (max-width: 1350px) {
        .map {
            &_container {
                display: flex;
                flex-direction: column;
                row-gap: 32px;
                margin-top: 40px;
                padding: 0;
            }

            &_wrapper {
                height: 400px;
                position: relative;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .map {
            &_container {
                margin-top: 32px;
                row-gap: 24px;
            }

            &_wrapper {
                height: 280px;
            }
        }
    }
</style>
