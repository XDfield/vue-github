<template>
  <div @click="scrollTop(step)" :class="{show: isActive}">
    <v-icon name="caret-up" scale="3"></v-icon>
  </div>
</template>

<script>
import 'vue-awesome/icons/caret-up'

export default {
  props: {
    step: {
      // 此数据是控制动画快慢的
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  created () {
    let vm = this
    window.onscroll = function () {
      if (document.body.scrollTop > 500) {
        vm.isActive = true
      } else {
        vm.isActive = false
      }
    }
  },
  methods: {
    scrollTop (i) {
      document.body.scrollTop -= i
      if (document.body.scrollTop > 0) {
        var c = setTimeout(() => this.scrollTop(i), 16)
      } else {
        clearTimeout(c)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  opacity: 0;
  width: 55px;
  height: 55px;
  text-align: center;
  background-color: #444;
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  right: -55px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #007bff;

    /deep/ svg {
      color: white;
    }
  }

  /deep/ svg {
    color: #181818;
  }
}
.show {
  opacity: 1;
  right: 20px;
}
</style>
