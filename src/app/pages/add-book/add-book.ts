import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IAddBookPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "addBook",
})
export default class AddBookPage extends mixins(BasePage) implements IAddBookPage {

  title: string = "AddBook";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
