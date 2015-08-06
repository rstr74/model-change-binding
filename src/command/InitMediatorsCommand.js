/**
* src/command/InitMediatorsCommand.js 
* 06-08-2015 12:49
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
		
	include("mediator/PropertyChangeTestMediator");

	/**
	 * @class com.domain.command.InitMediatorsCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.InitMediatorsCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				var m = new com.domain.mediator.PropertyChangeTestMediator();
				this.facade.registerMediator(m);
			}
		});
}