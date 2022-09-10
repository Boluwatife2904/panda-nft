<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";
const route = useRoute();
const ProductStore = useProductStore();

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

const product = ref<Product>();

type ProductTabs = "description" | "offers" | "price-history";
const selectedTab = ref<ProductTabs>("description");
const setSelectedTab = (tab: ProductTabs) => {
    selectedTab.value = tab;
};

watchEffect(() => {
    const slug = route.params.slug as string;
    product.value = ProductStore.singleProductData(slug);

    if (route.name === "product-slug" && product.value === undefined) {
        throw createError({ statusCode: 404, statusMessage: "Page Not Found", fatal: true });
    }
});
</script>

<template>
    <section class="single-product">
        <div class="container">
            <ProductInformation :product="product" />
            <ProductTabChanger :selected-tab="selectedTab" @change-selected-tab="setSelectedTab" />
            <ProductDescription v-show="selectedTab === 'description'" />
            <ProductOffers v-show="selectedTab === 'offers'" />
            <ProductPriceHistory />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.single-product {
    padding: 0 2rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }
}
</style>

