<template>
  <div class="h-12 bg-indigo-900 text-white" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">

    <div class="container mx-auto">


      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-start-1 row-span-1">01</div>
        <div class="row-start-1 row-end-4">02</div>
      </div>

    </div>




  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Home',
          href: '#home'
        },
        {
          title: 'About',
          href: '#about'
        },
        {
          title: 'Contact',
          href: '#contact'
        },
        {
          title: 'App',
          href: '#app'
        }
      ]
    }
  }
}
</script>