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
    this.indexSelect(this.$route.params.cid);
  }
  // 分类action
  async indexSelect(pid: string) {
    try {
      await (this.$refs.books as any).getBookInfo(pid);
    } catch (error) {
      //
    }
  }
  /* 生命钩子 START */
  mounted() {
    this.fetchData();
  }
}
