<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";
const ProductStore = useProductStore();

const searchTerm = ref("");

const selectedCategory = ref("all");
const changeCategory = (category: string) => {
    selectedCategory.value = category;
};
const categoryOptions = [
    { key: "all", value: "All" },
    { key: "music", value: "Music" },
    { key: "art", value: "Art" },
    { key: "sports", value: "Sports" },
    { key: "virtual", value: "Virtual" },
    { key: "videos", value: "Videos" },
];

const selectedSorting = ref<"name" | "dueDate" | "currentBid">("name");
const sortOptions = [
    { key: "name", value: "Name" },
    { key: "currentBid", value: "Current Bid" },
];

const filteredProducts = computed(() => {
    let products = ProductStore.filteredProducts(selectedCategory.value);
    if (searchTerm.value) {
        products = [...products].filter((product) => product.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    if (selectedSorting.value) {
        products = [...products].sort((a, b) => {
            return a[selectedSorting.value] > b[selectedSorting.value] ? 1 : -1;
        });
    }
    return products;
});
</script>

<template>
    <section class="discover">
        <div class="container">
            <div class="discover__hero mx-auto text-center">
                <h3 class="heading-3-bold discover__title text-white">Explore Collectibles</h3>
                <div class="discover__search relative">
                    <BaseInput v-model="searchTerm" id="search__input" placeholder="Type your keywords..." />
                    <span class="discover__search-icon absolute flex items-center content-center">
                        <IconsSearch />
                    </span>
                </div>
            </div>
            <div class="discover__filter flex space-between items-center">
                <span class="select">
                    <BaseSelect id="sort__select" v-model="selectedSorting" :options="sortOptions" />
                </span>
                <span class="select hide-on-desktop">
                    <BaseSelect id="filter__select" v-model="selectedCategory" :options="categoryOptions" placeholder="Filter By" />
                </span>
                <span class="hide-on-mobile">
                    <NFTsFilter :selected-category="selectedCategory" @change-category="changeCategory" />
                </span>
            </div>
            <div v-if="filteredProducts && filteredProducts.length > 0" class="discover__products">
                <NFTList>
                    <NFTListItem v-for="product in filteredProducts" :key="product.image" :product="product" />
                </NFTList>
            </div>
            <LazyEmptyList v-else />
        </div>
    </section>
</template>

<style lang="scss">
.discover {
    padding: 0rem 2rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    &__hero {
        max-width: 79.9rem;
        margin-bottom: 5.6rem;
    }

    &__search {
        &-icon {
            height: 4rem;
            width: 4rem;
            top: 1.6rem;
            right: 1.6rem;
            background-color: var(--primary-color);
            border-radius: 50%;
        }
    }

    &__title {
        margin-bottom: 5.6rem;
    }

    &__filter {
        gap: 2.4rem;
        margin-bottom: 5.6rem;
    }
}

.select {
    display: block;

    @media screen and (min-width: 1100px) {
        max-width: 17.5rem;
    }
}

.hide-on-desktop {
    display: block;

    @media screen and (min-width: 1100px) {
        display: none;
    }
}

.hide-on-mobile {
    display: none;

    @media screen and (min-width: 1100px) {
        display: block;
    }
}
</style>

