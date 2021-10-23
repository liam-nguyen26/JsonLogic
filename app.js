const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const jsonLogic = require("json-logic-js");

var rules2 = {
  and: [
    { "==": [{ var: "ChannelId" }, "133d2c08-635e-4644-baa9-be1cf7ec85bf"] },
    { ">=": [{ var: "Step.Quantity" }, 4000] },
    { "===": [{ var: "Metadata.Submission.isValid" }, true] },
  ],
};

var dataForCondition2 = {
  ChannelId: "133d2c08-635e-4644-baa9-be1cf7ec85bf",
  Step: { Quantity: 4000 },
  Metadata: {
    Submission: {
      isValid: true,
    },
  },
};

var rules1 = {
  and: [
    { "===": [{ var: "ChannelId" }, "133d2c08-635e-4644-baa9-be1cf7ec85bf"] },
    { "===": [{ var: "Metadata.Submission.isValid" }, true] },
  ],
};

var dataForCondition1 = {
  ChannelId: "133d2c08-635e-4644-baa9-be1cf7ec85bf",
  Metadata: {
    Submission: {
      isValid: true,
    },
  },
};

console.log(jsonLogic.apply(rules1, dataForCondition1));

// console.log(JSON.stringify(rules3));

app.listen(3000);
