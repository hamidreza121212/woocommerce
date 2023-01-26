<template>
    <div>

        <!-- <h2>Detail of Products {{ slug }}</h2> -->

        <div>
            {{ filtersList }}
        </div>



        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero quibusdam repudiandae sint nobis
            veritatis ullam non quam architecto odit omnis consequatur aut facilis at impedit, dignissimos, sunt
            consectetur est.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero quibusdam repudiandae sint nobis
            veritatis ullam non quam architecto odit omnis consequatur aut facilis at impedit, dignissimos, sunt
            consectetur est.</p>

    </div>
</template>

<script>
import { useFiltersStore } from '~/store/filters'

export default defineComponent({
  setup() {
    const filtersStore = useFiltersStore()
    const filtersList = filtersStore.filtersList

    return { filtersList }
  },
})
</script>

<style scoped>

</style>