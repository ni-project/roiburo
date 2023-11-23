<template>
    <div class="breadcrumbs">

        <template v-for="(item, index) in breadcrumbs" :key="index">

            <a :href="item.url" :class="['link', breadcrumbs.length - 1 === index ? 'breadcrumbs_current-page' : '']" @click="(e) => handleClickBreadcrumb(e, index === breadcrumbs.length - 1)">
                {{ item.caption }}
            </a>

            <span v-show="breadcrumbs.length - 1 !== index">—</span>

        </template>

    </div>
</template>

<script>
    export default {
        name: 'BreadcrumbsContainer',

        props: {
            page: {
                type: String
            }
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        caption: 'Главная',
                        url: '/'
                    },
                    {
                        caption: 'Контакты',
                        url: '/contacts'
                    },
                ]
            }
        },

        methods: {
            handleClickBreadcrumb(event, activeIndex) {
                if ( activeIndex ) {
                    event.preventDefault();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .breadcrumbs {
        display: flex;
        width: 100%;
        column-gap: 16px;

        &_current-page {
            color: #282828;
            cursor: default;
        }
    }
</style>
