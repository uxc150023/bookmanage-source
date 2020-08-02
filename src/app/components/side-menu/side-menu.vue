<template>
  <div class="comp-module">
    {{ nameC }}
    <el-menu router :default-openeds="['0', '1']">
      <div v-for="(item, index) in $router.options.routes" :key="index">
        <el-submenu :index="index + ''" v-if="item.show">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.children"
            :key="index2"
            :index="item2.path"
            :class="$route.path == item2.path ? 'is-active' : ''"
          >
            <span>{{ item2.name }}</span>
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
