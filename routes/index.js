var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, resp) {
        client.get("http://api.kptaipei.tw/v1/albums/?page_size=5", {}, function(data, res){
              var config = JSON.parse(data.toString());
              albums = config.data;
        });

        client.get("http://api.kptaipei.tw/v1/albums/?page_size=20", {}, function(data, res){
              var config = JSON.parse(data.toString());
              all_albums = config.data;
        });

        var renderData = {
         title: '柯 p 野生 API',
         albums: albums,
         all_albums: all_albums,
       };

       resp.render('index', renderData);


  // res.render('index', { title: 'KP\'s HomePage' });
});

router.get('/category', function(req, resp) {
        client.get("http://api.kptaipei.tw/v1/category/", {}, function(data, res){
              var config = JSON.parse(data.toString());
              console.log(config.data);


              //將資料寫在 locals
              resp.locals.posts = config.data;
              resp.locals.albums = config.data;

              var renderData = {
                   title: '柯 p 野生 API',
                   data: config.data
              };

              resp.render('category', renderData);
        });
});

router.get('/category/:id', function(req, resp) {
        var id = req.params.id;
        client.get("http://api.kptaipei.tw/v1/category/"+id, {}, function(data, res){
              var config = JSON.parse(data.toString());
              console.log(config.data);


              //將資料寫在 locals
              resp.locals.posts = config.data;
              resp.locals.albums = config.data;

              var renderData = {
                   title: '柯 p 野生 API',
                   data: config.data
              };

              resp.render('category_id', renderData);
        });
});

router.get('/albums', function(req, res) {
  res.render('albums', { title: 'Express' });
});

router.get('/videos', function(req, res) {
  res.render('videos', { title: 'Express' });
});

router.get('/musics', function(req, res) {
  res.render('musics', { title: 'Express' });
});



module.exports = router;
