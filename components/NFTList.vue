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
        gap: 2.4rem;
        grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    }
}
</style>

