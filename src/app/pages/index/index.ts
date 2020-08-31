import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IIndexPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "index",
})
export default class IndexPage extends mixins(BasePage) implements IIndexPage {
  title: string = "Index";
  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
