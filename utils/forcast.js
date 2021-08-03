const { response } = require("express");
const request = require("request");

const forcast = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=21b140dcaf06da0c35c865ba8a9a45f5&query=${address}`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.success == false) {
      callback("This location is invalid", undefined);
    } else {
      callback(undefined, {
        city: body.location.name,
        description: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain.`,
      });
    }
  });
};

module.exports = forcast;
