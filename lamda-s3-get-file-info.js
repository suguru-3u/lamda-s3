var AWS = require("aws-sdk");
var s3 = new AWS.S3();

exports.handler = async (event) => {
  const date = new Date();
  const year = date.getFullYear();
  //月は 0 埋め 2 桁
  const month = `0${date.getMonth() + 1}`.slice(-2);

  const name = "Hello6.txt";

  const data = await s3
    .getObject({
      Bucket: "s3-tag-suguru-test",
      Key: `${year}/${month}/${name} `,
    })
    .promise();
  //const obj = JSON.parse(data)
  console.log(data); //ai 20
};
