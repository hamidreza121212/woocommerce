<template>
  <footer class="text-center lg:text-left footer-bg text-gray-100">
    <div class="py-10 md:py-28 md:text-left max-w-screen-xl lg:max-w-screen-xl md:max-w-screen-md mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-7 xl:grid-cols-8 gap-5 justify-items-center">
        <div class="px-2 xl:col-span-3 md:col-span-3">
          <img class="" src="~/assets/images/logo-white.png">
          <p class="mt-8 text-gray-400">
            Edumel is a Bootstrap Template for online
            courses education websites support multiple courses
          </p>
        </div>
        <div class="xl:col-span-1 md:col-span-2">
          <h4 class="font-bold mb-4 flex justify-center md:justify-start">
            Explore
          </h4>
          <p v-for="item in Explore" :key="item.id" class="mb-4 hover:animate-bounce">
            <NuxtLink :to="item.link" class="text-gray-400 hover:text-white">{{ item.name }}</NuxtLink>
          </p>
        </div>

        <div class="xl:col-span-1 md:col-span-2">
          <h6 class="font-bold mb-4 flex justify-center md:justify-start">
            Programs
          </h6>
          <p v-for="item in Programs" :key="item.id" class="mb-4 hover:animate-bounce">
            <NuxtLink :to="item.link" class="text-gray-400 hover:text-white">{{ item.name }}</NuxtLink>
          </p>
        </div>

        <div class="xl:col-span-1 md:col-span-2">
          <h6 class="font-bold mb-4 flex justify-center md:justify-start">
            Links
          </h6>
          <p v-for="item in Links" :key="item.id" class="mb-4 hover:animate-bounce">
            <NuxtLink :to="item.link" class="text-gray-400 hover:text-white">{{ item.name }}</NuxtLink>
          </p>
        </div>
        <div class="xl:col-span-2 md:col-span-4">
          <div v-for="item in MainDetail" :key="item.id">


            <h7 class="font-medium mb-4 flex justify-center md:justify-start">
              <span>
                <i :class="item.icon" class="mr-2"></i>
              </span>
              {{ item.name }}
            </h7>
            <p class="flex text-gray-400 items-center justify-center md:justify-start mb-4">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="border-t border-gray-600 h-20 md:h-14">

      <div class="grid grid-cols-1 md:grid-cols-2 py-4 text-center">

        <div class="hidden lg:block text-gray-400">
          <span>© 2021 Edumel All rights reserved by <a class="text-white">Dreambuzz</a></span>
        </div>


        <div class="grid grid-cols-3 divide-gray-500 divide-x">
          <div>
            <button href="#" class="text-gray-400 hover:text-white">
              Privacy Policy
            </button>

          </div>
          <div>
            <button href="#" class="text-gray-400 hover:text-white">
              Join Us
            </button>

          </div>
          <div>
            <button href="#" class="text-gray-400 hover:text-white">
              Terms of Service
            </button>

          </div>

        </div>
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
      Programs: [
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
      MainDetail: [
        { id: "1", name: "Address", content: "address, kjhk, post + 54654", icon: "fas fa-map-marker-alt" },
        { id: "1", name: "Phone", content: "+0800 327 8534", icon: "fa fa-phone-alt" },
        { id: "1", name: "Email", content: "support@edumel.com", icon: "fa fa-envelope" },
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

.footer-bg1 {
  max-width: 1170px;

}
</style>
