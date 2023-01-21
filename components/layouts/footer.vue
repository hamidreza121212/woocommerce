<template>
  <footer class="text-center lg:text-left footer-bg text-gray-100">
    <div class="py-10 md:py-28 md:text-left max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-7 xl:grid-cols-8 gap-5 justify-items-center">
        <div class="px-2 xl:col-span-3 md:col-span-3">
          <img src="~/assets/images/logo-white.png">
          <p class="mt-8">
            Edumel is a Bootstrap Template for online 
            courses education websites support multiple courses
          </p>
        </div>
        <div class="xl:col-span-1 md:col-span-2">
          <h6
            class="uppercase mb-4 flex justify-center md:justify-start"
          >
          Explore
          </h6>
          <p v-for="item in Explore" :key="item.id" class="mb-4 hover:border-b hover:text-gray-200">
            <NuxtLink :to="item.link" class="text-gray-600">{{ item.name }}</NuxtLink>
          </p>
        </div>

        <div class="xl:col-span-1 md:col-span-2">
          <h6
            class="uppercase mb-4 flex justify-center md:justify-start"
          >
            Products
          </h6>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Angular</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">React</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-gray-600">Laravel</a>
          </p>
        </div>

        <div class="xl:col-span-1 md:col-span-2">
          <h6
            class="uppercase mb-4 flex justify-center md:justify-start"
          >
            Useful links
          </h6>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Pricing</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Settings</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-gray-600">Help</a>
          </p>
        </div>
        <div class="xl:col-span-2 md:col-span-4">
          <h6
            class="uppercase mb-4 flex justify-center md:justify-start"
          >
            Contact
          </h6>
          <p class="flex items-center justify-center md:justify-start mb-4">
            <span>
              <i class="fa fa-search mr-4"></i>
            </span>
            New York, NY 10012, US
          </p>

          <p class="flex items-center justify-center md:justify-start mb-4">
            <span>
              <i class="fa fa-search mr-4"></i>
            </span>
            New York, NY 10012, US
          </p>

          <p class="flex items-center justify-center md:justify-start mb-4">
            <span>
              <i class="fa fa-search mr-4"></i>
            </span>
            New York, NY 10012, US
          </p>

          <p class="flex items-center justify-center md:justify-start mb-4">
            <span>
              <i class="fa fa-search mr-4"></i>
            </span>
            New York, NY 10012, US
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between p-2 border-t border-gray-600"
    >
      <div class="hidden lg:block">
        <span>© 2021 Edumel All rights reserved by Dreambuzz</span>
      </div>

      <div class="flex justify-center">
        <button
          href="#"
          class="text-gray-400 hover:text-white p-1 m-1 rounded-md border"
        >
          Login
        </button>
        <button
          href="#"
          class="text-gray-400 hover:text-white p-1 m-1 rounded-md border"
        >
          Login
        </button>
        <button
          href="#"
          class="text-gray-400 hover:text-white p-1 m-1 rounded-md border"
        >
          Login
        </button>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      
      Explore: [
        { id: "1", name: "About us", link: "/" },
        { id: "2", name: "Contact us", link: "/about" },
        { id: "3", name: "Services", link: "/sdf" },
        { id: "4", name: "Support", link: "/sdf#" },
      ],
      Categories: [
        { id: "1", name: "SEO Business", link: "/" },
        { id: "2", name: "Digital Marketing", link: "/about" },
        { id: "3", name: "Graphic Design", link: "/sdf" },
        { id: "4", name: "Social Marketing", link: "/sdf#" },
      ],
      Links: [
        { id: "1", name: "News & Blogs", link: "/#" },
        { id: "2", name: "Privacy Policy", link: "/#" },
        { id: "3", name: "Support", link: "/#" },
        { id: "4", name: "Return Policy", link: "/#" },
      ],
      Main: [
        { id: "1", name: "Address", content: "address, kjhk, post + 54654"},
        { id: "1", name: "Phone", content: "+0800 327 8534"},
        { id: "1", name: "Email", content: "support@edumel.com"},
      ],
    };
  },
}

</script>

<style scoped>
.footer-bg {
  font-size: 14px;
  background: #120f2d;
}
.footer-bg1{
  max-width: 1170px;

}
</style>
