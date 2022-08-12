<script setup lang="ts"></script>

<template>
    <section class="nfts">
        <div class="container">
            <div class="nfts__grid grid">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.nfts {
    &__grid {
        gap: 5.6rem 2.4rem;

        @media screen and (min-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>

