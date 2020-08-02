// tslint:disable:no-var-requires
import Vue from "vue";

// SGV-BUILD-COMP-FAC # NOT DELETE
Vue.component("sideMenu", require("./side-menu/side-menu.vue").default);
Vue.component("headbar", require("./headbar/headbar.vue").default);
Vue.component(
  "AccountSettings",
  require("./account-settings/account-settings.vue").default,
);
