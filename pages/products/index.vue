<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
definePageMeta({
    layout: 'products',
    middleware: 'auth'
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
// if (!localStorage.getItem('authtoken')) {
//     router.push('/login')
// }
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id" class="bg-white shadow-md rounded-md p-4">
            <ProductCard :product="p" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>