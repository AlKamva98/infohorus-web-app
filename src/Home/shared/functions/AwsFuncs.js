
export function sendEmail(screen,data, uCred) {
     const AWS = require("aws-sdk");
        const cred = new AWS.Credentials({
            accessKeyId: uCred.data.getCred.acc,
            secretAccessKey: uCred.data.getCred.sec,
            sessionToken: null
        });

        AWS.config.update({
            credentials: cred,
            region: 'eu-west-1',
            endpoint: 'email.eu-west-1.amazonaws.com'
        });

        let html;
        if(screen === "Demo"){
         html = {
                        Charset: "UTF-8",
                        Data: `<h3>Hi my name is  ${data.fname}!</h3><br/>\n` +
                            `<p>I would like to schedule a demo of infohorus. Here are my details:</p>` +
                            `<p>Email: ${data.email}</p>` +
                            `<p>Job Title: ${data.jobtitle}</p>` +
                            `<p>Company: ${data.organisation}</p>` +
                            `<p>Phone: ${data.phone}</p>` +
                            `<p>I will be waiting for you to contact me.</p>` +
                            `<p></p><br/>\n` +
                            `<p>Kind Regards,</p>\n`
                    }
        }else if(screen === "Contact"){
           html ={
                        Charset: "UTF-8",
                        Data: `<h3>Hi my name is  ${data.fname}!</h3><br/>\n` +
                            `<p>${data.taMessage}</p><br/>\n` +
                            `<p>If you want to contact me to discuss this further, my email address is ${data.email} and my phone number is ${data.phone}.</p>` +
                            `<p>I will be waiting for you to contact me.</p><br/>\n` +
                            `<p></p><br/>\n` +
                            `<p>Kind Regards,</p>\n`
                    }
        }else if(screen === "New Team member"){
        html = {
                        Charset: "UTF-8",
                        Data: `<h3>Hi please create an AWS SES account for ${data.fname}!</h3><br/>\n` +
                            `<p> Here are his details:</p>` +
                            `<p>First Name: ${data.fname}</p>` +
                            `<p>Last Name: ${data.lname}</p>` +
                            `<p>Email: ${data.email}</p>` +
                            `<p>Job Title: ${data.jobtitle}</p>` +
                            `<p></p><br/>\n` +
                            `<p>Kind Regards,</p>\n`
                    }
        }

        // Create sendEmail params
        var params = {
            Destination: {
                ToAddresses: [
                    "stefano@bahatitech.co.za",
                    /* more items */
                ]
            },
            Message: { /* required */
                Body: { /* required */
                    Html: html
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: screen
                }
            },
            Source: "hello@bahatitech.co.za", /* required */
            ReplyToAddresses: [
                "hello@bahatitech.co.za",
                /* more items */
            ],
        };

        const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
        sendPromise.then(
            function (data) {
            }).catch(
            function (err) {
                console.error(err, err.stack);
            });
            console.log("Email has been sent!!")

    }
