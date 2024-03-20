<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <ul>
                    <li>
                        <NuxtLink to="/">NuxtDojo</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

    </div>
    <div class="container mx-auto p-4">
        <slot />
    </div>

    <div>
        <footer class="container mx-auto p-4 justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>

                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>



        </footer>
    </div>

</template>

<style scoped>
.router-link-exact-active {
    color: #12b412;
}

html,
body {
    overflow: hidden;
    /* Prevent scrolling of the entire page */
}
</style>