"use strict"

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'nT_rkAZljGLRk7iGaPAO27CZGdPSCqXn-xWa0UX2Uoo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for a photo
        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        image.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then both inside imageContainer element
        item.appendChild(image);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        //console.log(photosArray);
        displayPhotos();
    } catch (error) {
        //Catch Error here
    }
}

// On Load
getPhotos();