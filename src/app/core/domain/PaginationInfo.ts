export class PaginationInfo {
  pages: number;
  pageSize: number;
  totalPages: number;
  totalSize: number;

  constructor(pageSize = 20, pages = 1, totalSize = 0) {
    this.pageSize = pageSize;
    this.pages = pages;
    this.totalSize = totalSize;
  }

  paginationList(list: any[]) {
    const start = this.pageSize * (this.pages - 1);
    const end = this.pageSize * this.pages;
    return list.slice(start, end);
  }

  indexMethod() {
    return (index: number) => {
      return index + 1 + (this.pages - 1) * this.pageSize;
    };
  }
}
