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

@Component({
  components: {},
})
export default class NavMenuComp extends Vue {
  activeMenu: string = "/index";
  navList: any[] = [
    { name: "/main", navItem: "首页" },
    { name: "/jotter", navItem: "笔记本" },
    { name: "/library", navItem: "图书馆" },
    { name: "/admin", navItem: "个人中心" },
  ];

  @Watch("$route.path")
  routrChange(valueNew: string, valueOld: string) {
    console.log("====", valueNew);
    const m = valueNew.match(/^\/\w+/);
    if (m != null) {
      this.activeMenu = this.$route.meta.slideName || valueNew;
    } else {
      this.activeMenu = "/gcpmgr";
    }
  }

  /* 生命钩子 START */
  mounted() {
    const path = this.$route.path;
    const m = path.match(/^\/\w+/);
    if (m != null) {
      this.activeMenu = this.$route.meta.slideName || path;
    } else {
      this.activeMenu = "/xxxx";
    }
  }
}
