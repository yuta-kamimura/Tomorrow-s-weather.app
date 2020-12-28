exports.sendmailer = function(){
    //SMTPサーバの設定
    const nodemailer = require("nodemailer");
    const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
          user: 'メールアドレス',
          pass: 'パスワード'
      }
    };
    const smtp = nodemailer.createTransport(smtpConfig);
  
    const message = {
      from: '送り先メールアドレス',
      to: '宛先メールアドレス',
      subject: "明日は雨です。",
      html: "明日は雨です傘を持ちましょう"
    };
  
    // メール送信
    try{
    smtp.sendMail(message, function(error, info){
        // エラー発生時
        if(error){
            console.log("send failed");
            console.log(error.message);
            return;
        }
  
        // 送信成功
        console.log("send successful");
        console.log(info.messageId);
    });
    }catch(e) {
    console.log("Error",e);
    };
  };