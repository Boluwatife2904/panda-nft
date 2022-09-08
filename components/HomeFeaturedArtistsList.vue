<script setup lang="ts"></script>

<template>
    <div class="featured-artists__grid grid">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.featured-artists__grid {
    grid-template-columns: repeat(auto-fit, minmax(28.2rem, 1fr));
    gap: 2.4rem;
}
</style>

