<script setup lang="ts">
interface Props {
    id: string;
    placeholder?: string;
    modelValue: string;
    label?: string;
}

interface Emits {
    (e: "update:modelValue", value: string): void;
}

defineProps<Props>();

defineEmits<Emits>();
</script>

<template>
    <div class="input">
        <label v-if="!!label" :for="id"> {{ label }}</label>
        <input type="text" :name="id" :id="id" class="input__field heading-5-medium" :placeholder="placeholder" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<style lang="scss">
.input {
    width: 100%;

    &__field {
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid var(--gray-100);
        border-radius: 1.6rem;
        padding: 2rem 1.6rem;
        color: var(--gray-600);

        &:focus {
            outline: none;
        }
    }
}
</style>

