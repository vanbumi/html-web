var express = require('express');
var mongoose = require('mongoose');

var app = express();

var firebase = require ('firebase');

firebase.initializeApp({
    serviceAccount: "./latihan-497555a9fb92.json",
    databaseURL: "https://latihan-28bd0.firebaseio.com",function(err){
        if (err){
          console.log(err);
        } else {
          console.log("Connected to the database")
        }
    }
});

var ref=firebase.database().ref('node-js');
var messagesRef=ref.child('messages');

messagesRef.push({
    name:'azam',
    admin:true,
    Age:1,
    text:'hey guys'
});

app.get('/', function(req, res, next){
    res.json('Selamat Datang di Halaman Beranda')
  });
  

app.listen(3300,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('server berjalan di port 3300')
    }
});
