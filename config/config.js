/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "localhost", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 12,
  units: "imperial",

  modules: [{
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "MMM-MyCalendar",
      position: "top_left", // This can be any of the regions. Best results in left or right regions.
      config: {
        colored: false,
        calendars: [{
          url: "webcal://p50-calendars.icloud.com/published/2/ysy49xNODGMeqlYnHmBhb15VDJJ_JWsV4k8UN3H5QsTZrtPBdsLMegWPjJD4eUi0RbbApvD1Y2zo-c1hEaSEptB-C8yeDFjzb3DVrnfti7E",
          symbol: 'calendar'
        }, ],
      }
    },
    {
      module: "compliments",
      position: "upper_third",
      "config": {
        "compliments": {
          "morning": ["Good morning, Alec"],
          "afternoon": ["Hi there, Alec"],
          "evening": ["Hi there, Alec"]
        }
      }
    },
    {
      module: 'MMM-SingleStock',
      position: 'bottom_center',
      config: {
        stockSymbol: 'GRUB',
        apiToken: 'pk_5bf8cfd177f94aaf923f4db9e0a48129',
        updateInterval: 300000, // 5 mins in milliseconds
        showChange: true, // false | true
        label: 'GRUB:' // 'symbol' | 'companyName' | 'none' | any string
      }
    },
    {
      module: 'MMM-CTA',
      position: 'bottom_left',
      config: {
        updateTime: 60000, // 1 minute, the API does not update much more often so going below this is unnecessary
        ctaApiKeyTrain: 'c8bd625e54cd4118938c85cade963dd9',
        trainStopName: 'California Blue Line', //String value, name your train stop
        trainStationID: 40570, //Train station ID:  Chicago Blue line example; http://www.transitchicago.com/developers/ttdocs/default.aspx#_Toc296199909
        maxResultTrain: 5, // Max number of incoming trains to disply
        moduleInstance: 1, // To run multiple instances of this module
      },
    },
    {
      module: 'MMM-darksky-hourly',
      position: 'top_right', // This can be any of the regions.
      config: {
        // See 'Configuration options' for more information.
        apiKey: 'a6935dcafcb538e07faaeb90588af591', // Dark Sky API key.,
        units: 'imperial',
        twentyFourHourTime: false,
        latitude: 41.917840,
        longitude: -87.695520
      }
    },
    {
      module: "MMM-NowPlayingOnSpotify",
      position: "bottom_right",
      config: {
        clientID: "863ad715608640da8e4edc0f4e2f4e54",
      clientSecret: "8fc4d38578f544f094cff509ec9af879",
      accessToken: "BQAoUI15mjx9MDkGC4WLYOQgSnplt5c48bFtApmydBcZ__1qwm46hxynuXxjw42iMX5ucgHNFqgf6QW-zdDjbRdsfc0gLDKO9arTjs4vOCIgWDq4KCoTceOE6Ya245Acqijb4euWMuvQpw0F0bk6Pox4qQ",
      refreshToken: "AQAycX6A5-JLDq7JRiaaoBCAQTKctFtt5EhdaqahaIQruq7_m2zcDjee77F-X2lGrNBA4nwv9YK2f-dzci84QE7zTFKE4NeS3RKeHeITFx79rwQWMzPXrtJnXk_PP3WpCSM"
      }
    }
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
