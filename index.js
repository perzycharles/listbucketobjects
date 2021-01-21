'use strict';
 
// const {Storage} = require('@google-cloud/storage');
 
const https = require('https')
 
exports.helloObject = (req, res) => {
    // https.get('https://storage.googleapis.com/storage/v1/b/[bucket]/o/', (res) => {
    //     console.log('statusCode:', res.statusCode);
    //     console.log('headers:', res.headers);
 
    //     res.on('data', (d) => {
    //         process.stdout.write(d);
    //     });
 
    // }).on('error', (e) => {
    // console.error(e);
    // });
 
    const options = {
        hostname: 'storage.googleapis.com',
        port: 443,
        path: '/storage/v1/b/[bucket]/o',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
 
    const reqe = https.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
        });
    reqe.on('error', error => {
        console.error(error)
    })
 
    reqe.end()
        
    res.send('Hello World!');
};
