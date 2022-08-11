<script setup lang="ts">
import { gsap } from "gsap";
import HeartIcon from "./icons/HeartIcon.vue";
import FireIcon from "./icons/FireIcon.vue";
const likeButton = ref<HTMLButtonElement>(null);
const isLiked = ref(false);
const countdown = ref("00 : 00 : 00 : 00");

interface NFT {
    name: string;
    image: string;
    currentBid: number;
    username: string;
    dueDate: string;
}

interface Props {
    product: NFT;
}

const props = defineProps<Props>();

const toggleLikeIcon = () => {
    gsap.fromTo(
        likeButton.value,
        {
            scale: 0.4,
        },
        {
            ease: "power.out",
            duration: 0.25,
            scale: 1,
            onComplete: function () {
                isLiked.value = !isLiked.value;
            },
        }
    );
};

const convertToCountdown = setInterval(() => {
    const todaysDate = new Date();
    const futureDate = new Date(props.product.dueDate);

    let dateIsStillInFuture = todaysDate.getTime() < futureDate.getTime();
    if (dateIsStillInFuture) {
        const timeleft = futureDate.getTime() - todaysDate.getTime();

        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        countdown.value = `${days < 10 ? "0" + days : days} : ${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
    } else {
        clearInterval(convertToCountdown);
        countdown.value = "00 : 00 : 00 : 00";
    }
}, 1000);
</script>

<template>
    <div class="nft-card">
        <div class="nft-card__image">
            <img :src="product.image" alt="" width="336" height="352" class="block mx-auto" />
            <button ref="likeButton" class="nft-card__like flex items-center content-center" @click="toggleLikeIcon"><HeartIcon :fill="isLiked ? '#FF4D6D' : '#E7ECF2'" /></button>
        </div>
        <div class="nft-card__content flex space-between">
            <div class="nft-card__user">
                <h6 class="heading-6-bold text-white nft-card__user-name">{{ product.name }}</h6>
                <div class="flex items-center nft-card__user-details">
                    <img src="/images/users/1.svg" alt="" />
                    <p class="paragraph-regular-caption text-white">{{ product.username }}i</p>
                </div>
            </div>
            <div class="nft-card__bid">
                <p class="paragraph-regular-body nft-card__bid-heading text-right">Current Bid</p>
                <h6 class="heading-6-bold text-white text-right">{{ product.currentBid }}eTH</h6>
            </div>
        </div>
        <div class="nft-card__footer flex space-between items-center">
            <div class="nft-card__countdown flex">
                <FireIcon />
                <span class="text-white paragraph-bold-body">{{ countdown }}</span>
            </div>
            <div class="nft-card__bid-button">
                <base-button variant="solid-blue" max-width="129px">Bid</base-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.nft-card {
    background-color: var(--gray-900);
    border-radius: 1.6rem;
    padding: 2.4rem;

    &__image {
        position: relative;
        margin-bottom: 2.4rem;

        img {
            width: 100%;
            height: auto;
            border-radius: 1.6rem;
            object-fit: cover;
            max-width: 100%;
        }
    }

    &__like {
        position: absolute;
        top: 2.4rem;
        right: 2.4rem;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background-color: var(--white);
        transform: scale(1);
        will-change: transform;
    }

    &__content {
        margin-bottom: 2.4rem;
    }

    &__user {
        &-name {
            margin-bottom: 0.8rem;
        }

        &-details {
            gap: 0.8rem;
        }
    }

    &__bid {
        &-heading {
            color: var(--gray-500);
        }
    }

    &__bid-button {
        width: 10rem;

        @media screen and (min-width: 768px) {
            width: 12.9rem;
        }
    }

    &__countdown {
        gap: 0.8rem;
    }
}
</style>

