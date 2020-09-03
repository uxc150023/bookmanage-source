import { mixins } from "vue-class-component";
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";

import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { ComBaseComp } from "../../core/ComBaseComp";
import { BookInfo } from "../../core/domain/BookInfo";
import { PaginationInfo } from "../../core/domain/PaginationInfo";
import { BookmanageService } from "../../core/services/bookmanage.serv";
@Component({
  components: {},
})
export default class BookComp extends mixins(ComBaseComp) {
  books: any[] = [];
  @AutowiredService
  bookmanageService: BookmanageService;
  paginationInfo = new PaginationInfo(10);
  isVisiable: boolean = false;
  addBook: string = "编辑";
  searchKey: string = "";

  fetchData() {
    // this.getBookAll();
  }

  // 获取booklist
  // async getBookAll() {
  //   try {
  //     const res = await this.bookmanageService.getBookAll(this.paginationInfo);
  //     this.books = res;
  //     // this.paginationInfo.totalSize = res.totalElements;
  //   } catch (error) {
  //     //
  //   }
  // }

  // 查询
  async searchClick() {
    try {
      const res = await this.bookmanageService.searchResult(this.searchKey);
      this.books = res;
      // this.paginationInfo.totalSize = res.totalElements;
    } catch (error) {
      //
    }
  }

  // 分类获取booklist
  async getBookInfo(pid: string) {
    try {
      const res = await this.bookmanageService.getCategories(pid);
      this.books = res;
    } catch (error) {
      this.$message.error(error);
    }
  }

  async save() {
    await (this.$refs.editForm as any).save();
    this.isVisiable = false;
    // this.fetchData();
  }
  async close() {
    await (this.$refs.editForm as any).clear();
  }

  showDialog(item: any) {
    this.isVisiable = true;
    this.$nextTick(async () => {
      await (this.$refs.editForm as any).initFormData(item);
    });
  }

  handleSizeChange(val: number) {
    this.paginationInfo.pages = 1;
    this.paginationInfo.pageSize = val;
    this.fetchData();
  }
  /* 生命钩子 START */
  mounted() {
    this.fetchData();
  }
}
