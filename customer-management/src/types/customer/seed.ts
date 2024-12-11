import { Comment } from "./customer";

const socialMediaOptions = [
  { title: "Facebook", value: 0 },
  { title: "Zalo", value: 1 },
  { title: "Twitter", value: 2 },
  { title: "Instagram", value: 3 },
];

const sourceOptions = [
  { title: "Facebook", value: 0 },
  { title: "Zalo", value: 1 },
  { title: "Twitter", value: 2 },
  { title: "Instagram", value: 3 },
];

const statusOptions = [
  { title: "Yêu cầu trải nghiệm", value: 0 },
  { title: "Liên hệ", value: 1 },
];

const resultCommentOptions = [
  { title: "Khách hàng hẹn gọi lại lần sau", value: 0 },
  { title: "Khách hàng yêu cầu trải nghiệm", value: 1 },
];

const statusCommentOptions = [
  { title: "Gọi lại lần sau", value: 0 },
  { title: "Yêu cầu trải nghiệm", value: 1 },
];

const comments: Comment[] = [
  {
    index: 1,
    time: "2024-09-12T00:00:00.000Z",
    title: "Khach hang hen goi lai sau",
    status_id: 1,
  },
  {
    index: 2,
    time: "2024-10-12T00:00:00.000Z",
    title: "Khach hang yeu cau trai nghiem",
    status_id: 2,
  },
];

const cityOptions = [
  { title: "Hà Nội", value: "Hà Nội" },
  { title: "Đà Nẵng", value: "Đà Nẵng" },
  { title: "Hải Phòng", value: "Hải Phòng" },
  { title: "Huế", value: "Huế" },
];

const districtOptions = [
  { title: "Hai Bà Trưng", value: "Hai Bà Trưng" },
  { title: "Hoàn Kiếm", value: "Hoàn Kiếm" },
];

const wardOptions = [
  { title: "Bách Khoa", value: "Bách Khoa" },
  { title: "Cầu Dền", value: "Cầu Dền" },
];

const customers = [
  {
    index: 1,
    customerCode: "INV001",
    fullName: "Nguyen Van A",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi A",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "10/12/2024",
  },
  {
    index: 2,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 3,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 4,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 5,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 6,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 7,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 8,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
  {
    index: 9,
    customerCode: "INV002",
    fullName: "Nguyen Van B",
    phoneNumber: "0987654321",
    email: "nguyenvana12@gmail.com",
    marketer: "Nguyen Thi B",
    source: "Website",
    note: "Goi tu van ngoai gio hanh chinh",
    createAt: "09/12/2024",
  },
];

export {
  customers,
  socialMediaOptions,
  sourceOptions,
  statusOptions,
  resultCommentOptions,
  statusCommentOptions,
  comments,
  cityOptions,
  districtOptions,
  wardOptions,
};
