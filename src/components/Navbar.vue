<template>
  <div>
    <header>
      <router-link class="navbar-brand" :to="{ name: 'main' }"
        >毛小孩星球</router-link
      >
      <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link
              :to="{ name: 'activity' }"
              class="nav-link"
              href="#adoption"
              >近期活動</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'dog-profile' }" class="nav-link"
              >狗兒相片</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'contact' }"
              class="nav-link"
              href="#adoption"
              >領養資訊</router-link
            >
          </li>
        </ul>
      </nav>
      <label class="navbar-toggle-label" for="navbar-toggle">
        <span class="hamburger"></span>
      </label>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>