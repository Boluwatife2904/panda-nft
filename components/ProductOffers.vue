<script setup lang="ts">
const offers = [
    {
        id: 1,
        name: "Mason Woodward",
        timestamp: "8 hours ago",
        bid: 4.89,
    },
    {
        id: 2,
        name: "Jane Cooper",
        timestamp: "8 hours ago",
        bid: 2.24,
    },
    {
        id: 3,
        name: "Darlene Robertson",
        timestamp: "8 hours ago",
        bid: 1.94,
    },
    {
        id: 4,
        name: "Jenny Wilson",
        timestamp: "8 hours ago",
        bid: 3.41,
    },
];
</script>

<template>
    <ul class="single-product__offers">
        <ProductsOffersListItem v-for="offer in offers" :key="offer.id" :offer="offer" />
    </ul>
</template>

<style lang="scss">
.single-product__offers {
    display: grid;
    gap: 4rem 4.8rem;
    height: 19.2rem;
    overflow-y: scroll;

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        padding-right: 5.6rem;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 5rem;
        background: #343444;
    }

    &::-webkit-scrollbar-thumb {
        background: #ebebeb;
        border-radius: 10rem;
    }
}
</style>

