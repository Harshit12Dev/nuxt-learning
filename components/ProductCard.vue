<script setup>
const { product } = defineProps(['product'])
</script>
<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product Image" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink class="font-bold text-gray-500 m-4" :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>



<style scoped>
html,
body {
    overflow: hidden;
    /* Prevent scrolling of the entire page */
}

.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>