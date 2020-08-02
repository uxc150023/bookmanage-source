import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IFramePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "frame",
})
export default class FramePage extends mixins(BasePage) implements IFramePage {

  title: string = "Frame";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
