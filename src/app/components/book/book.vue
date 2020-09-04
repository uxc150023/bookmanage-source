<template>
  <div class="comp-module">
    <el-row style="min-height: calc(100vh - 134px)">
      <div style="margin-bottom: 30px;text-align: center;">
        <el-input
          placeholder="通过书名或作者搜索..."
          v-model="searchKey"
          class="input-with-select"
          style="width: 480px"
          @keyup.enter.native="searchClick"
        >
          <el-button slot="append" icon="el-icon-search" @click="searchClick"
            >搜索</el-button
          >
        </el-input>

        <el-button
          type="primary"
          icon="el-icon-plus"
          class="fl"
          @click="isVisiable = true"
          >添加图书</el-button
        >
      </div>

      <el-card
        style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px"
        class="book"
        bodyStyle="padding:10px"
        v-for="item in books"
        :key="item.id"
      >
        <div class="cover" shadow="hover" @click="showDialog(item)">
          <img :src="item.cover" alt="封面" />
        </div>
        <div class="info">
          <div class="title">
            <a href="">{{ item.title }}</a>
          </div>
        </div>
        <div class="author">
          {{ item.author }}
          <em class="el-icon-delete fr" @click="deleteBook(item.id)"></em>
        </div>
      </el-card>

      <!-- <el-tooltip
        effect="dark"
        placement="left"
        v-for="item in books"
        :key="item.id"
      >
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">
          {{ item.title }}
        </p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{ item.author }}</span> / <span>{{ item.date }}</span> /
          <span>{{ item.press }}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">
          {{ item.abs }}
        </p>

        <el-card
          style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px"
          class="book"
          bodyStyle="padding:10px"
        >
          <div class="cover" shadow="hover" @click="showDialog(item)">
            <img :src="item.cover" alt="封面" />
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{ item.title }}</a>
            </div>
          </div>
          <div class="author">{{ item.author }}</div>

          <em class="el-icon-delete" @click="deleteBook(item.id)"></em>
        </el-card>
      </el-tooltip> -->
    </el-row>
    <el-row>
      <div class="ta-center">
        <el-pagination
          background
          @current-change="fetchData"
          :current-page.sync="paginationInfo.pages"
          :page-size="paginationInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          :total="paginationInfo.totalSize"
        ></el-pagination>
      </div>
    </el-row>

    <el-dialog
      :title="addBook"
      custom-class="common-dialog form-big"
      :close-on-click-modal="false"
      :visible.sync="isVisiable"
      @close="close"
    >
      <edit-form ref="editForm" @getBookInfo="getBookInfo"></edit-form>
      <div class="text-right" slot="footer">
        <el-button @click="isVisiable = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./book.ts"></script>
<style lang="scss" scoped>
$color: #333;
.comp-module {
  color: $color;
  font-size: 0.6rem;

  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:focus {
    color: #3377aa;
  }
}
</style>
