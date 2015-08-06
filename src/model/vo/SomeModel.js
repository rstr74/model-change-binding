/**
* SomeModel.js 
* 06-08-2015 13:29
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
/**
 * @class com.domain.model.vo.SomeModel
 *
 */
puremvc.define(
	// CLASS INFO
	{
		name: "com.domain.model.vo.SomeModel",
		constructor: function(data) {
			this.foo = 1
			this.bar = "SOME BAR";
		}
	},
	// INSTANCE MEMBERS 
	{
		
	},
	// STATIC MEMBERS	
	{
		NAME: 'com.domain.model.vo.SomeModel',
	});

}