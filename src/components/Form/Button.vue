<template>
    <button :class="['form-button', isActive ? 'active' : '']">
        <img :src="icon" v-if="icon" alt="" draggable="false" />

        <span v-if="caption">{{ caption }}</span>
    </button>
</template>

<script>
    export default {
        name: 'FormButton',

        props: {
            icon: {
                type: String
            },

            caption: {
                type: String
            },

            isActive: {
                type: Boolean
            }
        }
    }
</script>

<style lang="scss">
    .form-button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 56px;
        height: 56px;
        column-gap: 12px;
        background: rgba(229, 246, 238, 1);
        border: 0;
        cursor: pointer;

        span {
            color: #00A55A;
            font-weight: 500;
        }

        &.active {
            background: #00A55A;

            span {
                color: #ffffff;
            }
        }
    }
</style>
