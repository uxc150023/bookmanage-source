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
  nameC: string = "";
  /* 生命钩子 START */
  mounted() {}
}
