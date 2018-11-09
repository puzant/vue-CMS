<template>
  <div class="home">
    <NavBar />
    <TabsFetch />
  </div>
</template>

<script>
// @ is an alias to /src
import TabsFetch from '@/components/getTabs.vue'
import NavBar from '@/components/navbar.vue'


export default {
  name: 'home',
  components: {
    TabsFetch,
    NavBar
  }
}
</script>
