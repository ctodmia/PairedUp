module.exports = {  db: 'mongodb://localhost/mean-book',  
	sessionSecret: 'developmentSessionSecret',  
	github: {    
		clientID: 'Application Id',    
		clientSecret: 'Application Secret',    
		callbackURL: 'http://localhost:3000/oauth/github/callback'  
	} 
};