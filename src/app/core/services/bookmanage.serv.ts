import { PaginationInfo } from "../domain/PaginationInfo";
import { BaseService } from "./base.serv";

export interface IBookmanageService {
  // SGV-BUILD-SERVICE-INTERFACE # NOT DELETE
  // login(userName: string, password: string): Promise<any>;
  getBookAll(pagination: PaginationInfo): Promise<any>;
  getBookInfo(id: string): Promise<any>;
  bookUpdata(params: any): Promise<any>;
  bookAdd(params: any): Promise<any>;
  bookDelete(id: string): Promise<any>;
}

type IBookmanageServiceConstructor = new () => IBookmanageService;

export function createBookmanageService(
  ctor: IBookmanageServiceConstructor,
): IBookmanageService {
  return new ctor();
}

export class BookmanageService extends BaseService
  implements IBookmanageService {
  constructor() {
    super();
  }
  // SGV-BUILD-SERVICE-FUNCTION # NOT DELETE
  public getBookAll(pagination: PaginationInfo): Promise<any> {
    return this.proxyHttp.get("getBookAll", { ...pagination }, []);
  }
  public getBookInfo(id: string): Promise<any> {
    return this.proxyHttp.get("getBookInfo", {}, [id]);
  }
  public bookUpdata(params: any): Promise<any> {
    return this.proxyHttp.put("bookUpdata", params);
  }
  public bookAdd(params: any): Promise<any> {
    return this.proxyHttp.post("bookAdd", params);
  }
  public bookDelete(id: string): Promise<any> {
    return this.proxyHttp.delete("bookDelete", [id]);
  }
}
