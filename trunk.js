// var dataForCondition1 = {
//   and: [
//     { "==": [{ var: "channel.name" }, "mobile"] },
//     { "==": [{ var: "submission.isValid" }, true] },
//     { "==": [{ var: "name.isValid" }, false] },
//   ],
// };

// var data1 = {
//   channel: { name: "mobile" },
//   submission: { isValid: true },
//   obj: { name: "Linh" },
// };

// console.log(jsonLogic.apply(dataForCondition1, data1));

// var rules2 = {
//   and: [
//     { "==": [{ var: "channel" }, "mobile"] },
//     { ">=": [{ var: "step.quantity" }, 4000] },
//   ],
// };

// var data2 = {
//   channel: "mobile",
//   step: { quantity: 4000 },
// };

// console.log(jsonLogic.apply(rules2, data2));

// console.log(JSON.stringify(rules2));

// channelId, eventTypeId,  orderEvent.items.productId

// var condition = {
//   and: [
//     { "==": [{ var: "ChannelId" }, "133d2c08-635e-4644-baa9-be1cf7ec85bf"] },
//     { "==": [{ var: "EventTypeId" }, "7e03bd6b-df7c-41b5-9b28-18268fd92fb1"] },
//     {
//       //all some none
//       some: [
//         { var: "OrderEvent.Items" },
//         {
//           or: [
//             {
//               "==": [
//                 { var: "ProductId" },
//                 "133d2c08-635e-4644-baa9-be1cf7ec85ba",
//               ],
//             },
//             {
//               "==": [
//                 { var: "ProductId" },
//                 "133d2c08-635e-4644-baa9-be1cf7ec88ba",
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const eventObject = {
//   ChannelId: "133d2c08-635e-4644-baa9-be1cf7ec85bf",
//   ChannelHashCode: 1234567890,
//   EventTypeId: "7e03bd6b-df7c-41b5-9b28-18268fd92fb1",
//   IssuedDate: null,
//   ReceivedDate: null,
//   CustomerInfo: {
//     MembershipId: "f03770ba-c1d8-441d-9222-d6bdf306e254",
//     Fullname: "Nguyen Van A",
//     Email: "abc123@gmail.com",
//     Phone: "0912345678",
//   },
//   OrderEvent: {
//     Amount: 10000,
//     Items: [
//       {
//         ProductId: "133d2c08-635e-4644-baa9-be1cf7ec85ba",
//         Quantity: 1,
//       },
//       {
//         ProductId: "133d2c08-635e-4644-baa9-be1cf7ec78ba",
//         Quantity: 1,
//       },
//     ],
//     Point: 2,
//   },
//   GiftEvent: null,
//   ExternalActivityEvent: null,
//   Metadata: null,
// };
// console.log(jsonLogic.apply(condition, eventObject));

// const event = new Date("23 October 2021 14:48 UTC");
// // console.log(event.toString());
// // expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
// // (note: your timezone may vary)

// console.log(event.toISOString());
// // expected output: 2011-10-05T14:48:00.000Z

// const missionOne = {
//   name: "Sức khỏe dẻo dai",
//   reward: "1 Voucher 50k mua hàng tại tiki",
//   description: "Bạn hãy đi bộ đủ 4000 bước để hoàn thành nhiệm vụ này nhé!",
//   conditionToJoin: "Thực hiện 1 giao dịch bất kỳ trên app",
//   tutorial: "Subie gợi ý bạn hãy thanh toán tiền điện, nước, ...",
//   startDate: "2021-12-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };

// const missionTwo = {
//   name: "Đăng status nhận 'nhiều chút' hạt dẻ",
//   reward: "Tặng ngay 30 hạt dẻ cho bạn",
//   description: "Bạn hãy đăng bài trên facebook cùng với hashtag #acb nhé",
//   conditionToJoin: "Dành cho chủ thẻ ACB ở bất kỳ hạng thẻ nào",
//   tutorial: "Chia sẻ 1 bài đăng bất kỳ từ fanpage của ACB kèm hashtag #acb",
//   startDate: "2021-12-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };

// const missionThree = {
//   name: "Tăng cường sức bền",
//   reward: "Tặng ngay 1 voucher freeship tại tiki",
//   description: "Bạn chỉ cần chạy bộ 7 ngày liên tục",
//   conditionToJoin: "Dành cho chủ thẻ ACB ở bất kỳ hạng thẻ nào",
//   tutorial:
//     "Cùng Subie tập luyện chăm chỉ mỗi ngày nhé, chúng ta nhất định sẽ làm được",
//   startDate: "2021-12-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };

// const missionFour = {
//   name: "Đăng nhập liên tục ẳm luôn voucher",
//   reward: "Tặng ngay 1 voucher 200k tại tiki",
//   description: "Thăm gấu Subie 10 ngày liên tục nhé",
//   conditionToJoin: "Dành cho chủ thẻ ACB ở bất kỳ hạng thẻ nào",
//   tutorial:
//     "Cùng Subie tập luyện chăm chỉ mỗi ngày nhé, chúng ta nhất định sẽ làm được",
//   startDate: "2021-10-23 00:27:49.370",
//   endDate: "2021-12-23 00:27:49.370",
// };

// const missionFive = {
//   name: "Giới thiệu bạn bè",
//   reward: "Nhận ngay gói quà trị giá 199k",
//   description: "Gửi link mời bạn bè tham gia mở thẻ ACB",
//   conditionToJoin: "Dành cho chủ thẻ ACB ở bất kỳ hạng thẻ nào",
//   tutorial: "Bạn hãy gửi link này để mời mn tham gia mở thẻ ACB ngay nhé",
//   startDate: "2021-10-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };
