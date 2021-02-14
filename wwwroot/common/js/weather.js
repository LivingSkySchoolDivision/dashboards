
function weather_init(weather_url) {
    console.log("Initializing weather from " + weather_url);

    weather_update(weather_url);
}

function weather_update(weather_url) {
    console.log("Updating weather from " + weather_url);

    $.ajax({
        url: weather_url,
        dataType : "json",
        success : function(parsed_json)
        {
            var location = parsed_json['locationName'];
            var temp_feels_c = parsed_json['temperatureCelsiusWithWindChill'];
            var temp_c = parsed_json['temperatureCelsius'];
            var conditions = parsed_json['conditions'];
            var humidity = parsed_json['humidity'];
            var wind = parsed_json['wind'];
            var visibility = parsed_json['visibility'];

            $('#weather-temperature').html(temp_c + "&deg;");
            $('#weather-detail-icon').html("<img src=\"../../img/weather/" + getWeatherIcon(conditions) + "\">");
            $('#weather-conditions').html(conditions);
            $('#weather-wind').html(wind);
            $('#weather-humidity').html(humidity);
            $('#weather-feelslike').html("Feels like: "  + temp_feels_c + "&deg;");
        }
        });
}


function getWeatherIcon(conditions) {
    return conditions.toLowerCase().replace(/\s/g, '') + ".png";
}