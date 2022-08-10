<script setup lang="ts">
import GetStartedIcon from "./icons/GetStartedIcon.vue";
</script>

<template>
    <div>
        <section class="main-hero">
            <div class="container grid">
                <div class="main-hero__left">
                    <h2 class="heading-2-bold main-hero__heading text-white">Discover a New Era of Crypto Currency</h2>
                </div>
                <div class="main-hero__right">
                    <p class="main-hero__paragraph paragraph-regular-body">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a href="#" class="main-hero__link paragraph-semibold-body flex items-center text-white"> <span>Get Started</span> <GetStartedIcon /></a>
                </div>
            </div>
        </section>
        <section class="main-hero__images flex">
            <div class="main-hero__image">
                <img loading="lazy" src="/images/hero-section-image-one.svg" class="main-hero__image block" alt="First Image in the hero section of the landing page" />
            </div>
            <div class="main-hero__image">
                <img loading="lazy" src="/images/hero-section-image-two.svg" class="main-hero__image block" alt="First Image in the hero section of the landing page" />
            </div>
            <div class="main-hero__image">
                <img loading="lazy" src="/images/hero-section-image-three.svg" class="main-hero__image block" alt="First Image in the hero section of the landing page" />
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.main-hero {
    margin-top: 2.6rem;
    padding: 0rem 2.4rem;

    @media screen and (min-width: 600px) {
        margin-top: 4rem;
        padding: 0rem 3.2rem;
    }

    @media screen and (min-width: 992px) {
        margin-top: 7rem;
        padding: 0rem 3.2rem;
    }

    .container {
        gap: 2.4rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: 55% 45%;
        }
    }

    &__paragraph {
        color: var(--gray-500);
        margin-bottom: 2.4rem;
    }

    &__link {
        gap: 0.8rem;

        span {
            text-decoration: underline;
        }
    }

    &__images {
        gap: 2.4rem;
        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow-y: scroll;
        max-width: 154.2rem;
        margin: 6rem auto 12rem;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    &__image {
        flex: 1;
    }
}
</style>

