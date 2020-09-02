import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { PaginationInfo } from "../../core/domain/PaginationInfo";
import { BookmanageService } from "../../core/services/bookmanage.serv";
import BasePage from "../BasePage";

interface ILibraryPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "library",
})
export default class LibraryPage extends mixins(BasePage)
  implements ILibraryPage {
  title: string = "Library";
  @AutowiredService
  bookmanageService: BookmanageService;
  paginationInfo = new PaginationInfo(10);

  tableData: any[] = [];
  fetchData() {
    // this.getBookAll();
  }

  // async getBookAll() {
  //   try {
  //     const res = await this.bookmanageService.getBookAll(this.paginationInfo);
  //     this.tableData = res.content;
  //     this.paginationInfo.totalSize = res.totalElements;
  //   } catch (error) {
  //     //
  //   }
  // }
  /* 生命钩子 START */
  mounted() {
    this.fetchData();
  }
}
