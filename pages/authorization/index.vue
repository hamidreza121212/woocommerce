<template>
    <section class="bg-gray-50">
        <div class="grid grid-cols-12 md:grid-cols-12 items-center justify-center py-8 mx-auto md:h-screen">

            <div class="col-span-12 sm:col-span-10 sm:col-start-3 md:col-span-4 md:col-start-2 w-full bg-white rounded-xl shadow-2xl hover:shadow-xl ring-1 md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 text-sm">
                    <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mt-5">
                        Login
                    </h1>
                    <form class="space-y-5 md:space-y-10" action="#">
                        <div>
                            <label for="email" class="block mb-3 text-sm font-bold text-gray-400">Username or
                                Email As Address</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Username or Email" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-400">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password"
                                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-600 block w-full p-2.5"
                                required="">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#"
                                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                password?</a>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                            in</button>
                        <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <NuxtLink to="/authorization/register"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up
                            </NuxtLink>
                        </p>
                    </form>
                </div>
            </div>

            <div class="col-span-12 col-start-3 md:col-span-4 md:col-start-8 mt-12 md:mt-0">
            <img src="~/assets/svg/illustration.svg" alt="">

            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>