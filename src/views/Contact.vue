<template>
  <div>
    <Navbar />
    <div class="container top-position">
      <div class="info">
        <p>中和區公立動物之家</p>
        <br />
        <p>聯絡電話：02－86685547</p>
        <p>營業時間：每週二~每週日 上午10點~12點 下午2點~4點</p>
        <p>地點：新北市中和區興南路三段100號</p>
        <p>PS.領養需年滿20歲，請攜帶身分證及硬式提籠</p>
      </div>
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
  height: 100vh;
}
.top-position {
  padding-top: 92px;
}
.info {
  margin-top: 3rem;
}
</style>
