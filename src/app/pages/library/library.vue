<template>
  <div class="page-module">
    <el-container>
      <el-aside style="width: 200px;margin-top: 20px">
        <switch></switch>
        <side-menu></side-menu>
      </el-aside>
      <el-main>
        <book class="books-area"></book>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" src="./library.ts"></script>
<style lang="scss" scoped>
.page-module {
  .books-area {
    // width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
