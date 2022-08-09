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
            <ul class="navbar__links flex hide-on-mobile">
                <li v-for="{ name, title } in navbarLinks" class="navigation__item--navbar">
                    <nuxt-link :to="{ name }" class="navigation__link navigation__link--navbar" :class="{ 'navigation__link--active': $route.name === name }">{{ title }}</nuxt-link>
                </li>
            </ul>
            <div class="navbar__connect hide-on-mobile">
                <BaseButton variant="outline-blue" max-width="100%">Connect Wallet</BaseButton>
            </div>
            <button class="navbar__menu hide-on-desktop">
                <span class="navbar__menu-bar block"></span>
                <span class="navbar__menu-bar block"></span>
                <!-- <span class="navbar__menu-bar block"></span> -->
            </button>
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
        min-width: 17.5rem;
    }

    &__links,
    &__connect {
        display: none;

        @media screen and (min-width: 992px) {
            display: flex;
        }
    }

    &__menu {
        padding: 0.8rem 1.2rem;

        @media screen and (min-width: 992px) {
            display: none;
        }

        &-bar {
            height: 0.2rem;
            width: 3rem;
            background-color: var(--gray-500);
            border-radius: 2.4rem;

            &:last-child {
                width: 2.4rem;
                margin-left: auto;
            }

            &:not(:last-child) {
                margin-bottom: 0.6rem;
            }
        }
    }
}
</style>

