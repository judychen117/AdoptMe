<template>
  <div>
    <Navbar />
    <div class="container top-position">
      <p>
        因應中央及市府新冠肺炎防疫政策，新北市8間公立動物之家即日起不對外開放
      </p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Gathering Activity</th>
            <th scope="col">Gathering Time</th>
            <th scope="col">Gathering Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>送養會</td>
            <td>停辦</td>
            <td>--</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>送養會</td>
            <td>停辦</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div class="small-cap">
        <p>志工申請或有意願捐增物資者請電話詢問或到活動現場與工作人員洽談</p>
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
.table {
  margin-top: 3rem;
}
.small-cap {
  color: grey;
  position: relative;
}
.small-cap p {
  position: absolute;
  right: 0;
}
</style>
