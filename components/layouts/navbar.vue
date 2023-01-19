<template>
  <div class="h-12 grid grid-cols-6 gap-4 header-topbar text-white ">
    <div class="mt-3 col-start-2 col-span-4 flex justify-between">
      <div class="hidden lg:block">
        <ul class="flex">
          <li>
            <span>
              <i class="fa fa-phone-alt text-blue-400 px-2"></i>
            </span>
            <a href="tel:+(354) 6800 37849"> +(354) 6800 37849</a>
          </li>

          <li class="ml-3">
            <span>
              <i class="fa fa-envelope text-blue-400 px-2"></i>
            </span>
            <a href="malito:hello@edumel.com" class="ml-2">hello@edumel.com</a>
          </li>
        </ul>
      </div>

      <div class="flex">
        <ul class="flex mr-5">
          <li class="px-2 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li class="px-2 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li class="px-2 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
          <li class="px-2 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-pinterest"></i></a></li>
          <li class="px-2 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>

        <ul class="flex ">
          <li class="px-2 text-blue-400"><a href="#"><i class="fa fa-user-alt"></i></a>
          </li>
          <li>
            <button href="#" class="text-gray-400 hover:text-white px-2 rounded-md text-sm font-medium">
              Login
            </button>
          </li>

          <li class="px-1">
            |
          </li>
          <li>
            <button href="#" class="text-gray-400 hover:text-white px-2 rounded-md text-sm font-medium">
              register
            </button>
          </li>
        </ul>
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

<style scoped>
.header-topbar {
  font-size: 14px;
  background: #031F42;
}
</style>