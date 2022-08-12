<script setup lang="ts">
const allFilters = ref([
    { slug: "all", title: "😎 All" },
    { slug: "music", title: "🎷 Music" },
    { slug: "art", title: "🎨 Art" },
    { slug: "sports", title: "🎳 Sports" },
    { slug: "virtual", title: "🤖 Virtual" },
    { slug: "videos", title: "📹 Videos" },
]);
const selectedFilter = ref("all");

const selectAFilter = (filter: string) => {
    selectedFilter.value = filter;
};
</script>

<template>
    <ul class="filters flex items-center">
        <li v-for="filter in allFilters" class="filters__item text-white">
            <base-button :variant="selectedFilter === filter.slug ? 'solid-blue' : 'outline-blue'" radius="small" @click="selectAFilter(filter.slug)">{{ filter.title }}</base-button>
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

