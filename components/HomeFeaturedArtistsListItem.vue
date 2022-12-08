<script setup lang="ts">
interface Artist {
    name: string;
    coverImage: string;
    profileImage: string;
    followers: string;
}

interface Props {
    artist: Artist;
}

defineProps<Props>();
</script>

<template>
    <div class="featured-artists__grid-item featured-artist">
        <img loading="lazy" :src="artist.coverImage" :alt="`${artist.name} cover image`" width="266" height="225" class="featured-artist__cover-image mx-auto block" />
        <div class="featured-artist__content text-center text-white">
            <nuxt-img loading="lazy" format="webp" :src="artist.profileImage" height="104" width="104" :alt="`${artist.name} profile image`" class="featured-artist__profile-image mx-auto block" />
            <h5 class="heading-5-bold featured-artist__name">{{ artist.name }}</h5>
            <h6 class="heading-6-bold featured-artist__followers flex items-center content-center"><IconsEthereum /> {{ artist.followers }}</h6>
        </div>
    </div>
</template>

<style lang="scss">
.featured-artist {
    background: var(--gray-900);
    border-radius: 16px;
    padding: 0.8rem 0.8rem 2.4rem;

    &__cover-image {
        width: 100%;
        margin: 0 auto;
        max-width: 100%;
        object-fit: cover;
        border-radius: 1.6rem;
    }

    &__content {
        margin-top: -52px;
    }

    &__profile-image {
        margin-bottom: 1.6rem;
    }

    &__name {
        margin-bottom: 0.8rem;
    }

    &__followers {
        gap: 0.8rem;
    }
}
</style>

