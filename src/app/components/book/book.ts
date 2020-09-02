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
  id: string = "";
  searchKey: string = "";
  // @Prop({
  //   default: {},
  // })
  // bookInfo: any;

  fetchData() {
    this.getBookAll();
  }

  // 获取booklist
  async getBookAll() {
    try {
      const res = await this.bookmanageService.getBookAll(this.paginationInfo);
      this.books = res;
      // this.paginationInfo.totalSize = res.totalElements;
    } catch (error) {
      //
    }
  }

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

  async save() {
    await (this.$refs.editForm as any).save();
    this.isVisiable = false;
    this.fetchData();
  }
  close() {
    //
  }
  open() {
    this.$nextTick(() => {
      (this.$refs.editForm as any).getBookInfo();
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
    // this.books = [
    //   {
    //     cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
    //     title: "三体",
    //     author: "刘慈欣",
    //     date: "2019-05-05",
    //     press: "重庆出版社",
    //     abs:
    //       "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
    //   },
    // ];
  }
}
