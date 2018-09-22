<template>
  <div class="my-home">
    <div class="my-home-title">
      <h2><v-icon 
        name="window-restore" 
        scale="2"/> 最近项目</h2>
    </div>
    <div class="card-columns">
      <div 
        v-for="repo in repos" 
        :key="repo.id" 
        class="card mb-3">
        <div class="card-header">
          <img 
            :src="repo.owner.avatar_url" 
            :alt="repo.owner.login" 
            class="my-img-thumbnail">
          <div class="title-and-username">
            <h5>{{ repo.name }}</h5>
            <p>{{ repo.owner.login }}</p>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">{{ repo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/window-restore'

export default {
  data () {
    return {
      repos: []
    }
  },
  created () {
    this.showPublicRepos()
  },
  methods: {
    async showPublicRepos () {
      const repos = await this.$axios.$get('/repositories')
      this.repos = repos
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #292b31;
  &:hover {
    background-color: #2e3138;
    box-shadow: 0px 10px 30px -10px black;
  }
}
.my-home-title {
  display: flex !important;
  margin-bottom: 20px;
}
.card-header {
  display: flex;
  white-space: nowrap;
}
.my-img-thumbnail {
  height: 50px;
  border-radius: 5px !important;
  margin-right: 15px;
}
.title-and-username {
  padding-right: 15px;
  overflow: hidden;
  text-overflow: ellipsis;

  /deep/ h5 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /deep/ p {
    margin-bottom: 0;
    color: #b9b9b9;
  }
}
</style>
