import { defineStore, acceptHMRUpdate } from "pinia";

const useProductStore = defineStore("productStore", {
    state: () => {
        return {
            nfts: [
                // 1
                {
                    image: "/images/nfts/1.png",
                    name: "Dao Vinci #0000",
                    slug: "dao-vinci-0000",
                    currentBid: 4.89,
                    username: "@SalvadorDali",
                    isLive: true,
                    dueDate: "09/16/2022",
                    isHot: false,
                    user: "/images/users/1.png",
                    category: "music",
                },
                // 2
                {
                    image: "/images/nfts/2.png",
                    name: "Fangster 8668",
                    slug: "fangster-8668",
                    currentBid: 2.38,
                    username: "@Kurrebe",
                    isLive: true,
                    dueDate: "09/13/2022",
                    isHot: false,
                    user: "/images/users/2.png",
                    category: "music",
                },
                // 3
                {
                    image: "/images/nfts/3.png",
                    name: "Sherbet 3062",
                    slug: "sherbet-3062",
                    currentBid: 1.24,
                    username: "@Noche",
                    isLive: true,
                    dueDate: "09/14/2022",
                    isHot: false,
                    user: "/images/users/3.png",
                    category: "music",
                },
                // 4
                {
                    image: "/images/nfts/4.png",
                    name: "Dao Vinci #0001",
                    slug: "dao-vinci-0001",
                    currentBid: 7.23,
                    username: "@Usarz",
                    isLive: false,
                    dueDate: "09/24/2022",
                    isHot: true,
                    user: "/images/users/4.png",
                    category: "art",
                },
                // 5
                {
                    image: "/images/nfts/5.png",
                    name: "Fangster 8669",
                    slug: "fangster-8669",
                    currentBid: 3.01,
                    username: "@Likaid",
                    isLive: false,
                    dueDate: "09/18/2022",
                    isHot: true,
                    user: "/images/users/5.png",
                    category: "music",
                },
                // 6
                {
                    image: "/images/nfts/6.png",
                    name: "Sherbet 3063",
                    slug: "sherbet-3063",
                    currentBid: 4.84,
                    username: "@Ashkur",
                    isLive: false,
                    dueDate: "09/14/2022",
                    isHot: true,
                    user: "/images/users/6.png",
                    category: "videos",
                },
                // 7
                {
                    image: "/images/nfts/7.png",
                    name: "Cute Shiba",
                    slug: "cute-shiba",
                    currentBid: 0.75,
                    username: "@Struck",
                    isLive: false,
                    dueDate: "09/21/2022",
                    isHot: true,
                    user: "/images/users/7.png",
                    category: "art",
                },
                // 8
                {
                    image: "/images/nfts/8.png",
                    name: "Cute Monkey",
                    slug: "cute-monkey",
                    currentBid: 2.88,
                    username: "@Nasman",
                    isLive: false,
                    dueDate: "09/18/2022",
                    isHot: true,
                    user: "/images/users/8.png",
                    category: "sports",
                },
                // 9
                {
                    image: "/images/nfts/9.png",
                    name: "Cute Astronaut",
                    slug: "cute-astronaut",
                    currentBid: 5.46,
                    username: "@Bellow",
                    isLive: false,
                    dueDate: "09/14/2022",
                    isHot: true,
                    user: "/images/users/9.png",
                    category: "virtual",
                },
                // 10
                {
                    image: "/images/nfts/10.png",
                    name: "Hamlet Contemplates 001",
                    slug: "hamlet-contemplates-001",
                    currentBid: 4.56,
                    username: "@Laskas",
                    isLive: false,
                    dueDate: "09/17/2022",
                    isHot: false,
                    user: "/images/users/1.png",
                    category: "art",
                },
                // 11
                {
                    image: "/images/nfts/11.png",
                    name: "Hamlet Contemplates 002",
                    slug: "hamlet-contemplates-002",
                    currentBid: 1.44,
                    username: "@Moliun",
                    isLive: false,
                    dueDate: "09/27/2022",
                    isHot: false,
                    user: "/images/users/2.png",
                    category: "art",
                },
                // 12
                {
                    image: "/images/nfts/12.png",
                    name: "Hamlet Contemplates 003",
                    slug: "hamlet-contemplates-003",
                    currentBid: 9.6,
                    username: "@Criuuz",
                    isLive: false,
                    dueDate: "09/17/2022",
                    isHot: false,
                    user: "/images/users/3.png",
                    category: "virtual",
                },
                // 13
                {
                    image: "/images/nfts/13.png",
                    name: "Doodle #554",
                    slug: "doodle-554",
                    currentBid: 0.68,
                    username: "@Jestyx",
                    isLive: false,
                    dueDate: "09/23/2022",
                    isHot: false,
                    user: "/images/users/4.png",
                    category: "virtual",
                },
                // 14
                {
                    image: "/images/nfts/14.png",
                    name: "Doodle #6189",
                    slug: "doodle-6189",
                    currentBid: 2.42,
                    username: "@Sudink",
                    isLive: false,
                    dueDate: "09/20/2022",
                    isHot: false,
                    user: "/images/users/5.png",
                    category: "sports",
                },
                // 15
                {
                    image: "/images/nfts/15.png",
                    name: "Doodle #30",
                    slug: "doodle-30",
                    currentBid: 1.97,
                    username: "@Midexo",
                    isLive: false,
                    dueDate: "09/22/2022",
                    isHot: false,
                    user: "/images/users/6.png",
                    category: "sports",
                },
                // 16
                {
                    image: "/images/nfts/16.png",
                    name: "Hamlet Contemplates 004",
                    slug: "hamlet-contemplates-004",
                    currentBid: 5.45,
                    username: "@Lestry",
                    isLive: false,
                    dueDate: "09/23/2022",
                    isHot: false,
                    user: "/images/users/7.png",
                    category: "art",
                },
                // 17
                {
                    image: "/images/nfts/17.png",
                    name: "Hamlet Contemplates 005",
                    slug: "hamlet-contemplates-005",
                    currentBid: 2.48,
                    username: "@Straku",
                    isLive: false,
                    dueDate: "09/24/2022",
                    isHot: false,
                    user: "/images/users/8.png",
                    category: "videos",
                },
                // 18
                {
                    image: "/images/nfts/18.png",
                    name: "Hamlet Contemplates 006",
                    slug: "hamlet-contemplates-006",
                    currentBid: 7.12,
                    username: "@Bienda",
                    isLive: false,
                    dueDate: "09/21/2022",
                    isHot: false,
                    user: "/images/users/9.png",
                    category: "videos",
                },
            ],
        };
    },
    actions: {},
    getters: {
        liveAuctions: (state) => state.nfts.filter((nft) => nft.isLive),
        hotNFTs: (state) => state.nfts.filter((nft) => nft.isHot),
        singleProductData: (state) => {
            return (productSlug: string) => state.nfts.find((nft) => nft.slug === productSlug);
        },
        anotherNFTs: (state) => [...state.nfts].slice(-3),
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}

export default useProductStore;

