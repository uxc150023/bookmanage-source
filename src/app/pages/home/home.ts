import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IHomePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "home",
})
export default class HomePage extends mixins(BasePage) implements IHomePage {

  title: string = "Home";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
