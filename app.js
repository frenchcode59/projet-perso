// je cree ma variable pour la carte 

let map = L.map('map').setView([50.433333,2.833333], 13);

// je cree une variable permettant d'afficher un marqueur

let marker = L.marker([50.433333,2.833333]).addTo(map);

//je charge les images

let CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}
);

// je les ajoutes a ma cartes 
CyclOSM.addTo(map);
