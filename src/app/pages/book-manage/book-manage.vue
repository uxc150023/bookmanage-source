<template>
  <div class="page-module">
    <div class="filter-box m-bottom-20">
      <el-input
        size="medium"
        v-model="searchForm.searchKey"
        suffix-icon="el-icon-search"
        @change="
          paginationInfo.pages = 1;
          fetchData();
        "
        placeholder="请输入书名"
      >
      </el-input>

      <el-button
        class="fr"
        size="medium"
        @click="
          isVisiable = true;
          addBook = true;
        "
        icon="el-icon-plus"
        type="primary"
        >创建新书</el-button
      >
      <div style="clear:both"></div>
    </div>

    <div class="common-table">
      <el-table :data="tableData" style="width: 100%" v-loading="loading">
        <el-table-column label="编号" width="" type="index">
          <template slot-scope="scope">
            <p>{{ scope.$index + 1 }}</p>
          </template>
        </el-table-column>

        <el-table-column label="图书名" width="" prop="name">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
          </template>
        </el-table-column>

        <el-table-column label="作者" width="" prop="author">
          <template slot-scope="scope">
            <p>{{ scope.row.author }}</p>
          </template>
        </el-table-column>

        <el-table-column label="出版社" width="" prop="publish">
          <template slot-scope="scope">
            <p>{{ scope.row.publish }}</p>
          </template>
        </el-table-column>

        <el-table-column label="页数" width="" prop="pages">
          <template slot-scope="scope">
            <p>{{ scope.row.pages }}</p>
          </template>
        </el-table-column>

        <el-table-column label="价格" width="" prop="price">
          <template slot-scope="scope">
            <p>{{ scope.row.price }}</p>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button
              @click="deleteBook(scope.row.id)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="fr m-top-20">
      <el-pagination
        class="fr m-top-20"
        background
        @current-change="fetchData"
        :current-page.sync="paginationInfo.pages"
        :page-size="paginationInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        :total="paginationInfo.totalSize"
      ></el-pagination>
    </div>

    <el-dialog
      :title="addBook ? '新建' : '修改'"
      custom-class="common-dialog form-big"
      :close-on-click-modal="false"
      :visible.sync="isVisiable"
      @close="close"
    >
      <el-form
        size="medium"
        ref="bookForm"
        :model="bookInfo"
        label-position="right"
        :rules="bookRules"
        label-width="102px"
      >
        <el-form-item label="图书名" prop="name">
          <el-input v-model="bookInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="bookInfo.author"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="publish">
          <el-input v-model="bookInfo.publish"></el-input>
        </el-form-item>
        <el-form-item label="页数" prop="pages">
          <el-input v-model="bookInfo.pages"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="bookInfo.price"></el-input>
        </el-form-item>
      </el-form>

      <div class="text-right" slot="footer">
        <el-button @click="isVisiable = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./book-manage.ts"></script>
<style lang="scss" scoped>
.page-module {
}
</style>
