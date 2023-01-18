<template>
  <div class="bg-indigo-900 text-white" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">
    <div class="container sm:mx-auto flex flex-wrap">
      <!-- Desktop nav list -->
      <nav class="hidden sm:block">
        <ul class="flex">
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.href" class="hover:bg-green-500 p-6 block">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="ml-auto sm:hidden p-6" @click="menu = !menu">
        <i class="fa fa-bars"></i>
      </div>
    </div> 
    <!-- Mobile nav list -->
    <nav v-show="menu" class="w-full">
      <ul class="flex flex-col text-center">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.href" class="hover:bg-green-500 p-6 block">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
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