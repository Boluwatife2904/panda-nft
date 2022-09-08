<script setup lang="ts">
interface Props {
    selectedTab: string;
}

defineProps<Props>();
const emit = defineEmits<{
    (e: "change-selected-tab", tab: string): void;
}>();

const buttonOptions = [
    { title: "Description", slug: "description" },
    { title: "Offers", slug: "offers" },
    { title: "Price History", slug: "price-history" },
];

const changeSelectedTab = (tab: string) => {
    emit("change-selected-tab", tab);
};
</script>

<template>
    <ul class="product-tab">
        <li v-for="option in buttonOptions" :key="option.slug" class="product-tab__option">
            <base-button :variant="selectedTab === option.slug ? 'solid-blue' : 'transparent'" :weight="selectedTab === option.slug ? 'bold' : 'medium'" padding="large" radius="small" max-width="175px" @click="changeSelectedTab(option.slug)">
                {{ option.title }}
            </base-button>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.product-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    width: 100%;
    gap: 4rem;
    margin-bottom: 4rem;

    &::-webkit-scrollbar {
        display: none;
    }

    &__option {
        flex: 1;
        min-width: 17.5rem;
    }
}
</style>

