// tslint:disable:member-ordering
// SGV-BUILD-SERVICE-IMPORT # NOT DELETE
import { createBookmanageService, IBookmanageService, BookmanageService } from "./services/bookmanage.serv";
import { CommonService, createCommonService, ICommonService } from "./services/common.serv";
import { createSystemService, ISystemService, SystemService } from "./services/system.serv";

export class Services {
  // SGV-BUILD-SERVICE-FAC # NOT DELETE
  // 'Bookmanage' SERVICE FACTORY START
  static bookmanageService: IBookmanageService;
  static createBookmanageService() {
    if (this.bookmanageService) {
      return this.bookmanageService;
    }
    this.bookmanageService = createBookmanageService(BookmanageService);
    return this.bookmanageService;
  }
  // 'Bookmanage' SERVICE FACTORY END
        // 'Common' SERVICE FACTORY START
  static commonService: ICommonService;
  static createCommonService() {
    if (this.commonService) {
      return this.commonService;
    }
    this.commonService = createCommonService(CommonService);
    return this.commonService;
  }
  // 'Common' SERVICE FACTORY END
  // 'System' SERVICE FACTORY START
  static systemService: ISystemService;
  static createSystemService() {
    if (this.systemService) {
      return this.systemService;
    }
    this.systemService = createSystemService(SystemService);
    return this.systemService;
  }
  // 'System' SERVICE FACTORY END
}
