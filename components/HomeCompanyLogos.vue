<script setup lang="ts"></script>

<template>
    <section class="logos-section relative">
        <div class="container flex items-center">
            <div class="logos-section__item">
                <nuxt-img format="webp" src="/images/logos/binance.svg" fit="cover" width="155" height="31" alt="Binance Logo" />
            </div>
            <div class="logos-section__item">
                <nuxt-img format="webp" src="/images/logos/trustwallet.svg" fit="cover" width="140" height="36" alt="TrustWallet Logo" />
            </div>
            <div class="logos-section__item">
                <nuxt-img format="webp" src="/images/logos/metamask.svg" fit="cover" width="165" height="31" alt="Metamask Logo" />
            </div>
            <div class="logos-section__item">
                <nuxt-img format="webp" src="/images/logos/coinbase.svg" fit="cover" width="150" height="27" alt="Coinbase Logo" />
            </div>
            <div class="logos-section__item">
                <nuxt-img format="webp" src="/images/logos/tokocrypto.svg" fit="cover" width="147" height="40" alt="Tokocrypto Logo" />
            </div>
        </div>
        <div class="ornament ornament--logos"></div>
    </section>
</template>

<style lang="scss">
.logos-section {
    padding: 0 2rem;
    margin-bottom: 14.6rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    .container {
        flex-wrap: wrap;
        gap: 3.2rem;
        justify-content: center;

        @media screen and (min-width: 892px) {
            justify-content: space-between;
        }
    }
}
</style>

