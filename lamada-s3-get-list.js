var AWS = require("aws-sdk");
var s3 = new AWS.S3();

exports.handler = async (event) => {
  const params = {
    Bucket: "s3-tag-suguru-test",
    Prefix: "tag",
  };

  const s3 = new AWS.S3();
  const lists = await s3.listObjectsV2(params).promise();
  lists.Contents.forEach((a) => console.log(a.Key));
};
