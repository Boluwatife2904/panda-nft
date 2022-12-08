<script setup lang="ts"></script>

<template>
    <div class="website-maintenance mx-auto text-center">
        <nuxt-img format="webp" fit="cover" height="350" width="350" src="/images/website-maintenance.svg" alt="Website in Maintenance Image" />
        <h3 class="heading-4-bold text-white">This page is not yet available.</h3>
        <p class="paragraph-regular-body text-white">Oooooppsss!!!! I see You've gotten here but I've not started implementing the UI for this page and thus why I have this screen. Please check back later. Thanks 🙌🏽.</p>
    </div>
</template>

<style lang="scss">
.website-maintenance {
    max-width: 60rem;
    padding: 0 2rem;
    margin-bottom: 16rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    img {
        height: 100%;
        max-width: 100%;
    }

    h3 {
        margin-bottom: 2.4rem;
    }
}
</style>

