<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";

const ProductStore = useProductStore();
</script>

<template>
    <section class="live-auctions relative">
        <div class="container">
            <div class="live-auctions__heading flex items-center space-between">
                <h3 class="heading-3-bold live-auctions__title text-white">Live Auctions</h3>
                <nuxt-link :to="{ name: 'discover' }" class="live-auctions__view-more button button--view-more button--outline-blue paragraph-semibold-body text-center">Get Started</nuxt-link>
            </div>
            <NFTList>
                <NFTListItem v-for="product in ProductStore.liveAuctions" :key="product.image" :product="product" />
            </NFTList>
        </div>
        <div class="ornament ornament--auctions"></div>
    </section>
</template>

<style lang="scss">
.live-auctions {
    padding: 0 2rem;
    margin-bottom: 16rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    &__heading {
        margin-bottom: 5.6rem;
    }

    &__grid {
        grid-template-columns: repeat(auto-fit, minmax(28.2rem, 1fr));
        gap: 2.4rem;
    }
}
</style>

