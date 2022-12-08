<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";

interface Product {
    image: string;
    name: string;
    slug: string;
    currentBid: number;
    username: string;
    isLive: boolean;
    dueDate: string;
    isHot: boolean;
    user: string;
    category: string;
}

const ProductStore = useProductStore();

const selectedCategory = ref("all");

const filterByCategory = (products: Product[]): Product[] => {
    if (selectedCategory.value !== "all") return products.filter((product) => product.category === selectedCategory.value);
    return products;
};

const changeCategory = (category: string) => {
    selectedCategory.value = category;
};

const filteredProducts = computed(() => {
    return filterByCategory(ProductStore.hotNFTs);
});
</script>

<template>
    <section class="hot-nfts">
        <div class="container">
            <div class="hot-nfts__heading">
                <h3 class="heading-3-bold hot-nfts__title text-white text-center">Hot NFTs</h3>
                <NFTsFilter :selected-category="selectedCategory" @change-category="changeCategory" />
            </div>
            <NFTList>
                <NFTListItem v-for="product in filteredProducts" :key="product.image" :product="product" />
            </NFTList>
            <div class="hot-nfts__view-more text-center">
                <nuxt-link :to="{ name: 'discover' }" class="button button--view-more button--outline-blue paragraph-semibold-body text-center block mx-auto">View more</nuxt-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.hot-nfts {
    padding: 0 2rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    &__title,
    &__heading {
        margin-bottom: 5.6rem;
    }

    &__view-more {
        margin-top: 5.6rem;
    }
}
</style>

