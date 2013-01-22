
/*
 * GET components page.
 */

exports.index = function(req, res){
  res.render('components', { title: 'Components' });
};