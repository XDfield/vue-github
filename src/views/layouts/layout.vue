<template>
  <div>
    <header-view></header-view>
    <div class="my-page-wrapper">
      <router-view></router-view>
    </div>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import HeaderView from './header'
import ScrollTop from './scrollTop'

export default {
  components: {
    HeaderView,
    ScrollTop
  }
}
</script>

<style lang="scss" scoped>
.my-page-wrapper {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
