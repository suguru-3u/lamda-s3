/**
 * lamdaからS3のファイルに対してタグづけを行ったプログラム
 * lamdaに直接書いたコードなので、TypeScriptではなくJavaScriptを使用している。
 * ■実行条件
 * ・S3にファイルが存在すること
 * ・このプログラムをAWSコンソール上のlamdaに貼り付けて実行すること
 *
 * ■改善点
 * ・ローカルでも実行できるように認証周りの設定を行う
 * ・ローカルで実行する場合、TypeScritpを使用してプログラムを書き直す
 * ・実際はパケット名やオブジェクト名は引数で渡されると思うので、その対応を行う。
 */

var AWS = require("aws-sdk");
var s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log("*** start ***");

  const bucket = "s3-tag-suguru-test"; // バケット名
  const path = "tag/koseki3.pdf"; // オブジェクトキー
  const bucketParams = {
    Bucket: bucket,
    Key: path,
    Tagging: {
      TagSet: [{ Key: "tag-test", Value: "tag-suguru" }],
    },
  };

  try {
    const s3Objects = await s3.putObjectTagging(bucketParams).promise();
    console.log(s3Objects);
  } catch (ee) {
    console.log(ee);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };

  return response;
};
