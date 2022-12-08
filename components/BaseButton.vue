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
        case "transparent":
            return "button--transparent";
    }
});

const weightClasses = computed(() => {
    switch (props.weight) {
        case "bold":
            return "heading-6-bold";
        case "semibold":
            return "paragraph-semibold-body";
        case "medium":
            return "heading-6-medium";
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
    <button name="button" :class="['button', variantClasses, weightClasses, paddingClasses, radiusClasses]">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    max-width: v-bind(maxWidth);
}
</style>

