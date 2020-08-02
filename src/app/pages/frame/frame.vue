<template>
  <el-container class="frame-module">
    <el-aside width="200px">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" src="./frame.ts"></script>
<style lang="scss" scoped>
$color: #333;
.frame-module {
  min-width: 1200px;
}
.el-container {
  min-height: 100vh;
}

.logo {
  img {
    display: block;
    margin: 16px auto;
  }
}
.el-aside {
  background: #2c3e5b;
}
.el-header {
  background: #ffffff;
}
.tdc-entry {
  width: 104px;
  height: 36px;
  line-height: 36px;
  border-radius: 3px;
  border: 1px solid rgba(220, 223, 230, 1);
  font-weight: 500;
  color: rgba(52, 52, 52, 1);
  font-size: 14px;
  margin: 12px 44px;
  text-align: center;
  cursor: pointer;
  transition: border 0.3s linear;
  img {
    vertical-align: middle;
  }
  &:hover {
    border-color: #5696f5;
  }
}
.site-avatar {
  margin-top: 40px;
  text-align: center;
  color: #9facc9;
  font-size: 16px;
  img {
    border-radius: 50%;
  }
  h4 {
    margin: 14px 0 0;
    font-size: 16px;
    line-height: 22px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    word-break: break-all;
  }
  &::after {
    display: block;
    content: "";
    position: relative;
    width: 80%;
    margin: 30px auto 0;
    height: 1px;
    background: #364866;
  }
}
.el-main {
  max-width: calc(100vw - 200px);
}
</style>
