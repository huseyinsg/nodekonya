var siteName="Konyalı Saat"

exports.makeAllRoutes=function(app){

	app.get("/",function(req,res){
		res.render("index",{title : siteName + " - Index"});
	});

	app.get("/account/login",function (req,res) {
		res.render("account/login",{title : siteName + " - Login"});
	});

	app.get("/account/register",function (req,res) {
		res.render("account/register",{title : siteName + " - Register"});
	});

};
