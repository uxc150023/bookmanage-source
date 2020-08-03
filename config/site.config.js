var __sg_site_config__ = {
  DEV: {
    remote: "localhost:8181",
    otherRemotes: {
      user: "localhost:8181",
    },
    local: "localhost:8181",
    entrance: "http://dev.domain.name:8080/login",
    appID: "xxx",
    protocol: "http:",
    publicPath: "/",
  },
  TEST: {
    remote: "test.domain.name:18080",
    otherRemotes: {
      user: "test.domain.name:18080",
    },
    local: "test.domain.name:8080",
    entrance: "http://test.domain.name:8080/login",
    appID: "xxx",
    protocol: "http:",
    publicPath: "/",
  },
  UAT: {
    remote: "uat.domain.name:18080",
    otherRemotes: {
      user: "uat.domain.name:18080",
    },
    local: "uat.domain.name:8080",
    entrance: "http://uat.domain.name:8080/login",
    protocol: "http:",
    publicPath: "/",
  },
  MASTER: {
    remote: "domain.name:18080",
    otherRemotes: {
      user: "domain.name:18080",
    },
    local: "domain.name:8080",
    entrance: "https://domain.name:8080/login",
    protocol: "https:",
    publicPath: "/",
  },
  runtimes: "DEV",
};
if (typeof global === "object") {
  global.__sg_site_config__ = __sg_site_config__;
}
