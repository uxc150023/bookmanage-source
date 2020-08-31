// SGV-BUILD-PAGE-FAC # NOT DELETE
// 'Library' PAGE FACTORY START
export function libraryPagePreloading(): Promise<any> {
  return import("./library/library.vue").catch(error => {
    return dealOccurred(error, "Library");
  });
}
// 'Library' PAGE FACTORY END
// 'Index' PAGE FACTORY START
export function indexPagePreloading(): Promise<any> {
  return import("./index/index.vue").catch(error => {
    return dealOccurred(error, "Index");
  });
}
// 'Index' PAGE FACTORY END
// 'Home' PAGE FACTORY START
export function homePagePreloading(): Promise<any> {
  return import("./home/home.vue").catch(error => {
    return dealOccurred(error, "Home");
  });
}
// 'Home' PAGE FACTORY END
// 'Frame' PAGE FACTORY START
export function framePagePreloading(): Promise<any> {
  return import("./frame/frame.vue").catch(error => {
    return dealOccurred(error, "Frame");
  });
}
// 'Frame' PAGE FACTORY END
// 'BookUpdate' PAGE FACTORY START
export function bookUpdatePagePreloading(): Promise<any> {
  return import("./book-update/book-update.vue").catch(error => {
    return dealOccurred(error, "BookUpdate");
  });
}
// 'BookUpdate' PAGE FACTORY END
// 'BookManage' PAGE FACTORY START
export function bookManagePagePreloading(): Promise<any> {
  return import("./book-manage/book-manage.vue").catch(error => {
    return dealOccurred(error, "BookManage");
  });
}
// 'BookManage' PAGE FACTORY END
// 'About' PAGE FACTORY START
export function aboutPagePreloading(): Promise<any> {
  return import("./about/about.vue").catch(error => {
    return dealOccurred(error, "About");
  });
}
// 'About' PAGE FACTORY END
// 'AddBook' PAGE FACTORY START
export function addBookPagePreloading(): Promise<any> {
  return import("./add-book/add-book.vue").catch(error => {
    return dealOccurred(error, "AddBook");
  });
}
// 'AddBook' PAGE FACTORY END
// 'Login' PAGE FACTORY START
export function loginPagePreloading(): Promise<any> {
  return import("./login/login.vue").catch((error) => {
    return dealOccurred(error, "Login");
  });
}
// 'Login' PAGE FACTORY END
/**
 * 处理错误
 */
function dealOccurred(error: any, pageName = "") {
  location.href = (window as any).__SWNextFullPath;
}
