<template>
    <div>
        <header>
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

        <div>
            <slot class="container p-5" />
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