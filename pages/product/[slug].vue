<script setup lang="ts">
type ProductTabs = "description" | "offers" | "price-history";
const selectedTab = ref<ProductTabs>("offers");
const setSelectedTab = (tab: ProductTabs) => {
    selectedTab.value = tab;
};
</script>

<template>
    <section class="single-product">
        <div class="container">
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

