$(document).ready(
    function()
    {



        $.getJSON("../topspots.json", function(data)
        {

            $(data).each(function(index, value)
            {
                //creating the HTML holder for the row
                var trHTML = '';
                var mapLink = "https://www.google.com/maps?q=";
                mapLink += value.location[0] + "," + value.location[1];
                trHTML += '<tr><td>' + value.name + '</td><td>' + value.description + '</td><td><a href="' + mapLink + '" class="btn btn-primary" target="_blank"' + '>Open in Google Maps</a></td></tr>';
                $('#spots').append(trHTML);
            });



            var map;
            window.initMap = function()
            {
                map = new google.maps.Map(document.getElementById('map'),
                    {
                        center:
                        {
                            lat: 32.7152778,
                            lng: -117.1563889
                        },
                        zoom: 10
                    }

                );

                for (var i = 0; i < data.length; i++)
                {
                    var latLng = new google.maps.LatLng(data[i].location[0], data[i].location[1]);
                    var marker = new google.maps.Marker(
                    {
                        position: latLng,
                        map: map,
                        title: data[i].name
                    });
                }


            }

            // Where I need to put code inserting elements


        });







        // function initMap()
        // {
        //     var myLatLng = {
        //         lat: -25.363,
        //         lng: 131.044
        //     };

        //     var map = new google.maps.Map(document.getElementById('map'),
        //     {
        //         zoom: 4,
        //         center: myLatLng
        //     });

        //     var marker = new google.maps.Marker(
        //     {
        //         position: myLatLng,
        //         map: map,
        //         title: 'Hello World!'
        //     });
        // }



    }
);
