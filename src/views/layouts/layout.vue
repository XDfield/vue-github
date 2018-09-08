<template>
  <div id="wrapper">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from "./header";

export default {
  components: {
    HeaderView
  }
};
</script>
