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
  nameC: string = "xxxxxx";
  activeMenu: string = "/index1";
  isCollapse: boolean = false;
  menuList: any[] = [
    { name: "全部", path: "/index1", icon: "el-icon-s-platform" },
    { name: "文学", path: "/index2", icon: "el-icon-s-platform" },
    { name: "流行", path: "/index3", icon: "el-icon-s-platform" },
    // {
    //   icon: "el-icon-s-platform",
    //   path: "/index4",
    //   name: "文化",
    //   children: [
    //     { name: "全部", path: "/index8", icon: "el-icon-s-platform" },
    //     { name: "全部", path: "/index9", icon: "el-icon-s-platform" },
    //   ],
    // },
    { name: "生活", path: "/index5", icon: "el-icon-s-platform" },
    { name: "经管", path: "/index6", icon: "el-icon-s-platform" },
    { name: "科技", path: "/index7", icon: "el-icon-s-platform" },
  ];

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

  handleSelectMItem() {
    this.$emit("indexSelect");
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
