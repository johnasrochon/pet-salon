// Array to store pet objects
const pets = [
    {
        name: "Cujo",
        age: 5,
        gender: "Male",
        service: "Grooming",
        breed: "Golden Retriever"
    },
    {
        name: "Kimmi",
        age: 2,
        gender: "Female",
        service: "Nail Trim",
        breed: "Siamese"
    },
    {
        name: "Mad Max",
        age: 5,
        gender: "Male",
        service: "Bath & Brush",
        breed: "German Shepherd"
    }
];

// Function to display the total number of registered pets
function displayPetCount() {
    const petCountElement = document.getElementById("petCount");
    petCountElement.textContent = pets.length; // Update the count in the HTML
}

// Function to display the names of registered pets
function displayPetNames() {
    const petNamesList = document.getElementById("petNamesList");
    petNamesList.innerHTML = ""; // Clear existing list items

    // Iterate through the pets array and add each pet's name to the list
    for (let i = 0; i < pets.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = pets[i].name;
        petNamesList.appendChild(listItem);
    }
}

// Call functions to display data when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayPetCount();
    displayPetNames();
});