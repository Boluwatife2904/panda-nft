<script setup lang="ts">
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
            <HomeFeaturedArtistsList>
                <HomeFeaturedArtistsListItem v-for="artist in featuredArtists" :key="artist.coverImage" :artist="artist" />
            </HomeFeaturedArtistsList>
        </div>
    </section>
</template>

<style lang="scss">
.featured-artists {
    padding: 0 2rem;
    margin-bottom: 16rem;

    @media screen and (min-width: 768px) {
        padding: 0 3.2rem;
    }

    &__heading {
        margin-bottom: 5.6rem;
    }
}
</style>

