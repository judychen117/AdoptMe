<template>
  <div class="home">
    <Navbar />
    <section class="activity">
      <div class="container">
        <div class="banner-wrapper">
          <div class="main-banner background-image">
            <h1 class="banner-title">帶毛小孩回家吧</h1>
            <p class="banner-description">Bring them back home</p>
            <a href="#adoption" class="action">領養去</a>
          </div>
          <div class="sub-banner sub-banner-left background-image">
            <h3 class="banner-title">捐款送玩偶</h3>
            <p class="banner-description">NTD 100</p>
            <a href="#" class="action">捐款</a>
          </div>
          <div class="sub-banner sub-banner-right background-image">
            <h3 class="banner-title">捐款送狗骨頭</h3>
            <p class="banner-description">NTD 300</p>
            <a href="#" class="action">捐款</a>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <router-link :to="{ name: 'dog-profile' }" class="nav-link">
        <div class="album-wrapper">
          <div class="card">
            <img src="./../assets/dog-panda3.jpg" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">胖達</h3>
              <p class="card-description">水水男孩</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-Q-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">阿Q</h3>
              <p class="card-description">暖心女硬漢</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-mulan-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">花木蘭</h3>
              <p class="card-description">狗界愛因斯坦</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-mow-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">毛毛</h3>
              <p class="card-description">激情老奶奶</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-tiger.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">虎哥</h3>
              <p class="card-description">6 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-dodo2.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">多多</h3>
              <p class="card-description">5 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-mountain1.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">Mountain</h3>
              <p class="card-description">2 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-coco1.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">可可</h3>
              <p class="card-description">2 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-土豆-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">土豆</h3>
              <p class="card-description">3 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-cow-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">牛牛</h3>
              <p class="card-description">2 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-黑輪-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">黑輪</h3>
              <p class="card-description">3 歲</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/dog-巧克力-main.png" alt="" class="card-img" />
            <div class="card-text">
              <h3 class="card-title">巧克力</h3>
              <p class="card-description">2 歲</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="container">
      <div class="adoption-wrapper">
        <img
          src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
          alt=""
          class="adoption-image"
        />
        <div class="adoption-info">
          <h3 class="title">領養毛小孩</h3>
          <p class="description">用領養代替購買，帶毛小孩回家一起生活吧</p>
          <a href="javascript:void(0)" class="action">領養去</a>
        </div>
      </div>
    </div>
    <footer>
      <p>毛小孩星球 &copy; 2020</p>
    </footer>
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
