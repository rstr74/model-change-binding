/**
* src/command/InitServiceCommand.js 
* 06-08-2015 12:49
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
		
	// include("...");

	/**
	 * @class com.domain.command.InitServiceCommand',
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.InitServiceCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				console.log("exec com.domain.command.InitServiceCommand");
			}
		});
}