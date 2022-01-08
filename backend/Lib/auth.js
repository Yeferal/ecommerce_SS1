module.exports = {

    isLoggedIn(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.json({redirect:'/login'});
    },

    isNotLoggedIn(req,res,next){
        if(!req.isAuthenticated()){
            return next();
        }
        return res.json({redirect:'/home'});
        // return res.status(200).send({redirect:'/login'});
        // return res.redirect('/profile');
    }
}