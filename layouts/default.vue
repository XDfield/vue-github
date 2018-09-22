<template>
  <div>
    <header-view/>
    <div class="my-page-wrapper">
      <nuxt/>
    </div>
    <scroll-top/>
  </div>
</template>

<script>
import HeaderView from '~/components/layouts/header'
import ScrollTop from '~/components/layouts/scrollTop'

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
