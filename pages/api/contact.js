import {createTransport} from 'nodemailer'

export default async function Contact(req, res) {
    if(req.method !== 'POST'){
        res.status(400).send({message: "method not allowed"});
        return;
    }
    
    var data = JSON.parse(req.body);
    var transporter = createTransport({
        service: 'gmail',
        auth: {
          user: process.env.CONTACT_SEND_EMAIL,
          pass: process.env.CONTACT_SEND_PASS
        }
      });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.CONTACT_SEND_EMAIL, // sender address
        to: process.env.CONTACT_RECIEVE_EMAIL, // list of receivers
        subject: "Contact message from HackSlash official website", // Subject line
        text: data.message + "\n\n" + data.name + "\n" + data.email, // plain text body
    });
    
    // console.log(info);
    res.status(200).json({'message': "success"});
}
