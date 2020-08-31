<template>
  <div class="comp-module">
    <el-menu
      :default-active="activeMenu"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px"
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <a href="#nowhere" style="color: #222;float: right;padding: 20px;"
        >更多功能</a
      >
      <i
        class="el-icon-menu"
        style="float:right;font-size: 45px;color: #222;padding-top: 8px"
      ></i>
      <span
        style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold"
        >xxxxxxxxxx</span
      >
    </el-menu>
  </div>
</template>
<script lang="ts" src="./nav-menu.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}
</style>
