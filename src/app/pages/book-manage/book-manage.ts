import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { PaginationInfo } from "../../core/domain/PaginationInfo";
import { BookmanageService } from "../../core/services/bookmanage.serv";
import BasePage from "../BasePage";

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
  fetchData() {
    //
    this.getBookAll();
  }

  async getBookAll() {
    // try {
    const res = await this.bookmanageService.getBookAll(this.paginationInfo);
    this.tableData = res.data.content;
    // this.paginationInfo.totalSize = res.data.totalElements;
    // } catch (error) {
    //   console.log("111", error);
    // }
  }

  handleSizeChange(val: number) {
    this.paginationInfo.pages = 1;
    this.paginationInfo.pageSize = val;
    this.fetchData();
  }
  /* 生命钩子 START */
  mounted() {
    //
    this.fetchData();
  }
}
