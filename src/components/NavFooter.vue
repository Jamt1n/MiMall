<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/Jamt1n" target="_blank">Jamtin主页</a><span>|</span>
      <a href="https://github.com/Jamt1n" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="https://github.com/Jamt1n" target="_blank">React全家桶课程</a><span>|</span>
      <a href="https://github.com/Jamt1n" target="_blank">微信支付专项课程</a><span>|</span>
      <a href="https://github.com/Jamt1n" target="_blank">配套课程：Java通用型支付+电商平台双系统实战</a>
    </div>
    <div class="copyright">Copyright ©2020<span> mi.futurefe.com </span>All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
}
</script>

<style lang="scss">
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      display: inline-block;
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    font-weight: bold;
    span {
      color: #ff6600;
    }
  }
}

</style>
