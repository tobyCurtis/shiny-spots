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
                        trHTML += '<tr><td>' + value.name + '</td><td>' + value.description + '</td><td><a class="btn btn-primary" href="' + mapLink + '">Open in Google Maps</a></td></tr>';
                        $('#spots').append(trHTML);
                    }
                );
            }
        );
    }
);
