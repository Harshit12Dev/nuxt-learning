<template>
    <div class="container mx-auto h-screen">
        <div v-if="product" class="grid grid-cols-2 gap-10">
            <div class="p-7 flex justify-center items-center">
                <img v-if="product" :src="product.image" alt="product img" class="max-w-full h-72">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product ? product.title : 'Product Title' }}</h2>
                <p class="text-xl my-7">Price - ${{ product ? product.price : 'N/A' }}</p>
                <h3 class="font-bold border-b-2 pb-2">Product Description :</h3>
                <p class="pb-7">{{ product ? product.description : 'No description available' }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2"></i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div v-else class="text-center">Product Not found</div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
html,
body {
    overflow: hidden;
    /* Prevent scrolling of the entire page */
}

.container {
    overflow-y: auto;
    /* Allow vertical scrolling within the container */
}
</style>