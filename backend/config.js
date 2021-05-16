const Twitter = require('twit');
const port = process.env.PORT || 3000;
const apiClient = new Twitter({
    consumer_key: 'KRy7l0v8wex3w8Sy5zThai3Ea',
    consumer_secret: 'X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu',
    access_token: '1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja',
    access_token_secret: 'tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj'
});
module.exports = {
    port,
    apiClient
}