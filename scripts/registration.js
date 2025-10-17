// Object Literal for Salon Information
const salon = {
    name: "The Pet Salon",
    address: "123 Pet Street Houston,Tx",
    phone: "832-123-4567"
};

// Pet Constructor
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

if (document.getElementById('salon-info')) {
    document.getElementById('salon-name').textContent = `Name: ${salon.name}`;
    document.getElementById('salon-address').textContent = `Address: ${salon.address}`;
    document.getElementById('salon-phone').textContent = `Phone: ${salon.phone}`;
}

// Pet Registration Logic on registration.html
if (document.getElementById('pet-registration-form')) {
    const form = document.getElementById('pet-registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('petName').value;
        const age = document.getElementById('petAge').value;
        const gender = document.getElementById('petGender').value;
        const breed = document.getElementById('petBreed').value;
        const service = document.getElementById('petService').value;
        const type = document.getElementById('petType').value;

        const newPet = new Pet(name, age, gender, breed, service, type);
        console.log("New pet registered:", newPet); 

        
        form.reset();
    });

    
    const pet1 = new Pet("Buddy", 5, "male", "Golden Retriever", "Grooming", "dog");
    const pet2 = new Pet("Whiskers", 2, "female", "Siamese", "Nail Trim", "cat");
    const pet3 = new Pet("Squawk", 3, "other", "Parrot", "Wing Clip", "bird");

    console.log("Initial Pets:", pet1, pet2, pet3); 
}