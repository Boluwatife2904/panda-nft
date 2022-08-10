<script setup lang="ts">
import MonitorIcon from "./icons/MonitorIcon.vue";
</script>

<template>
    <section class="create-sell">
        <div class="container">
            <h3 class="heading-3-bold text-center mx-auto create-sell__title text-white">Create and sell your NFTs</h3>

            <div class="create-sell__grid grid">
                <div class="create-sell__card text-center">
                    <div class="create-sell__card-icon flex content-center items-center mx-auto">
                        <MonitorIcon />
                    </div>
                    <h5 class="create-sell__card-title heading-5-bold text-white">Set up your wallet</h5>
                    <p class="create-sell__card-description paragraph-regular-caption">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
                <div class="create-sell__card text-center">
                    <div class="create-sell__card-icon flex content-center items-center mx-auto">
                        <MonitorIcon />
                    </div>
                    <h5 class="create-sell__card-title heading-5-bold text-white">Add Your NFTs</h5>
                    <p class="create-sell__card-description paragraph-regular-caption">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
                <div class="create-sell__card text-center">
                    <div class="create-sell__card-icon flex content-center items-center mx-auto">
                        <MonitorIcon />
                    </div>
                    <h5 class="create-sell__card-title heading-5-bold text-white">List Them For Sale</h5>
                    <p class="create-sell__card-description paragraph-regular-caption">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.create-sell {
    padding: 0 2rem;
    margin-bottom: 16rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    &__title {
        max-width: 58.3rem;
        margin-bottom: 5.6rem;
    }

    &__grid {
        gap: 2.6rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    &__card {
        background-color: var(--gray-900);
        border-radius: 1.6rem;
        padding: 5.6rem 3.2rem;
        border: 1px solid transparent;
        position: relative;
        transition: all 0.3s;

        &::after {
            border-radius: 1.6rem;
            position: absolute;
            content: "";
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            border: 1px solid #fff;
            opacity: 0;
            visibility: hidden;
            mask-image: linear-gradient(136.6deg, #ffffff -14.02%, rgba(255, 255, 255, 0) 51.46%), linear-gradient(317.85deg, #ffffff 0%, rgba(255, 255, 255, 0) 66.33%);
            transition: all 0.3s;
        }

        &:hover {
            background-color: transparent;

            &::after {
                visibility: visible;
                opacity: 1;
            }
        }

        &-icon {
            height: 8rem;
            width: 8rem;
            border-radius: 50%;
            background-color: var(--primary-color);
            margin-bottom: 4.8rem;
        }

        &-title {
            margin-bottom: 2.4rem;
        }

        &-description {
            color: var(--gray-500);
        }
    }
}
</style>

