/**
* src/command/InitModelsCommand.js 
* 06-08-2015 12:49
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {

	/**
	 * @class com.domain.command.InitModelsCommand',
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.InitModelsCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				var proxy = new com.domain.model.SomeModelProxy();
				this.facade.registerProxy(proxy);
				proxy.init();
			}
		});
}