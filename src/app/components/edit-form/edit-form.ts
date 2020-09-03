import { ElForm } from "element-ui/types/form";
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
import { BookInfo } from "../../core/domain/BookInfo";
import { BookmanageService } from "../../core/services/bookmanage.serv";

@Component({
  components: {},
})
export default class EditFormComp extends Vue {
  @AutowiredService
  bookmanageService: BookmanageService;
  bookInfo: BookInfo = new BookInfo();
  rules: any = {
    author: [{ message: "请填写作者名", required: true, trigger: "blur" }],
    cover: [{ message: "请填写封面地址", required: true, trigger: "blur" }],
    date: [{ message: "请填写出版日", required: true, trigger: "blur" }],
    title: [{ message: "请填写书名", required: true, trigger: "blur" }],
  };
  // 编辑
  async save() {
    try {
      await this.bookmanageService.bookUpdata(this.bookInfo);
      this.$message.success("操作成功");
      this.$emit("getBookInfo", this.bookInfo.category.id);
      this.$router.push({ params: { cid: this.bookInfo.category.id } });
    } catch (error) {
      this.$message.error(error);
    }
  }
  clear() {
    (this.$refs.bookInfo as ElForm).clearValidate();
    this.bookInfo = new BookInfo();
  }
  initFormData(bookInfo: any) {
    this.bookInfo = JSON.parse(JSON.stringify(bookInfo));
  }
  /* 生命钩子 START */
  mounted() {}
}
