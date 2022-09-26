var AWS = require("aws-sdk");
var s3 = new AWS.S3();

exports.handler = async (event) => {
  const date = new Date();
  const year = date.getFullYear();
  //月は 0 埋め 2 桁
  const month = `0${date.getMonth() + 1}`.slice(-2);

  const name = "Hello6.txt";

  try {
    const deletes = await s3
      .deleteObject({
        Bucket: "s3-tag-suguru-test",
        Key: `${year}/${month}/${name} `,
      })
      .promise()
      .catch((err) => {
        throw new Error(err);
      });
  } catch (err) {
    console.log(err);
  }
};
