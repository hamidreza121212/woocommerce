<template>
    <div>
        <header class="flex-auto container">
            <nav>
                <ul>
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
            </nav>
        </header>

        <div class="container p-2">
            <slot />
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

.router-link-active {
    color: rgb(61, 180, 180);
}


</style>