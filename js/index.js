$(document).ready(
    function() {



        $.getJSON("../topspots.json", function(data) {

            $(data).each(function(index, value) {
                //creating the HTML holder for the row
                var trHTML = '';
                var mapLink = "https://www.google.com/maps?q=";
                mapLink += value.location[0] + "," + value.location[1];
                trHTML += '<tr><td>' + value.name + '</td><td>' + value.description + '</td><td style="vertical-align:middle"><a href="' + mapLink + '" class="btn btn-primary btn-block button" target="_blank"' + '>Open in Google Maps</a></td></tr>';
                $('#spots').append(trHTML);
            });



            var map;
            var markers = [];
            var infowindow = null;

            window.initMap = function() {
                map = new google.maps.Map(document.getElementById('map'), {
                        center: {
                            lat: 32.7152778,
                            lng: -117.1563889
                        },
                        zoom: 10
                    }

                );

                for (var i = 0; i < data.length; i++) {
                    var latLng = new google.maps.LatLng(data[i].location[0], data[i].location[1]);
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        title: data[i].name
                    });
                    markers.push(marker);
                }



                infowindow = new google.maps.InfoWindow({
                    content: "holding..."
                });

                for (var i = 0; i < markers.length; i++) {
                    var marker = markers[i];
                    google.maps.event.addListener(marker, 'click', function() {
                        // where I have added .html to the marker object.
                        infowindow.setContent("this");
                        infowindow.open(map, this);
                    });
                }


                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < markers.length; i++) {
                    bounds.extend(markers[i].getPosition());
                }

                map.fitBounds(bounds);


            }


        });



    }
);
