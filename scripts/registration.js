const pets = [
    {
        name: "Violet",
        age: 11,
        gender: "Female",
        service: "Grooming",
        breed: "American Bully"
    },
    {
        name: "Ruby",
        age: 2,
        gender: "Female",
        service: "Nail Trimming",
        breed: "French Bulldog"
    },
    {
        name: "Jewel",
        age: 2,
        gender: "Male",
        service: "Bath and Brush",
        breed: "French Bulldog"
    }
];

// Function to calculate and display the total number of registered pets.
function displayPetCount() {
    // Use getElementById to access the HTML element with the id 'petCount'.
    const countElement = document.getElementById("petCount");
    // Update the innerHTML of the element with the length of the pets array.
    countElement.innerHTML = pets.length;
}


function displayPetNames() {
    
    const petListElement = document.getElementById("petList");
    
    
    petListElement.innerHTML = "";

    
    for (let i = 0; i < pets.length; i++) {
        // Create a new list item (<li>) for each pet.
        const petListItem = document.createElement("li");
        // Set the text content of the list item to the pet's name.
        petListItem.textContent = pets[i].name;
        // Append the new list item to the unordered list.
        petListElement.appendChild(petListItem);
    }
}


window.onload = function() {
    displayPetCount();
    displayPetNames();
}


class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  }


const pet1 = new Pet('Violet', 'Dog', 11);
const pet2 = new Pet('Ruby', 'dog', 2);
const pet3 = new Pet('Jewel', 'dog', 2);


console.log(pet1); // Pet { name: ' Violet', species: 'Dog', age: 5 }
console.log(pet2); // Pet { name: 'Ruby', species: 'Cat', age: 3 }
console.log(pet3); // Pet { name: 'Jewel', species: 'Turtle', age: 12 }


let petSalon = {
    pets: []
};


function displayRow(pet) {
    const tableBody = document.getElementById("pet-table-body");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.type}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
    `;
    tableBody.appendChild(row);
}


function displayAllPets() {
    
    const tableBody = document.getElementById("pet-table-body");
    tableBody.innerHTML = "";

    
    for (let pet of petSalon.pets) {
        displayRow(pet);
    }
}


window.onload = displayAllPets;


function addPet(newPet) {
    petSalon.pets.push(newPet);
    displayAllPets(); 
}


document.getElementById("your-register-button-id").addEventListener("click", function() {
    let newPet = {
        name: document.getElementById("pet-name").value,
        age: document.getElementById("pet-age").value,
        gender: document.getElementById("pet-gender").value,
        type: document.getElementById("pet-type").value,
        breed: document.getElementById("pet-breed").value,
        service: document.getElementById("pet-service").value,
    };
    addPet(newPet);
});

