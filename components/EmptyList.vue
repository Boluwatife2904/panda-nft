<script setup lang="ts"></script>

<template>
    <div class="empty-state">
        <div class="empty-state__image">
            <img src="/images/bad-gateway.svg" alt="Bad Gateway Illustration" />
        </div>
        <h5 class="empty-state__heading text-white">No Results Found</h5>
        <p class="empty-state__message text-white">
            We couldn't find what you searched for. <br />
            Try searching again.
        </p>
    </div>
</template>

<style lang="scss" scoped>
.empty-state {
    max-width: 75rem;
    margin: 100px auto;
    text-align: center;

    &__image {
        img {
            margin: 0 auto 3rem;
            display: block;
            height: auto;
            max-height: 35rem;
        }
    }

    &__heading {
        font-size: 3.8rem;
        margin-bottom: 1.4rem;
    }

    &__message {
        font-size: 1.8rem;
    }
}
</style>

