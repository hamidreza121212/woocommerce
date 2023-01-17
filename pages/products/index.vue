<template>
    <div>

        <h2>Products</h2>

        {{count}}


    </div>
</template>

<script setup>

const { data: count } = await useFetch('https://dummyjson.com/products/1')

console.log(count)

    definePageMeta({
        layout: 'products'
    })



</script>

<style scoped>

</style>