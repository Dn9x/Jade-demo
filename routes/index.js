
/*
 * GET home page.
 */

module.exports = function(app){

  app.get('/',function(req,res){
  	//返回结果
	res.render('index', {
		title: 'Jade Demo',   //页面titile
	});
  });

  app.get('/user',function(req,res){
  	//返回结果
	res.render('index', {
		title: 'Jade Demo user.jade',   //页面titile
	});
  });

};
