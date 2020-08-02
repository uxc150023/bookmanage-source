import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IAboutPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "about",
})
export default class AboutPage extends mixins(BasePage) implements IAboutPage {

  title: string = "About";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
