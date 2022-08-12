<script setup lang="ts">
interface Props {
    variant?: string;
    weight?: string;
    padding?: string;
    maxWidth?: string;
    radius?: string;
}

const props = defineProps<Props>();

const variantClasses = computed(() => {
    switch (props.variant) {
        case "solid-white":
            return "button--solid-white";
        case "solid-blue":
            return "button--solid-blue";
        case "outline-blue":
            return "button--outline-blue";
    }
});

const weightClasses = computed(() => {
    switch (props.weight) {
        case "semibold":
            return "paragraph-semibold-body";
        default:
            return "paragraph-regular-body";
    }
});

const paddingClasses = computed(() => {
    switch (props.padding) {
        case "large":
            return "button--padding-large";
        default:
            return "button--padding-small";
    }
});

const radiusClasses = computed(() => {
    switch (props.radius) {
        case "small":
            return "button--radius-small";
        default:
            return "button--radius-large";
    }
});
</script>

<template>
    <button :class="['button', variantClasses, weightClasses, paddingClasses, radiusClasses]">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    max-width: v-bind(maxWidth);
}
</style>

