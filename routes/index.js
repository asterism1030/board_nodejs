
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'hello! you did it!' });
};