<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javasciprt:;">小米商城</a>
          <a href="javasciprt:;">MUI</a>
          <a href="javasciprt:;">云服务</a>
          <a href="javasciprt:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javasciprt:;">登录</a>
          <a href="javasciprt:;">注册</a>
          <a href="javasciprt:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>

<script>
export default {
  name: "nav-header"
}
</script>

<style lang="scss">
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container {
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #FF6600;
          color: #ffffff;
          text-align: center;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url("/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }

  }
</style>
