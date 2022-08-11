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
                },
                {
                    image: "/images/nfts/2.svg",
                    name: "Fangster 8668",
                    currentBid: 2.38,
                    username: "@Kurrebe",
                    isLive: true,
                    dueDate: "08/13/2022",
                },
                {
                    image: "/images/nfts/3.svg",
                    name: "Sherbet 3062",
                    currentBid: 1.24,
                    username: "@Noche",
                    isLive: true,
                    dueDate: "08/14/2022",
                },
            ],
        };
    },
    actions: {},
    getters: {
        liveAuctions: (state) => state.nfts.filter((nft) => nft.isLive),
    },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}

export default useProductStore;

