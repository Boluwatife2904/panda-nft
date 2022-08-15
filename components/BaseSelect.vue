<script setup lang="ts">
interface Props {
    id: string;
    placeholder?: string;
}

defineProps<Props>();
</script>

<template>
    <div class="select">
        <select :name="id" :id="id" class="select__field heading-6-medium text-white">
            <option v-if="!!placeholder" value="" selected>{{ placeholder }}</option>
        </select>
    </div>
</template>

<style lang="scss">
.select {
    width: 100%;

    &__field {
        background: rgba(30, 80, 255, 0.1);
        border: 1px solid var(--primary-color);
        border-radius: 8px;
        cursor: pointer;
        padding: 1.6rem 4.8rem 1.6rem 1.6rem;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        // max-width: 17.5rem;

        // New Icon
        background: transparent;
        background-image: url("@/assets/images/arrow-down.svg");
        background-repeat: no-repeat;
        background-position-x: calc(100% - 1.6rem);
        background-position-y: 1.6rem;
    }
}
</style>

