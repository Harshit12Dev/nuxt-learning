<script setup>
const signOut = () => {
    userStore.logOut()
    useRouter().go(1)
}

</script>
<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4  flex  justify-between">
                <NuxtLink to="/" class="font-bold">NuxtDojo</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/register">Register</NuxtLink>
                    </li>

                </ul>
            </nav>
        </header>
    </div>
    <div class="container mx-auto">
        <slot />
    </div>

</template>

<style scoped>
.router-link-exact-active {
    color: #12b412;
}
</style>