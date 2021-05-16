const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config');
app.set('port', config.port);

app.use(express.json());
app.use(cors());

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

app.listen(app.get('port'), () => {
    console.log('server running on port ' + config.port);
});