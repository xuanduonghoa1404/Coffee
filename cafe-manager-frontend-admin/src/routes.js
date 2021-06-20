import React from "react";

import Dashboard from "./views/dashboard/Dashboard";

const QuanLyBanHang = React.lazy(() =>
  import("./views/quanlybanhang/QuanLyBanHang")
);
const QuanLyNguyenLieu = React.lazy(() =>
  import("./views/quanlykho/QuanLyNguyenLieu")
);
const QuanLyNhapKho = React.lazy(() =>
  import("./views/quanlykho/QuanLyNhapKho")
);
const QuanLyXuatKho = React.lazy(() =>
  import("./views/quanlykho/QuanLyXuatKho")
);
const QuanLyNhanVien = React.lazy(() =>
  import("./views/quanlynhanvien/QuanLyNhanVien")
);
const QuanLyCuaHang = React.lazy(() =>
  import("./views/quanlycuahang/QuanLyCuaHang")
);
const QuanLyTaiKhoan = React.lazy(() =>
  import("./views/quanlytaikhoan/QuanLyTaiKhoan")
);

const routes = [
  { path: "/", exact: true, name: "Trang chủ", component: Dashboard },
  { path: "/dashboard", exact: true, component: Dashboard },
  {
    path: "/quanlybanhang",
    exact: true,
    name: "Quản lý bán hàng",
    component: QuanLyBanHang,
  },
  {
    path: "/quanlykho/quanlynguyenlieu",
    exact: true,
    name: "Quản lý nguyên liệu",
    component: QuanLyNguyenLieu,
  },
  {
    path: "/quanlykho/quanlynhapkho",
    exact: true,
    name: "Quản lý nhập kho",
    component: QuanLyNhapKho,
  },
  {
    path: "/quanlykho/quanlyxuatkho",
    exact: true,
    name: "Quản lý xuất kho",
    component: QuanLyXuatKho,
  },
  {
    path: "/quanlynhanvien",
    exact: true,
    name: "Quản lý nhân viên",
    component: QuanLyNhanVien,
  },
  {
    path: "/quanlycuahang",
    exact: true,
    name: "Quản lý cửa hàng",
    component: QuanLyCuaHang,
  },
  {
    path: "/quanlytaikhoan",
    exact: true,
    name: "Quản lý tài khoản",
    component: QuanLyTaiKhoan,
  },
];

export default routes;
