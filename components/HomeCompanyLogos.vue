<script setup lang="ts"></script>

<template>
    <section class="logos-section">
        <div class="container flex items-center">
            <div class="logos-section__item">
                <img src="/images/logos/binance.svg" width="139" height="34" alt="Binance Logo" />
            </div>
            <div class="logos-section__item">
                <img src="/images/logos/trustwallet.svg" width="139" height="34" alt="TrustWallet Logo" />
            </div>
            <div class="logos-section__item">
                <img src="/images/logos/metamask.svg" width="139" height="34" alt="Metamask Logo" />
            </div>
            <div class="logos-section__item">
                <img src="/images/logos/coinbase.svg" width="139" height="34" alt="Coinbase Logo" />
            </div>
            <div class="logos-section__item">
                <img src="/images/logos/tokocrypto.svg" width="139" height="34" alt="Tokocrypto Logo" />
            </div>
        </div>
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

