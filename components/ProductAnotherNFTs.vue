<script setup lang="ts">
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
}

interface Props {
    products: Product[];
}

defineProps<Props>();
</script>

<template>
    <section class="other-nfts">
        <div class="other-nfts__header flex items-center space-between">
            <h3 class="heading-3-bold">Another NFTS</h3>
            <nuxt-link :to="{ name: 'discover' }" class="button button--view-more button--outline-blue paragraph-semibold-body text-center">View More</nuxt-link>
        </div>
        <div class="other-nfts__content">
            <NFTList>
                <NFTListItem v-for="product in products" :product="product" :key="product.slug" />
            </NFTList>
        </div>
    </section>
</template>

<style lang="scss">
.other-nfts {
    margin-top: 16rem;

    color: #fff;

    &__header {
        margin-bottom: 5.6rem;
    }
}
</style>

