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
export default class SideMenuComp extends Vue {
  activeMenu: string = "0";
  isCollapse: boolean = false;
  menuList: any[] = [
    { name: "全部", path: "0", icon: "el-icon-s-platform" },
    { name: "文学", path: "1", icon: "el-icon-s-platform" },
    { name: "流行", path: "2", icon: "el-icon-s-platform" },
    {
      icon: "el-icon-s-platform",
      path: "3",
      name: "文化",
    },
    { name: "生活", path: "4", icon: "el-icon-s-platform" },
    { name: "经管", path: "5", icon: "el-icon-s-platform" },
    { name: "科技", path: "6", icon: "el-icon-s-platform" },
  ];

  @Watch("$route.params.cid")
  changeParams(value: string) {
    this.activeMenu = this.$route.params.cid;
  }

  /**
   * 有菜单权限
   * @param _state
   */
  hasMenuPermission(path: string): boolean {
    // const i = this.accountInfo.menus.findIndex((menu) => {
    //   return menu.authUrl === "menu" + path;
    // });
    // return i > -1;
    return true;
  }

  validateShowSubMenu(childrens: any[]) {
    if (Object.prototype.toString.call(childrens) === "[object Array]") {
      for (const child of childrens) {
        // if (this.hasMenuPermission(child.path)) {
        return true;
        // }
      }
    }
    return false;
  }

  handleSelectMItem(key: string, keyPath: string) {
    this.$router.push({ params: { cid: key } });
    this.$emit("indexSelect", key);
  }
  /* 生命钩子 START */
  mounted() {
    this.activeMenu = this.$route.params.cid;
  }
}
