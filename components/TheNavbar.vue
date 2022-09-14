<script setup lang="ts">
// import { gsap } from "gsap";

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

// onMounted(() => {
//     const navbarTimeline = gsap.timeline();
//     navbarTimeline.from(navbar.value, { opacity: 0 });
//     navbarTimeline.from(navbarLogo.value, { y: -50, opacity: 0 });
//     navbarTimeline.from(navbarLinkItems.value.children, { x: 20, opacity: 0, stagger: 0.2 }, "-=0.5");
//     navbarTimeline.from(connectWalletButton.value, { y: 20, opacity: 0 }, "-=0.7");
// });

const isOpen = ref(false);
const toggleConnectWalletModal = (value: boolean) => {
    isOpen.value = value;
};

const selectedNetwork = ref("");
const networkOptions = [
    { name: "Ethereum", icon: "ethereum", slug: "ethereum" },
    { name: "Binance Chain", icon: "binance", slug: "binance-chain" },
    { name: "Polygon", icon: "polygon-token", slug: "polygon" },
];
const chooseNetwork = (network: string) => {
    selectedNetwork.value = network;
};

const selectedWallet = ref("");
const walletOptions = [
    { name: "Metask", icon: "metamask", slug: "metamask" },
    { name: "Coinbase Wallet", icon: "coinbase", slug: "coinbase" },
    { name: "Trust Wallet", icon: "trust-wallet", slug: "trust-wallet" },
    { name: "Wallet Connect", icon: "wallet-connect", slug: "wallet-connect" },
    { name: "Brave", icon: "brave", slug: "brave" },
    { name: "Torus", icon: "torus", slug: "torus" },
];
const chooseWallet = (wallet: string) => {
    selectedWallet.value = wallet;
};
</script>

<template>
    <nav ref="navbar" class="navbar">
        <div class="container flex">
            <div ref="navbarLogo" class="navbar__logo">
                <nuxt-link :to="{ name: 'index' }">
                    <img loading="lazy" src="~/assets/images/pandanft-logo.png" width="140" height="40" alt="Panda NFT Logo" />
                </nuxt-link>
            </div>
            <ul ref="navbarLinkItems" class="navbar__links">
                <li v-for="{ name, title } in navbarLinks" class="navigation__item--navbar">
                    <nuxt-link :to="{ name }" class="navigation__link navigation__link--navbar" :class="{ 'navigation__link--active': $route.name === name }">{{ title }}</nuxt-link>
                </li>
            </ul>
            <div ref="connectWalletButton" class="navbar__connect">
                <BaseButton variant="outline-blue" max-width="100%" @click="toggleConnectWalletModal(true)">Connect Wallet</BaseButton>
            </div>
            <button class="navbar__menu hide-on-desktop">
                <span class="navbar__menu-bar block"></span>
                <span class="navbar__menu-bar block"></span>
            </button>
        </div>
    </nav>
    <!-- Connect Wallet Modal -->
    <base-modal :is-open="isOpen" title="Connect your wallet" @close-modal="toggleConnectWalletModal">
        <template #header>
            <div>
                <p class="paragraph-regular-caption connect-wallet__subtitle">Select what network and wallet you want to connect below</p>
            </div>
        </template>
        <template #content>
            <div class="network-options">
                <p class="paragraph-semibold-body network-options__header">Choose Network</p>
                <ul ref="networks" class="network-options__list grid three-grid">
                    <option-picker v-for="network in networkOptions" :key="network.slug" :option="network" :selected="network.slug === selectedNetwork" @pick-option="chooseNetwork"></option-picker>
                </ul>
            </div>
            <div class="wallet-options">
                <p class="paragraph-semibold-body wallet-options__header">Choose Wallet</p>
                <ul ref="walletsRef" class="wallet-options__list grid three-grid">
                    <option-picker v-for="wallet in walletOptions" :key="wallet.slug" :option="wallet" :selected="wallet.slug === selectedWallet" @pick-option="chooseWallet"></option-picker>
                </ul>
            </div>
            <base-button variant="solid-blue" radius="small" padding="large">Connect Wallet</base-button>
        </template>
    </base-modal>
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

.connect-wallet {
    &__subtitle {
        color: var(--gray-900);
        font-size: 1.6rem;
    }
}

.network-options,
.wallet-options {
    margin-bottom: 2.4rem;
    
    &__header {
        margin-bottom: 1rem;
    }
}

.three-grid {
    gap: 1.6rem 2.4rem;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>

