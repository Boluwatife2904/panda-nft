// auth.js
import { defineStore, acceptHMRUpdate } from "pinia";

const useProductStore = defineStore("productStore", {
    state: () => {
        return {
            nfts: [
                {
                    image: "/images/nfts/1.svg",
                    name: "Dao Vinci #0000",
                    currentBid: 4.89,
                    username: "@SalvadorDali",
                    isLive: true,
                    dueDate: "08/16/2022",
                    isHot: false,
                },
                {
                    image: "/images/nfts/2.svg",
                    name: "Fangster 8668",
                    currentBid: 2.38,
                    username: "@Kurrebe",
                    isLive: true,
                    dueDate: "08/13/2022",
                    isHot: false,
                },
                {
                    image: "/images/nfts/3.svg",
                    name: "Sherbet 3062",
                    currentBid: 1.24,
                    username: "@Noche",
                    isLive: true,
                    dueDate: "08/14/2022",
                    isHot: false,
                },
                {
                    image: "/images/nfts/4.svg",
                    name: "Dao Vinci #0001",
                    currentBid: 7.23,
                    username: "@Usarz",
                    isLive: false,
                    dueDate: "08/24/2022",
                    isHot: true,
                },
                {
                    image: "/images/nfts/5.svg",
                    name: "Fangster 8669",
                    currentBid: 3.01,
                    username: "@Likaid",
                    isLive: false,
                    dueDate: "08/18/2022",
                    isHot: true,
                },
                {
                    image: "/images/nfts/6.svg",
                    name: "Sherbet 3063",
                    currentBid: 4.84,
                    username: "@Ashkur",
                    isLive: false,
                    dueDate: "09/04/2022",
                    isHot: true,
                },
                {
                    image: "/images/nfts/7.svg",
                    name: "Cute Shiba",
                    currentBid: 0.75,
                    username: "@Struck",
                    isLive: false,
                    dueDate: "09/01/2022",
                    isHot: true,
                },
                {
                    image: "/images/nfts/8.svg",
                    name: "Cute Monkey",
                    currentBid: 2.88,
                    username: "@Nasman",
                    isLive: false,
                    dueDate: "08/18/2022",
                    isHot: true,
                },
                {
                    image: "/images/nfts/9.svg",
                    name: "Cute Astronaut",
                    currentBid: 5.46,
                    username: "@Bellow",
                    isLive: false,
                    dueDate: "08/14/2022",
                    isHot: true,
                },
            ],
        };
    },
    actions: {},
    getters: {
        liveAuctions: (state) => state.nfts.filter((nft) => nft.isLive),
        hotNFTs: (state) => state.nfts.filter((nft) => nft.isHot),
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}

export default useProductStore;

