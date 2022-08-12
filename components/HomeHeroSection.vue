<script setup lang="ts">
import { gsap } from "gsap";
import GetStartedIcon from "./icons/GetStartedIcon.vue";
const heroSection = ref<HTMLDivElement>(null);
const heroHeading = ref<HTMLHeadingElement>(null);
const heroParagraph = ref<HTMLParagraphElement>(null);
const heroLink = ref<HTMLAnchorElement>(null);
const heroImages = ref<HTMLElement>(null);

onMounted(() => {
    const heroTimeline = gsap.timeline();
    heroTimeline.fromTo(heroSection.value, { opacity: 0 }, { opacity: 1 });
    heroTimeline.to(heroHeading.value, { y: 0, opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" });
    heroTimeline.to(heroParagraph.value, { y: 0, opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" });
    heroTimeline.to(heroLink.value, { y: 0, opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }, "-=0.2");
    heroTimeline.fromTo(heroImages.value.children, { opacity: 0, y: 200 }, { opacity: 1, y: 0, stagger: 0.2 });
});
</script>

<template>
    <div ref="heroSection">
        <section class="main-hero">
            <div class="container grid">
                <div class="main-hero__left">
                    <h2 ref="heroHeading" class="heading-2-bold main-hero__heading text-white">Discover a New Era of Crypto Currency</h2>
                </div>
                <div class="main-hero__right">
                    <p ref="heroParagraph" class="main-hero__paragraph paragraph-regular-body">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a ref="heroLink" href="#" class="main-hero__link paragraph-semibold-body flex items-center text-white"> <span>Get Started</span> <GetStartedIcon /></a>
                </div>
            </div>
        </section>
        <section ref="heroImages" class="main-hero__images flex">
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

    &__heading {
        transition: all 0.5s;
        transform: translateY(100px);
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    }

    &__paragraph {
        transition: all 0.5s;
        color: var(--gray-500);
        margin-bottom: 2.4rem;
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
        transform: translateY(100px);
    }

    &__link {
        transition: all 0.5s;
        gap: 0.8rem;
        transform: translateY(100px);
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);

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

