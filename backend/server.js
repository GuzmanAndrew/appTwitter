const express = require('express');
const config = require('./config');
const app = express();

app.use(require('cors'));
app.use(require('body-parser').json());

app.get('/tweets', (req, res) => {
    const params = {count: 9, tweet_mode: 'extended'};
    config.apiClient.get('statuses/home_timeline', params)
    .then(timeline => {
        res.send(timeline);
    }).catch(error => {
        res.send(error);
    })
});

app.get('/search/:word', (req, res) => {
    const params = {count: 9, tweet_mode: 'extended', q: req.params.word, result_type: 'recent', lang: 'es'};
    config.apiClient.get('search/tweets', params)
    .then(results => {
        res.send(results);
    }).catch(error => {
        res.send(error);
    })
});

app.listen(config.port, () => {
    console.log('server running on port ' + config.port );
});