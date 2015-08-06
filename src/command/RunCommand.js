/**
 * src/command/RunCommand.js 
 * 06-08-2015 12:49
 * 
 * @author 
 * @email 
 * 
 */

module.exports = function(include, puremvc) {

	include("mediator/PropertyChangeTestMediator");

	/**
	 * @class com.domain.command.RunCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.RunCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				var proxy = this.facade.retrieveProxy(com.domain.model.SomeModelProxy.NAME);
				console.log(proxy.get("foo"));
				console.log(proxy.get("bar"));
				proxy.set("foo", 100);
				proxy.set("bar", -101);
				proxy.set("bar", "NNNNNN");
				proxy.doSomeModelAction();
				proxy.doSomeModelAction();
			}
		});
}