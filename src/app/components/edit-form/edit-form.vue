<template>
  <div class="comp-module">
    <div>
      <el-form
        v-model="form"
        ref="dataForm"
        label-position="right"
        label-width="68px"
      >
        <el-form-item label="书名" prop="title">
          <el-input
            v-model="form.title"
            autocomplete="off"
            placeholder="不加《》"
          ></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="form.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版日期" prop="date">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="press">
          <el-input v-model="form.press" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="封面" prop="cover">
          <el-input
            v-model="form.cover"
            autocomplete="off"
            placeholder="图片 URL"
          ></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="abs">
          <el-input
            type="textarea"
            v-model="form.abs"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="cid">
          <el-select v-model="form.category.id" placeholder="请选择分类">
            <el-option label="文学" :value="1"></el-option>
            <el-option label="流行" :value="2"></el-option>
            <el-option label="文化" :value="3"></el-option>
            <el-option label="生活" :value="4"></el-option>
            <el-option label="经管" :value="5"></el-option>
            <el-option label="科技" :value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input
            type="hidden"
            v-model="form.id"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" src="./edit-form.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}
</style>
