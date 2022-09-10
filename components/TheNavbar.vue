<script setup lang="ts">
import { gsap } from "gsap";

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

const navbar = ref<HTMLElement>(null);
const navbarLogo = ref<HTMLImageElement>(null);
const navbarLinkItems = ref<HTMLUListElement>(null);
const connectWalletButton = ref<HTMLButtonElement>(null);

onMounted(() => {
    const navbarTimeline = gsap.timeline();
    navbarTimeline.from(navbar.value, { opacity: 0 });
    navbarTimeline.from(navbarLogo.value, { y: -50, opacity: 0 });
    navbarTimeline.from(navbarLinkItems.value.children, { x: 20, opacity: 0, stagger: 0.2 }, "-=0.5");
    navbarTimeline.from(connectWalletButton.value, { y: 20, opacity: 0 }, "-=0.7");
});
</script>

<template>
    <nav ref="navbar" class="navbar">
        <div class="container flex">
            <div ref="navbarLogo" class="navbar__logo">
                <nuxt-link :to="{ name: 'index' }">
                    <img loading="lazy" src="~/assets/images/pandanft-logo.svg" width="140" height="40" alt="Panda NFT Logo" />
                </nuxt-link>
            </div>
            <ul ref="navbarLinkItems" class="navbar__links">
                <li v-for="{ name, title } in navbarLinks" class="navigation__item--navbar">
                    <nuxt-link :to="{ name }" class="navigation__link navigation__link--navbar" :class="{ 'navigation__link--active': $route.name === name }">{{ title }}</nuxt-link>
                </li>
            </ul>
            <div ref="connectWalletButton" class="navbar__connect">
                <BaseButton variant="outline-blue" max-width="100%">Connect Wallet</BaseButton>
            </div>
            <button class="navbar__menu hide-on-desktop">
                <span class="navbar__menu-bar block"></span>
                <span class="navbar__menu-bar block"></span>
            </button>
        </div>
    </nav>
</template>

<style lang="scss">
.navbar {
    padding: 4rem 2rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 600px) {
        margin-bottom: 8rem;
    }

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

