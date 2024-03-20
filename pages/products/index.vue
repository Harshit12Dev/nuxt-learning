<script setup>

definePageMeta({
    layout: 'products'
})

// fetc h products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt dojo | product',
    meta: [
        {
            name: 'description',
            content: 'Nuxt3 learning application'
        }
    ]
})
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id" class="bg-white shadow-md rounded-md p-4">
            <ProductCard :product="p" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>