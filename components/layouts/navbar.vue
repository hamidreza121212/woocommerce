<template>
  <div class="h-20 sm:h-12 grid md:grid-cols-2 grid-cols-1 gap-4 header-topbar text-white justify-items-center">
    <div class="mt-3 hidden md:block">
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
    <div class="mt-3">
      <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2">
        <div class="">
          <ul class="flex">
            <li class="px-1 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="px-1 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="px-1 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            <li class="px-1 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-pinterest"></i></a></li>
            <li class="px-1 text-gray-400 hover:text-white"><a href="#"><i class="fab fa-youtube"></i></a></li>
          </ul>

        </div>
        <div class="">
          <ul class="flex">
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
  </div>


  <nav class="flex items-center justify-between flex-wrap sticky h-28 top-0 w-full bg-white py-8 px-10">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>




  <nav class="sticky h-28 top-0 w-full bg-white py-8 px-10">

    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="https://flowbite.com" class="flex items-center">
        <img src="~/assets/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Flowbite</span>
      </a>
      <div class="flex items-center lg:order-2">
        <a href="#"
          class="text-black dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
          in</a>
        <a href="#"
          class="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
          started</a>
        <button data-collapse-toggle="mobile-menu-2" type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>




      <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

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