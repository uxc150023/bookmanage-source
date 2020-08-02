<template>
  <div class="page-module">
    {{ title }}
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small"
            >修改</el-button
          >
          <el-button @click="deleteBook(scope.row)" type="text" size="small"
            >删除</el-button
          >
          <!--delete是关键字，不能自定义-->
        </template>
      </el-table-column>
    </el-table>
    <div class="fr m-top-20">
      <el-pagination
        class="fr m-top-20"
        @current-change="fetchData"
        :current-page.sync="paginationInfo.pages"
        :page-size="paginationInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        :total="paginationInfo.totalSize"
      ></el-pagination>
    </div>
  </div>
</template>
<script lang="ts" src="./book-manage.ts"></script>
<style lang="scss" scoped>
.page-module {
}
</style>
