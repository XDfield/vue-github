<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a href="/#/home" class="navbar-brand">
        {{ brand }}
      </a>
      <form class="form-inline my-2 my-lg-0">
        <div class="input-group">
          <input class="my-nav-item" type="text" placeholder="搜索" aria-label="搜索">
          <span><v-icon name="brands/github-alt" scale="2"></v-icon></span>
        </div>
      </form>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <v-icon name="align-justify" :inverse="true"></v-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <button class="btn my-nav-item login-btn">
          <v-icon name="user"></v-icon> 登陆
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      brand: "Vue-Github"
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  box-shadow: 0px 5px 5px -5px black;
}
.my-nav-item {
  height: 50px;
  border: none;
  outline: none;
  border-radius: 0;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
input {
  width: 300px;
  color: #c0c0c0 !important;
  padding-left: 60px;
  background: rgba(255, 255, 255, 0.08);

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.18);
  }

  & ~ span {
    position: absolute;
    color: #7f7f7f;
    margin: 10px 15px;
  }
}
.login-btn {
  color: #c0c0c0;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  /deep/ svg {
    margin-right: 5px;
  }
}
</style>
