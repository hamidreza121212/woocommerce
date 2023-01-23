<template>
    <div>

        <div
            class="grid grid-cols-1 lg:grid-cols-12 bg-illustration relative z-1 text-center text-white font-bold text-xl">

            <div class="mx-2 lg:col-start-2 lg:col-span-10 rounded-2xl overflow-hidden shadow-lg bg-conter p-4">
                <div class="grid sm:grid-cols-2 md:grid-cols-4">

                    <div class="text-lx md:text-3xl mt-3">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='2000' :duration='3' separator='' 
                            decimalSeparator='.' :decimals='false' :autoinit='true' prefix='' suffix=' +'/>

                            <p class="mt-3 text-sm text-gray-300 font-medium">Students</p>
                    </div>
                    <div class="text-lx md:text-3xl mt-3">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='1200' :duration='3' separator='' 
                            decimalSeparator='.' :decimals='false' :autoinit='true' prefix='' suffix=''/>
                            <p class="mt-3 text-sm text-gray-300 font-medium">Online Courses</p>
                    </div>
                    <div class="text-lx md:text-3xl mt-3">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='2256' :duration='3' separator='' 
                            decimalSeparator='.' :decimals='false' :autoinit='true' prefix='' suffix=''/>
                            <p class="mt-3 text-sm text-gray-300 font-medium">Finished Seasons</p>
                    </div>
                    <div class="text-lx md:text-3xl mt-3">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='100' :duration='3' separator='' 
                            decimalSeparator='.' :decimals='false' :autoinit='true' prefix='' suffix=' %'/>
                            <p class="mt-3 text-sm text-gray-300 font-medium">Satisfaction</p>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script>

import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
    name: 'Demo',
    components: {
        'vue3-autocounter': Vue3autocounter
    }
});

</script>

<style scoped>
.bg-conter {
    background: #2A3E61;
    background-image: url('~/assets/images/bg/illustration-bg.png');
}
</style>