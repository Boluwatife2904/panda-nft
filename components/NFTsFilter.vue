<script setup lang="ts">
interface Props {
    selectedCategory: string;
}

const allFilters = ref([
    { slug: "all", title: "😎 All" },
    { slug: "music", title: "🎷 Music" },
    { slug: "art", title: "🎨 Art" },
    { slug: "sports", title: "🎳 Sports" },
    { slug: "virtual", title: "🤖 Virtual" },
    { slug: "videos", title: "📹 Videos" },
]);

defineProps<Props>();

const emit = defineEmits<{
    (e: "change-category", category: string): void;
}>();

const selectAFilter = (filter: string) => {
    emit("change-category", filter);
};
</script>

<template>
    <ul class="filters flex items-center">
        <li v-for="filter in allFilters" class="filters__item text-white">
            <base-button :variant="selectedCategory === filter.slug ? 'solid-blue' : 'outline-blue'" radius="small" @click="selectAFilter(filter.slug)">{{ filter.title }}</base-button>
        </li>
    </ul>
</template>

<style lang="scss">
.filters {
    margin: 0 auto;
    gap: 2.4rem;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    justify-content: start;

    @media screen and (min-width: 910px) {
        justify-content: center;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &__item {
        min-width: 12rem;
    }
}
</style>

