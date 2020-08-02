import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IBookUpdatePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "bookUpdate",
})
export default class BookUpdatePage extends mixins(BasePage) implements IBookUpdatePage {

  title: string = "BookUpdate";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
