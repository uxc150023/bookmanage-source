import { IApiConfig } from "../../lib/sg-resource";

// tslint:disable:object-literal-sort-keys
export const apiConfig: IApiConfig = {
  hosts: {
    apiHost: { dir: "" },
  },
  post: {
    // SGV-BUILD-API-POST # NOT DELETE
    // 用户登录
    login: "apiHost:/pmUser/login",
    bookAdd: "apiHost:/book/add",
    bookLogin: "apiHost:/book/login",
  },
  get: {
    // SGV-BUILD-API-GET # NOT DELETE
    getBookAll: "apiHost:/book/findAll",
    getBookInfo: "apiHost:/book/bookInfo",
  },
  put: {
    // SGV-BUILD-API-PUT # NOT DELETE
    bookUpdata: "apiHost:/book/update",
  },
  delete: {
    // SGV-BUILD-API-DELETE # NOT DELETE
    bookDelete: "apiHost:/book/delete",
  },
};
