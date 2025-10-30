$("#servicesForm") .on("submit", function (event) {

    event.preventDefault();

    const serviceName = $("#serviceName") .val() .trim();
    const serviceDescription = $("#serviceDescription") .val() .trim();
    const servicePrice = $("#servicePrice") .val();

console.log(`The Values Are: ${serviceName}, ${serviceDescription}, ${servicePrice}`);

$("#serviceName, #serviceDescription, #servicePrice").removeClass("is-invalid");

const priceValue = parseFloat(servicePrice);

if(!serviceName || !serviceDescription || isNaN(priceValue) || priceValue <= 0){

    if(!serviceName){ $("#serviceName") .addClass("is-invalid");}
    if(!serviceDescription){ $("#serviceDescription") .addClass("is-invalid");}
    if(isNaN(priceValue) || priceValue <= 0){ $("#servicePrice") .addClass("is-invalid");}

    return;
}else{
    const newService = new Service(serviceName, serviceDescription, priceValue);
    console.log("Service has been saved:", newService);
}

$("#servicesForm")[0].reset();

$("#serviceName, #serviceDescription, #servicePrice").removeClass("is-invalid");

}); 