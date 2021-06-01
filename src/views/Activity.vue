<template>
  <div>
    <Navbar />
    <div class="container top-position">
      <p>近期活動</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./../components/Navbar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.container {
  height: 200px;
}
.top-position {
  padding-top: 92px;
}
</style>
