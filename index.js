/**
* index.js 
* 06-08-2015 12:48
* 
* @author 
* @email 
* 
*/

var puremvc = require("npmvc");
puremvc.validateIncludePaths = false;
puremvc.setSourceDir( __dirname + "/src");

puremvc.include("AppFacade");
puremvc.include("AppConstants");

var facade = com.domain.AppFacade.getInstance(com.domain.AppFacade.NAME);
facade.start();