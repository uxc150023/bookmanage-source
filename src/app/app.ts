import { Aside, Container, Footer, Header, Main } from "element-ui";
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";

// Register the router hooks with their names
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate", // for vue-router 2.2+
]);

@Component({
  components: {},
  computed: {},
})
export default class App extends Vue {
  item: any = {
    address: "上海市普陀区金沙江路 1518 弄",
    date: "2016-05-02",
    name: "王小虎",
  };
  tableData: any[] = [];
  /* 生命钩子 START */
  mounted() {
    //
  }
}
