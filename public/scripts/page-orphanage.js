const options ={
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl: false,
}



const map = L.map("mapid", options).setView([-22.7626236,-43.3927589], 15);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})


//create and add marker
L.marker([-22.7626236,-43.3927589], {icon})
.addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})

    //selec image clicked

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add("active")
}