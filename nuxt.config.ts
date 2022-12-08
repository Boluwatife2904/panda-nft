// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            title: "Panda NFTs",
            meta: [
                { name: "theme-color", content: "#02050e" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items." },
                { name: "og:title", content: "Panda NFTs" },
                { name: "og:site_name", content: "Panda NFTs" },
                { name: "og:url", content: "https://pandanfts.vercel.app" },
                { name: "og:description", content: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items." },
                { name: "og:type", content: "website" },
                { name: "og:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1660544631/Screenshot_2022-08-15_at_07.20.29_ukcy9r.png" },
            ],
        },
    },
    build: {
        transpile: ["gsap", "chart.js"],
    },
    modules: ["@pinia/nuxt"],
    css: ["~/assets/scss/main.scss", "~/assets/font.css"],
});

