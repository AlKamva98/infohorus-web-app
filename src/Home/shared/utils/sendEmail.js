//  function sendEmail(data, uCred) {
//       const AWS = require("aws-sdk");
//       const cred = new AWS.Credentials({
//         accessKeyId: uCred.data.getUser.first_name,
//         secretAccessKey: uCred.data.getUser.last_name,
//             sessionToken: null
//         });

//         AWS.config.update({
//             credentials: cred,
//             region: 'eu-west-1',
//             endpoint: 'email.eu-west-1.amazonaws.com'
//         });

//         // Create sendEmail params
//         var params = {
//             Destination: {
//                 ToAddresses: [
//                     "hello@bahatitech.co.za",
//                     /* more items */
//                 ]
//             },
//             Message: { /* required */
//                 Body: { /* required */
//                     Html: {
//                         Charset: "UTF-8",
//                         Data: `<h3>Hi my name is  ${data.fname}!</h3><br/>\n` +
//                             `<p>${data.taMessage}</p><br/>\n` +
//                             `<p>If you want to contact me to discuss this further, my email address is ${data.email} and my phone number is ${data.phone}.</p>` +
//                             `<p>I will be waiting for you to contact me.</p><br/>\n` +
//                             `<p></p><br/>\n` +
//                             `<p>Kind Regards,</p>\n`
//                     }
//                 },
//                 Subject: {
//                     Charset: 'UTF-8',
//                     Data: 'Contact Us message'
//                 }
//             },
//             Source: "hello@bahatitech.co.za", /* required */
//             ReplyToAddresses: [
//                 "hello@bahatitech.co.za",
//                 /* more items */
//             ],
//         };

//         const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// // Handle promise's fulfilled/rejected states
//         sendPromise.then(
//             function (data) {
//                 toggle();
//             }).catch(
//             function (err) {
//                 console.error(err, err.stack);
//             });
//     }

//     export default sendEmail;