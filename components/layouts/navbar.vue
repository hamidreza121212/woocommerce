<template>
  <!-- top header bar -->
  <div
    class="h-20 sm:h-12 grid md:grid-cols-2 grid-cols-1 gap-4 header-topbar text-white justify-items-center"
  >
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
            <li
              v-for="item in SocialNetworkLink"
              :key="item.id"
              class="px-1 text-gray-400 hover:text-white"
            >
              <a :href="item.link"><i :class="item.name"></i></a>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="flex">
            <li class="px-2 text-blue-400">
              <a href="#"><i class="fa fa-user-alt"></i></a>
            </li>
            <li>
              <button
                href="#"
                class="text-gray-400 hover:text-white px-2 rounded-md text-sm font-medium"
              >
                Login
              </button>
            </li>

            <li class="px-1">|</li>
            <li>
              <button
                href="#"
                class="text-gray-400 hover:text-white px-2 rounded-md text-sm font-medium"
              >
                register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- main header -->
  <nav class="sticky h-20 md:h-32 top-0 w-full bg-white py-8 px-10 shadow-lg">
    <div class="flex items-center justify-between">
      <div>
        <ul class="flex space-x-8">
          <!-- Header logo -->
          <li>
            <img src="~/assets/images/logo.png" class="w-28 md:w-40 md:h-14" />
          </li>
          <!-- Header logo End -->
          <li class="hidden md:block">
            <h1>kj</h1>
          </li>
        </ul>
      </div>

      <!-- Mobile toggle -->
      <div class="lg:hidden w-5">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden lg:block">
        <ul class="flex space-x-8">
          <li v-for="menu in leftMenu" v-bind:key="menu.id">
            <nuxt-link :to="menu.link" class="font-bold hover:text-red-500">
              {{ menu.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <div>
            <img
              src="~/assets/images/logo.png"
              class="w-28 h-10 md:w-40 md:h-14"
            />
          </div>
        </span>

        <ul class="divide-y font-bold">
          <li v-for="menu in leftMenu" v-bind:key="menu.id">
            <nuxt-link
              :to="menu.link"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              {{ menu.name }}
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/login"
              @click="isOpen = false"
              class="my-8 w-full text-center font-medium cta inline-block bg-blue-900 hover:bg-blue-600 px-3 py-2 rounded text-white"
              >Sign in</nuxt-link
            >
          </li>
        </ul>

        <div class="follow">
          <p class="italic text-sm">follow us :</p>
          <div class="social flex space-x-3 mt-4">
            <a
              v-for="item in SocialNetworkLink"
              :key="item.id"
              :class="item.name"
              :href="item.link"
              class="hover:text-red-500 text-gray-700"
            ></a>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      leftMenu: [
        { id: "1", name: "Home", link: "/" },
        { id: "2", name: "About", link: "/about" },
        { id: "3", name: "Courses", link: "/sdf" },
        { id: "4", name: "Pages", link: "/sdf#" },
        { id: "4", name: "Blog", link: "/sdf" },
        { id: "4", name: "Contact", link: "/sdf" },
      ],
      SocialNetworkLink: [
        { id: "1", name: "fab fa-facebook-f", link: "/#" },
        { id: "2", name: "fab fa-twitter", link: "/#" },
        { id: "3", name: "fab fa-linkedin-in", link: "/#" },
        { id: "4", name: "fab fa-pinterest", link: "/#" },
        { id: "4", name: "fab fa-youtube", link: "/#" },
      ],
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style scoped>
.header-topbar {
  font-size: 14px;
  background: #031f42;
}

.router-link-exact-active {
  color: crimson;
}
</style>
