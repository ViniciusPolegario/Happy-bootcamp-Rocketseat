const map = L.map("mapid").setView([-22.7626236,-43.3927589], 15);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    
})

let marker;

//create and add marker

map.on('click', (event) => {

    
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // select lat and lng in the map 
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
   
    // remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
} )

// add photos

function addPhotoField( ){
    // get container photo #images
    const container = document.querySelector('#images')

    //get container for duplic .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    // clone the last photo added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // Conta quantos fieldset tem e subtrai 1, assim obtem o ultimo
    
    // check if the field is empty, if yes, do not add it to the image container

    const input =  newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    
    //clear field before add to container of images
    input.value = ''

    // add the clone in the container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // clear the field value
        span.parentNode.children[0].value = ""
        return
    }

    // delete the field
    span.parentNode.remove();
}
   
// select yes or no

function toggleSelect(event) {
    // remove active class from the button
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active');
    })

    // update active class in button clicked
    const button = event.currentTarget
    button.classList.add('active');
  
    //update input hidden with value selected
    const input = document.querySelector('[name="open_on_weekends"]')

    //check yes or no

    input.value = button.dataset.value;

    
}