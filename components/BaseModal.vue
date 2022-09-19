<script setup lang="ts">
import { gsap } from "gsap";

interface Props {
    isOpen: boolean;
    title?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: "close-modal", value: boolean): void;
}>();

const closeModal = () => {
    emit("close-modal", false);
};

watchEffect(() => {
    const isOpen = props.isOpen;
    if (isOpen && process.client) {
        document.body.classList.add("overflow-hidden");
    } else if (!isOpen && process.client) {
        document.body.classList.remove("overflow-hidden");
    }
});

const beforeEnter = (el) => {
    gsap.set(el, {
        opacity: 0,
    });
};

const enter = (el, done) => {
    const modalTimeline = gsap.timeline();
    modalTimeline
        .to(el, {
            opacity: 1,
        })
        .from(
            el.children,
            {
                opacity: 0,
                y: 100,
                onComplete: done,
            },
            "<"
        );
};

const beforeLeave = (el, done) => {
    const modalTimeline = gsap.timeline();
    modalTimeline
        .to(el.children, {
            opacity: 0,
            y: 50,
        })
        .to(
            el,
            {
                opacity: 0,
                onComplete: done,
            },
            "<"
        );
};
</script>

<template>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="beforeLeave" appear>
        <div v-if="isOpen" class="modal">
            <div class="modal__wrapper">
                <div ref="modalBody" class="modal__body relative">
                    <div class="modal__header">
                        <h5 v-if="title" class="modal__title heading-5-bold">{{ title }}</h5>
                        <slot name="header"></slot>
                    </div>
                    <div class="modal__content">
                        <slot name="content"></slot>
                    </div>
                    <button class="modal__close absolute flex items-center content-center" @click="closeModal">
                        <span>&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.25);
    z-index: 10;
    overflow-y: auto;

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        position: relative;
        overflow-y: hidden;
        min-height: 100vh;
        padding-top: 3rem;
        max-width: 68rem;
        margin: 0;

        @media screen and (min-width: 600px) {
            margin: auto;
            padding: 3rem 0;
            overflow-y: initial;
            justify-content: center;
            align-items: center;
        }
    }

    &__body {
        margin: 0;
        min-height: 0px;
        width: 100%;
        background: #fff;
        border-top-left-radius: 1.6rem;
        border-top-right-radius: 1.6rem;
        padding: 3.2rem 2rem 1.6rem;
        height: auto;
        max-height: 60rem;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 600px) {
            padding: 3.2rem;
            border-radius: 1.6rem;
            margin: initial;
            height: initial;
            max-height: initial;
            min-height: 5rem;
        }
    }

    &__content {
        overflow-y: scroll !important;

        @media screen and (min-width: 600px) {
            overflow-y: initial;
        }
    }

    &__header {
        margin-bottom: 3rem;
    }

    &__title {
        color: var(--black-color);
        margin-bottom: 0.6rem;
    }

    &__close {
        right: 1.2rem;
        top: 1.2rem;
        height: 3.5rem;
        width: 3.5rem;
        background-color: var(--gray-100);
        border-radius: 50%;
        line-height: 2.4rem;
        margin: 0;
        padding: 0;
        font-size: 2.6rem;
        color: var(--gray-900);

        span {
            margin-top: -0.3rem;
        }
    }
}
</style>

