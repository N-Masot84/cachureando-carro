function sendMail(){
    var params = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("address").value,
        message: document.getElementById("comuna").value,
        message: document.getElementById("state").value,
        message: document.getElementById("productsInCart").value,
        message: document.getElementById("total-neto").value,
        message: document.getElementById("iva").value,
        message: document.getElementById("total").value,
        message: document.getElementById("shipping").value,
        message: document.getElementById("total-with-shipping").value,
    };}
const serviceID = "service_ueyep5p";
const templateID = "template_bwcuqca";
emailjs.send(serviceID, templateID,params)
.then(
    res=>{
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("address").value = "";
        document.getElementById("comuna").value = "";
        document.getElementById("state").value = "";
        document.getElementById("productsInCart").value = "";
        document.getElementById("total-neto").value = "";
        document.getElementById("iva").value = "";
        document.getElementById("total").value = "";
        document.getElementById("shipping").value = "";
        document.getElementById("total-with-shipping").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err)=> console.log(err));