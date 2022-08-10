<script setup lang="ts">
import EthereumIcon from "./icons/EthereumIcon.vue";
const featuredArtists = [
    {
        coverImage: "/images/artists/artist-one-cover-image.svg",
        profileImage: "/images/artists/artist-one-profile-image.svg",
        name: "CryptoPunks",
        followers: "818.7k",
    },
    {
        coverImage: "/images/artists/artist-two-cover-image.svg",
        profileImage: "/images/artists/artist-two-profile-image.svg",
        name: "Doodles",
        followers: "74.9k",
    },
    {
        coverImage: "/images/artists/artist-three-cover-image.svg",
        profileImage: "/images/artists/artist-three-profile-image.svg",
        name: "Bored Ape Yacht",
        followers: "378.7k",
    },
    {
        coverImage: "/images/artists/artist-four-cover-image.svg",
        profileImage: "/images/artists/artist-four-profile-image.svg",
        name: "Capsule House",
        followers: "19.3k",
    },
];
</script>

<template>
    <section class="featured-artists">
        <div class="container">
            <div class="featured-artists__heading flex items-center space-between">
                <h3 class="heading-3-bold featured-artists__title text-white">Featured Artists</h3>
                <nuxt-link to="#" class="featured-artists__view-more button button--view-more button--outline-blue paragraph-semibold-body text-center">View More</nuxt-link>
            </div>
            <div class="featured-artists__grid grid">
                <div v-for="artist in featuredArtists" class="featured-artists__grid-item featured-artist">
                    <img loading="lazy" :src="artist.coverImage" :alt="`${artist.name} cover image`" width="266" height="225" class="featured-artist__cover-image mx-auto block" />
                    <div class="featured-artist__content text-center text-white">
                        <img loading="lazy" :src="artist.profileImage" height="104" width="104" :alt="`${artist.name} profile image`" class="featured-artist__profile-image mx-auto block" />
                        <h5 class="heading-5-bold featured-artist__name">{{ artist.name }}</h5>
                        <h6 class="heading-6-bold featured-artist__followers flex items-center content-center"><EthereumIcon /> {{ artist.followers }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.featured-artists {
    padding: 0 2rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    &__heading {
        margin-bottom: 5.6rem;
    }

    &__grid {
        grid-template-columns: repeat(auto-fit, minmax(28.2rem, 1fr));
        gap: 2.4rem;
    }
}

.featured-artist {
    background: var(--gray-900);
    border-radius: 16px;
    padding: 0.8rem 0.8rem 2.4rem;

    &__cover-image {
        margin: 0 auto;
        max-width: 100%;
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

