<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";

const ProductStore = useProductStore();
</script>

<template>
    <section class="hot-nfts">
        <div class="container">
            <div class="hot-nfts__heading">
                <h3 class="heading-3-bold hot-nfts__title text-white text-center">Hot NFTs</h3>
                <NFTsFilter />
            </div>
            <NFTList>
                <NFTListItem v-for="product in ProductStore.hotNFTs" :key="product.image" :product="product" />
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

