<script setup lang="ts">
defineProps<{
    error: Object;
}>();
</script>

<template>
    <div class="error-page">
        <div class="error-page__content">
            <div class="error-page__image">
                <img src="/images/404-error.svg" alt="Error 404 Illustration" />
            </div>
            <h6 class="error-page__heading text-white">PAGE NOT FOUND!</h6>
            <p class="error-page__message text-white">Something went wrong and we couldn't find the page you requested for.</p>
            <NuxtLink :to="{ name: 'index' }" class="button button--solid-blue button--padding-large button--radius-small text-white paragraph-regular-body">Go Back Home</NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.error-page {
    max-width: 60rem;
    margin: 10rem auto;
    text-align: center;

    &__image {
        img {
            display: block;
            margin: 0 auto 3rem;
            max-width: 40rem;
        }
    }

    &__heading {
        font-size: 4rem;
        line-height: 4.8rem;
        margin-bottom: 2rem;
    }
    
    &__message {
        font-size: 2rem;
        max-width: 45rem;
        margin: 0 auto 4rem;
    }
}
</style>

