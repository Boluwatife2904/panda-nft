<script setup lang="ts">
const productDescriptionData = [
    { title: "Contact Address", text: "0x49cf...a28b" },
    { title: "Token ID", text: "4133" },
    { title: "Token Standard", text: "ERC 721" },
    { title: "Blockchain", text: "Ethereum" },
];
</script>

<template>
    <div class="single-product__description">
        <p class="single-product__description-text paragraph-regular-body">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <ul class="single-product__description-list">
            <li v-for="description in productDescriptionData" :key="description.text" class="single-product__description-list-item flex space-between items-center">
                <h6 class="heading-6-bold">{{ description.title }}</h6>
                <p class="paragraph-regular-body">{{ description.text }}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.single-product__description {
    max-width: 68.8rem;
    color: var(--gray-200);
    margin-bottom: 16rem;

    &-text {
        margin-bottom: 2.4rem;
    }

    &-list-item {
        max-width: 34.9rem;

        &:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    }
}
</style>

