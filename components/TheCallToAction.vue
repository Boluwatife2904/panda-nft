<script setup lang="ts"></script>

<template>
    <section class="cta">
        <div class="container">
            <div class="cta__wrapper text-center">
                <h3 class="heading-3-bold cta__title">Create Your Own NFT!</h3>
                <p class="paragraph-regular-body cta__paragraph">We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!</p>
                <BaseButton variant="solid-white" weight="semibold" max-width="258px" padding="large"> Join Community Now</BaseButton>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.cta {
    margin-top: 16rem;
    margin-bottom: 16rem;
    padding: 0 2rem;

    @media screen and (min-width: 600px) {
        padding: 0 3.2rem;
    }

    .container {
        background-color: var(--primary-color);
        border-radius: 1.6rem;
        padding: 4.8rem 2rem;

        @media screen and (min-width: 600px) {
            padding: 4.8rem 3.2rem;
        }
    }

    &__wrapper {
        max-width: 79rem;
        margin: 0 auto;
    }

    &__title {
        color: var(--white);
        margin-bottom: 2.4rem;
    }

    &__paragraph {
        color: var(--white);
        margin-bottom: 4rem;
    }
}
</style>

