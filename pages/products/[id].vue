<template>

    <Head>
        <Title>Nuxt Dojo | {{ product ? product.title : 'Product' }}</Title>
        <Meta name="description" :content="product ? product.description : ''">
        </Meta>
    </Head>
    <div class="flex justify-center items-center h-screen">
        <ProductDetails :product="product" />

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product, error } = useFetch(uri, { key: id })



if (error.value) {
    console.error('Error fetching product:', error.value)
}
</script>