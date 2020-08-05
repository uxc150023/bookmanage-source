import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { PaginationInfo } from "../../core/domain/PaginationInfo";
import { BookmanageService } from "../../core/services/bookmanage.serv";
import BasePage from "../BasePage";

const bookInfo = {
  author: "",
  id: "",
  name: "",
  pages: "",
  price: "",
  publish: "",
};
interface IBookManagePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "bookManage",
})
export default class BookManagePage extends mixins(BasePage)
  implements IBookManagePage {
  title: string = "BookManage";
  @AutowiredService
  bookmanageService: BookmanageService;
  paginationInfo = new PaginationInfo(10);
  pageSize: number = 0;
  total: number = 0;
  loading: boolean = false;
  tableData: any[] = [];
  bookInfo: any = {};
  isVisiable: boolean = false;

  // 校验规则
  bookRules: any = {
    author: [{ required: true, message: "作者姓名不能为空", trigger: "blur" }],
    name: [{ required: true, message: "图书名称不能为空", trigger: "blur" }],
    price: [{ required: true, message: "价格不能为空", trigger: "blur" }],
    publish: [{ required: true, message: "出版社不能为空", trigger: "blur" }],
  };

  fetchData() {
    this.getBookAll();
  }

  async getBookAll() {
    try {
      const res = await this.bookmanageService.getBookAll(this.paginationInfo);
      this.tableData = res.content;
      this.paginationInfo.totalSize = res.totalElements;
    } catch (error) {
      //
    }
  }

  async getBookInfo(id: number) {
    try {
      const res = await this.bookmanageService.getBookInfo(id);
      this.bookInfo = res;
    } catch (error) {
      //
    }
  }

  handleSizeChange(val: number) {
    this.paginationInfo.pages = 1;
    this.paginationInfo.pageSize = val;
    this.fetchData();
  }

  async edit(row: any) {
    //
    this.getBookInfo(row.id);
  }
  /* 生命钩子 START */
  mounted() {
    //
    this.fetchData();
  }
}
