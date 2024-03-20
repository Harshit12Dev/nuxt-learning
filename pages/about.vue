<script setup>

const { data } = await useFetch('/api/ninjs?name="harshit"')
console.log(data);
</script>
<template>
    <div>
        <p>{{ data }}</p>
    </div>

</template>

<style scoped></style>