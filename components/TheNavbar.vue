<script setup lang="ts">
const navbarLinks = ref([
    {
        name: "index",
        title: "Home",
    },
    {
        name: "discover",
        title: "Discover",
    },
    {
        name: "docs",
        title: "Docs",
    },
    {
        name: "blog",
        title: "Blog",
    },
    {
        name: "about-us",
        title: "About Us",
    },
    {
        name: "contact-us",
        title: "Contact Us",
    },
]);
</script>

<template>
    <nav class="navbar">
        <div class="container flex">
            <div class="navbar__logo">
                <img src="~/assets/images/pandanft-logo.svg" alt="Panda NFT Logo" />
            </div>
            <ul class="navbar__links flex">
                <li v-for="{ name, title } in navbarLinks" class="navigation__item--navbar">
                    <nuxt-link :to="{ name }" class="navigation__link navigation__link--navbar" :class="{ 'navigation__link--active': $route.name === name }">{{ title }}</nuxt-link>
                </li>
            </ul>
            <div class="navbar__connect">
                <BaseButton variant="outline-blue" max-width="100%">Connect Wallet</BaseButton>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
.navbar {
    padding: 4rem 2rem;

    .container {
        justify-content: space-between;
        align-items: center;
    }

    &__connect {
        min-width: 175px;
    }
}
</style>

