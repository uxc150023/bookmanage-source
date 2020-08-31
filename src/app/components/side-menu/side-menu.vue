<template>
  <div class="comp-module">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      @select="handleSelectMItem"
    >
      <div v-for="(menu, index) in menuList" :key="index">
        <el-menu-item
          :index="menu.path"
          v-if="!menu.children && hasMenuPermission(menu.path)"
        >
          <i :class="menu.icon"></i>
          {{ menu.name }}
        </el-menu-item>

        <el-submenu
          :index="menu.path"
          v-show="validateShowSubMenu(menu.children)"
        >
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.name }}</span>
          </template>
          <el-menu-item
            :index="child.path"
            v-show="hasMenuPermission(child.path)"
            v-for="(child, i) in menu.children"
            :key="i"
          >
            <i :class="menu.icon"></i>
            <span>{{ child.name }}</span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script lang="ts" src="./side-menu.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}
</style>
