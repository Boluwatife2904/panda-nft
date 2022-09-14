<script setup lang="ts">
interface Option {
    name: string;
    icon: string;
    slug: string;
}

interface Props {
    option: Option;
    selected: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "pick-option", value: string): void;
}>();

const chooseOption = () => {
    emit("pick-option", props.option.slug);
};
</script>

<template>
    <li class="option-selector flex items-center content-center" :class="{ 'is-active': selected }" @click="chooseOption">
        <span class="option-selector__icon">
            <img :src="`/images/wallet/${option.icon}.png`" alt="" />
        </span>
        <p class="paragraph-regular-body">{{ option.name }}</p>
    </li>
</template>

<style lang="scss">
.option-selector {
    padding: 1.6rem 2.4rem;
    border: 1px solid var(--gray-500);
    flex-direction: row;
    border-radius: 0.8rem;
    cursor: pointer;
    gap: 1rem;
    opacity: 0.8;
    transition: all .2s linear;

    &:hover,
    &.is-active {
        border-color: var(--primary-color);
        opacity: 1;
    }

    @media screen and (min-width: 600px) {
        flex-direction: column;
        padding: 1.6rem 2.4rem;
    }

    &__icon {
        height: 2.4rem;
        width: 2.4rem;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>

