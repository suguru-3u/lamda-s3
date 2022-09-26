/**
 * lamdaからS3にファイルアップロードしたプログラム
 * lamdaに直接書いたコードなので、TypeScriptではなくJavaScriptを使用している。
 * ■実行条件
 * ・lamdaがS3にアクセス権限を持っている
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
  const date = new Date();
  const year = date.getFullYear();
  //月は 0 埋め 2 桁
  const month = `0${date.getMonth() + 1}`.slice(-2);

  let str_data = "Good Morning\n";
  str_data += "Good Afternoon\n";
  str_data += "Good Evening\n";
  str_data += "Good Night\n";

  const name = "Hello6.txt";

  const params = {
    Bucket: "s3-tag-suguru-test",
    Key: `${year}/${month}/${name} `,
    Body: str_data,
  };

  const s3 = new AWS.S3();
  try {
    // putObject でフォルダを作成
    await s3.putObject(params).promise();
  } catch (err) {
    console.log(err);
  }
};
