function sendEmail(data){
        Email.send({
            Host : "smtp.sudoak.in",
            Username : "me@sudoak.in",
            Password : "oJQz(hvl2",
            To : ["sudoakk@gmail.com", "dharaniorganiks@gmail.com"],
            From : "me@sudoak.in",
            Subject : data.subject.value,
            Body : `
                Name: ${data.name.value}
                Email: ${data.email.value}
                Query: ${data.message.value}
            `
        }).then(
          message => {
              console.log(message);
              toastr.info("Email Successfully Sent");
              document.getElementById("myForm").reset();
          }
        );
}