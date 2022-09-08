<script setup lang="ts">
interface Offer {
    id: number;
    name: string;
    timestamp: string;
    bid: number;
}

interface Props {
    offer: Offer;
}

defineProps<Props>();
</script>

<template>
    <li class="offer flex items-center">
        <div class="offer__image relative">
            <img :src="`/images/offers/${offer.id}.svg`" alt="Image of User who have placed a bid for an NFT" />
            <span class="offer__checkmark absolute">
                <IconsCheck />
            </span>
        </div>
        <div class="offer__content flex space-between">
            <div>
                <h6 class="heading-6-bold offer__name text-white">{{ offer.name }} <span class="paragraph-regular-label offer__placed-bid">placed a bid</span></h6>
                <p class="offer__timestamp paragraph-semibold-label">{{ offer.timestamp }}</p>
            </div>
            <div>
                <h6 class="heading-6-bold offer__bid text-white">{{ offer.bid }} ETH</h6>
                <p class="offer__price paragraph-regular-label text-right">=${{ (offer.bid * 2.50429448).toFixed(3) }}</p>
            </div>
        </div>
    </li>
</template>

<style lang="scss">
.offer {
    gap: 2.1rem;

    &__image {
        height: 5.6rem;
        width: 5.6rem;
    }

    &__content {
        flex: 1;

        &--top {
            margin-bottom: 1.8rem;
        }
    }

    &__checkmark {
        bottom: -0.2rem;
        right: -0.5rem;
        line-height: 0;
    }

    &__placed-bid {
        color: var(--gray-400);
        margin-left: 0.8rem;
    }

    &__timestamp {
        color: var(--gray-600);
        margin-top: 0.6rem;
    }

    &__price {
        color: var(--gray-500);
        margin-top: 0.6rem;
    }
}
</style>

