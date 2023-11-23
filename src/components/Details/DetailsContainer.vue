<template>
    <div class="middle-wrap">

        <div class="details">
            <div class="details_cell">
                <h2>Реквизиты</h2>

                <p>
                    Металл-Маркет — компания, которая dolor sit amet consectetur. Ac sem nisi nullam mi odio. Justo eu egestas arcu rhoncus et. Eleifend morbi sit proin sed proin. Mattis purus sit malesuada in praesent ac nisi convallis. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div class="details_cell">
                <table>
                    <tbody>
                    <tr v-for="(item, index) in details" :key="index">
                        <td>{{ item.title }}</td>

                        <td>{{ item.description }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="details_cell">

                <button-download />

            </div>
        </div>

    </div>
</template>

<script>
    import ButtonDownload from '@/components/Details/ButtonDownload'
    import {DATA_DETAILS} from "@/data/details";

    export default {
        name: 'DetailsContainer',

        components: {
            ButtonDownload
        },

        data() {
            return {
                details: DATA_DETAILS
            }
        }
    }
</script>

<style lang="scss" scoped>
    .details {
        display: grid;
        grid-template-columns: 1fr 444px;
        grid-template-rows: repeat(2, auto);
        column-gap: 148px;
        row-gap: 56px;
        width: 100%;

        &_cell {
            &:nth-child(1) {
                display: flex;
                flex-direction: column;
                row-gap: 32px;
            }

            &:nth-child(3) {
                grid-row: 1 / 3;
                grid-column: 2
            }

            p {
                display: flex;
                margin: 0
            }

            table {
                width: 100%;
                border-spacing: 0;
                border-collapse: collapse;

                tr td {
                    padding: 16px 32px;
                    border: 1px solid #D9D9D9;

                    &:first-child {
                        width: 404px;
                        font-weight: 600;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1440px) {
        .details {
            &_cell {
                &:nth-child(2) {
                    grid-column: span 2;
                }

                &:nth-child(3) {
                    grid-row: 1 / 2;
                }
            }
        }
    }

    @media screen and (max-width: 1150px) {
        .details {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
            row-gap: 0;
            column-gap: 0;

            &_cell {
                &:nth-child(1) {
                    grid-column: 1 / 3;
                }

                &:nth-child(2) {
                    margin-top: 56px;
                }

                &:nth-child(3) {
                    grid-row: 3;
                    grid-column: 1 / 3;
                    margin-top: 40px;
                }
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .details {
            &_cell {
                table {
                    tr td {
                        &:first-child {
                            width: 260px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 750px) {
        .details {
            &_cell {
                &:nth-child(1) {
                    row-gap: 20px;
                }

                &:nth-child(2) {
                    margin-top: 16px;
                }

                table {
                    tr {
                        border-bottom: 1px solid #D9D9D9;
                    }

                    tr td {
                        vertical-align: top;
                        padding: 16px 0;
                        font-size: 14px;
                        line-height: 20px;
                        font-weight: 500;
                        border: 0;

                        &:first-child {
                            width: 162px;
                            padding-right: 20px;
                        }
                    }
                }
            }
        }
    }
</style>
