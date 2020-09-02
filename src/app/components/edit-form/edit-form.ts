import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { BookmanageService } from "../../core/services/bookmanage.serv";

@Component({
  components: {},
})
export default class EditFormComp extends Vue {
  @AutowiredService
  bookmanageService: BookmanageService;

  form: any = {
    id: "",
    title: "",
    author: "",
    date: "",
    press: "",
    cover: "",
    abs: "",
    category: {
      id: "",
      name: "",
    },
  };

  @Prop({ default: "" })
  id: string;

  // 获取book详情
  async getBookInfo() {
    try {
      const res = await this.bookmanageService.getCategories(this.id);
      this.form = res[0];
    } catch (error) {
      //
    }
  }

  // 编辑
  async save() {
    try {
      await this.bookmanageService.bookUpdata(this.form);
      this.$message.success("修改成功");
    } catch (error) {
      //
    }
  }
  /* 生命钩子 START */
  mounted() {}
}
