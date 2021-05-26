<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    // 通过easy-mock平台实现
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // });
    // 本地集成mockjs实现数据mock

    this.axios.get("/user/login").then(res => {
      this.res = res;
    });
    // 本地加载请求json文件的形式
    // this.axios.get("/mock/user/login.json").then(res => {
    //   this.res = res;
    // });
  }
};
</script>

<style></style>
