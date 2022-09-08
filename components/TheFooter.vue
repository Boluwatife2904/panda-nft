<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="grid-container grid">
                <div class="footer__logo">
                    <img loading="lazy" src="~/assets/images/pandanft-logo.svg" width="140" height="40" alt="Panda NFT Logo" />
                    <p class="footer__description paragraph-regular-body">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                </div>
                <div class="footer__wrapper">
                    <h5 class="heading-5-bold footer__heading text-white">Resources</h5>
                    <ul>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Help Center</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Platform Status</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Partners</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Gas-Free Marketplace</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Blog</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__wrapper">
                    <h5 class="heading-5-bold footer__heading text-white">Company</h5>
                    <ul>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Our Team</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">About Us</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Contact Us</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Careers</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__wrapper">
                    <h5 class="heading-5-bold footer__heading text-white">Contact</h5>
                    <p class="footer__contact paragraph-regular-body">2715 Ash Dr. San Jose, South Dakota 83475</p>
                    <ul class="footer__socials grid">
                        <li>
                            <a href="#"><IconsFacebook /></a>
                        </li>
                        <li>
                            <a href="#"><IconsTwitter /></a>
                        </li>
                        <li>
                            <a href="#"><IconsInstagram /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="footer__copyright paragraph-regular-caption text-white">&copy; {{ new Date().getFullYear() }} All Right Reserved</p>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    padding: 8.8rem 2rem 6.4rem;
    margin-top: 6.8rem;

    @media screen and (min-width: 768px) {
        padding: 8.8rem 3.2rem 6.4rem;
    }

    .grid-container {
        justify-content: space-between;
        margin-bottom: 2.4rem;
        gap: 3.2rem;

        @media screen and (min-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 1120px) {
            grid-template-columns: 39.3rem repeat(3, 18rem);
        }
    }

    &__description {
        color: var(--gray-500);
        margin-top: 2.4rem;
    }

    &__heading {
        margin-bottom: 2.4rem;
    }

    &__contact {
        color: var(--gray-500);
        margin-bottom: 1.6rem;
    }

    &__socials {
        grid-template-columns: repeat(3, 3.4rem);
        gap: 2.4rem;
    }
}
</style>

