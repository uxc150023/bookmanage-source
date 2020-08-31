import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
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
export default class LibraryPage extends mixins(BasePage) implements ILibraryPage {

  title: string = "Library";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
