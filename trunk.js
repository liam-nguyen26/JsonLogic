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
//   name: "S????c kho??e de??o dai",
//   reward: "1 Voucher 50k mua ha??ng ta??i tiki",
//   description: "Ba??n ha??y ??i b???? ??u?? 4000 b??????c ?????? hoa??n tha??nh nhi????m vu?? na??y nhe??!",
//   conditionToJoin: "Th????c hi????n 1 giao di??ch b????t ky?? tr??n app",
//   tutorial: "Subie g????i y?? ba??n ha??y thanh toa??n ti????n ??i????n, n??????c, ...",
//   startDate: "2021-12-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };

// const missionTwo = {
//   name: "????ng status nh????n 'nhi????u chu??t' ha??t de??",
//   reward: "T????ng ngay 30 ha??t de?? cho ba??n",
//   description: "Ba??n ha??y ????ng ba??i tr??n facebook cu??ng v????i hashtag #acb nhe??",
//   conditionToJoin: "Da??nh cho chu?? the?? ACB ???? b????t ky?? ha??ng the?? na??o",
//   tutorial: "Chia se?? 1 ba??i ????ng b????t ky?? t???? fanpage cu??a ACB ke??m hashtag #acb",
//   startDate: "2021-12-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };

// const missionThree = {
//   name: "T??ng c??????ng s????c b????n",
//   reward: "T????ng ngay 1 voucher freeship ta??i tiki",
//   description: "Ba??n chi?? c????n cha??y b???? 7 nga??y li??n tu??c",
//   conditionToJoin: "Da??nh cho chu?? the?? ACB ???? b????t ky?? ha??ng the?? na??o",
//   tutorial:
//     "Cu??ng Subie t????p luy????n ch??m chi?? m????i nga??y nhe??, chu??ng ta nh????t ??i??nh se?? la??m ????????c",
//   startDate: "2021-12-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };

// const missionFour = {
//   name: "????ng nh????p li??n tu??c ????m lu??n voucher",
//   reward: "T????ng ngay 1 voucher 200k ta??i tiki",
//   description: "Th??m g????u Subie 10 nga??y li??n tu??c nhe??",
//   conditionToJoin: "Da??nh cho chu?? the?? ACB ???? b????t ky?? ha??ng the?? na??o",
//   tutorial:
//     "Cu??ng Subie t????p luy????n ch??m chi?? m????i nga??y nhe??, chu??ng ta nh????t ??i??nh se?? la??m ????????c",
//   startDate: "2021-10-23 00:27:49.370",
//   endDate: "2021-12-23 00:27:49.370",
// };

// const missionFive = {
//   name: "Gi????i thi????u ba??n be??",
//   reward: "Nh????n ngay go??i qua?? tri?? gia?? 199k",
//   description: "G????i link m????i ba??n be?? tham gia m???? the?? ACB",
//   conditionToJoin: "Da??nh cho chu?? the?? ACB ???? b????t ky?? ha??ng the?? na??o",
//   tutorial: "Ba??n ha??y g????i link na??y ?????? m????i mn tham gia m???? the?? ACB ngay nhe??",
//   startDate: "2021-10-23T14:48:00.000Z",
//   endDate: "2021-12-23T14:48:00.000Z",
// };
