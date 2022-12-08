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
                { name: "og:title", content: "Panda NFTs" },
                { name: "og:site_name", content: "Panda NFTs" },
                { name: "og:url", content: "https://pandanfts.vercel.app" },
                { name: "og:description", content: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items." },
                { name: "og:type", content: "website" },
                { name: "og:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1660544631/Screenshot_2022-08-15_at_07.20.29_ukcy9r.png" },
            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    preconnect: true,
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                },
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            ],
        },
    },
    build: {
        transpile: ["gsap", "chart.js"],
    },
    modules: ["@pinia/nuxt"],
    css: ["~/assets/scss/main.scss"],
});

