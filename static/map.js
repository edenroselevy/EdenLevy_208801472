var locations = [
    ["Kampai", 31.244546, 34.8142683],
    ["Vivino", 31.233692, 34.7982837],
    ["Japanika", 31.6599706, 35.1834323],
    ["Cramim", 31.2441159, 34.8105724],
    ["Oh La La", 31.259043, 34.7981032],
    ["Landwer", 31.243331, 34.8147357],
    ["Agadir", 31.261132, 34.8091105],
];

function initMap() {
    var center = { lat: 31.2614366, lng: 34.8259063 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: center,
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                locations[count][1],
                locations[count][2]
            ),
            map: map,
            title: locations[count][0],
        });
        google.maps.event.addListener(
            marker,
            "click",
            (function (marker, count) {
                return function () {
                    infowindow.setContent(locations[count][0]);
                    infowindow.open(map, marker);
                };
            })(marker, count)
        );
    }
}
