<script setup lang="ts">
interface Product {
    image: string;
    name: string;
    slug: string;
    currentBid: number;
    username: string;
    isLive: boolean;
    dueDate: string;
    isHot: boolean;
    user: string;
}

interface Props {
    product: Product;
}

const props = defineProps<Props>();

const { countdown } = useCountdown(props.product.dueDate);
</script>

<template>
    <section v-if="product" class="single-product__hero grid">
        <div class="single-product__image relative">
            <nuxt-img loading="lazy" format="webp" :src="product.image" :alt="`NFT image of ${product.name}`" />
            <span class="single-product__countdown flex items-center content-center absolute text-white">
                <IconsFire />
                {{ countdown }}
            </span>
        </div>
        <div class="single-product__information">
            <h3 class="heading-3-bold text-white single-product__title">{{ product.name }}</h3>
            <p class="paragraph-regular-body single-product__short-description">The Birdhouse is a collection of 6000 birds, each with it's own unique traits & personality. See them all at TheBirdHouse.app</p>
            <div class="single-product__bids flex items-center space-between">
                <div class="single-product__price-bid">
                    <p class="paragraph-regular-body">Price Bid</p>
                    <h5 class="heading-5-bold text-white">{{ product.currentBid }}ETH</h5>
                </div>
                <div class="single-product__last-bid">
                    <p class="paragraph-regular-body text-right">Last Bid</p>
                    <h5 class="heading-5-bold text-white">{{ product.currentBid }}ETH</h5>
                </div>
            </div>
            <div class="single-product__owners grid">
                <div class="single-product__creator flex items-center">
                    <div class="single-product__creator-image">
                        <img :src="product.user" alt="Image of the Creator () of this NFT" />
                    </div>
                    <div class="single-product__creator-data">
                        <p class="paragraph-regular-body single-product__creator-title">Creator</p>
                        <h6 class="heading-6-medium text-white single-product__creator-name">{{ product.username }}</h6>
                    </div>
                </div>
                <div class="single-product__creator flex items-center">
                    <div class="single-product__creator-image">
                        <img :src="product.user" alt="Image of the Ownder () of this NFT" />
                    </div>
                    <div class="single-product__creator-data">
                        <p class="paragraph-regular-body single-product__creator-title">Owner</p>
                        <h6 class="heading-6-medium text-white single-product__creator-name">{{ product.username }}</h6>
                    </div>
                </div>
            </div>
            <div class="single-product__actions grid">
                <base-button variant="outline-blue" padding="large" radius="small">Purchase Now</base-button>
                <base-button variant="solid-blue" padding="large" radius="small">Place A Bid</base-button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.single-product {
    &__hero {
        gap: 4rem;
        margin-bottom: 7.2rem;

        @media screen and (min-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__image {
        overflow: hidden;

        img {
            border-radius: 2.4rem;
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
            max-height: 50.8rem;
            // max-width: 58.5rem;
        }
    }

    &__countdown {
        background: #0f182e;
        border-radius: 1.6rem;
        left: 50%;
        transform: translateX(-50%);
        bottom: 3rem;
        padding: 1.6rem;
        gap: 1rem;
        min-width: 20rem;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.4rem;

        @media screen and (min-width: 600px) {
            padding: 1.6rem 2.4rem;
            gap: 1.6rem;
            font-size: 2rem;
            line-height: 2.8rem;
        }
    }

    &__title {
        margin-bottom: 2.4rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    &__short-description {
        color: var(--gray-500);
        margin-bottom: 2.4rem;
    }

    &__bids {
        margin-bottom: 4rem;
    }

    &__price-bid,
    &__last-bid {
        p {
            color: var(--gray-600);
            margin-bottom: 0.8rem;
        }
    }

    &__owners {
        margin-bottom: 5.6rem;
        border-radius: 1.6rem;
        background-color: var(--gray-900);
        padding: 1.6rem 2.4rem 1.8rem;
        gap: 2.4rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__creator {
        gap: 1.6rem;

        &-image {
            height: 6.4rem;
            width: 6.4rem;

            img {
                width: 100%;
                height: 100%;
                border-radius: 1.6rem;
                object-fit: cover;
            }
        }

        &-title {
            color: var(--gray-600);
        }
    }

    &__actions {
        gap: 2.5rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
</style>

