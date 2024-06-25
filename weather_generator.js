//WeatherGenerator
//Get the time and format it from Simple Calendar
const ts =SimpleCalendar.api.timestamp(); 
const date = SimpleCalendar.api.formatTimestamp(ts, "DD/MM/YYYY HH:mm:ss A");

ChatMessage.create({ content: "<b>Night City Current Conditions for</b> <p>" + date})

// Get the season to pass on to the weather rolltables
// Get the current season using the Simple Calendar API
const whatSeason = SimpleCalendar.api.getCurrentSeason();
const season = whatSeason.name


//Let's roll on some charts
//First Season Temperatures
if (season === "Spring") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.g1AbiMobJqYX3rYl";
    const table = await fromUuid(uuid);
    await table.draw()} 
else if (season === "Summer") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.MvuHA3TpXMZnggm2";
    const table = await fromUuid(uuid);
    await table.draw()} 
else if (season === "Fall") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.bpZRL3OZD6INzpBP";
    const table = await fromUuid(uuid);
    await table.draw()} 
else if (season === "Winter") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.EXi1EgrqZS1OyF9e";
    const table = await fromUuid(uuid);
    await table.draw()}

//Now the Weather
if (season === "Spring") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.4dvUbmExMubAwh4r";
    const table = await fromUuid(uuid);
    await table.draw()} 
else if (season === "Summer") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.kNWBev0GkogyvwrN";
    const table = await fromUuid(uuid);
    await table.draw()} 
else if (season === "Fall") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.KXMUZeYOJwBRgPcG";
    const table = await fromUuid(uuid);
    await table.draw()} 
else if (season === "Winter") {
    const uuid = "Compendium.cpr-night-city-weather-generator.night-city-weather-tables.RollTable.cRj82EJ2IGzFyF4J";
    const table = await fromUuid(uuid);
    await table.draw()}