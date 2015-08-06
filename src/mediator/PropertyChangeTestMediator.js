/**
* PropertyChangeTestMediator.js 
* 06-08-2015 12:58
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {

	
	include("model/SomeModelProxy");
/**
 * @class com.domain.mediator.PropertyChangeTestMediator
 * @extends puremvc.Mediator
 *
 */
puremvc.define(
	// CLASS INFO
	{
		name: "com.domain.mediator.PropertyChangeTestMediator",
		parent: puremvc.Mediator
	},

	// INSTANCE MEMBERS
	{
		/** @override */
		listNotificationInterests: function() {
			return [com.domain.model.SomeModelProxy.CHANGE_COMMAND]
		},
		/** @override */
		handleNotification: function(note) {
			switch (note.getName()) {
				case com.domain.model.SomeModelProxy.CHANGE_COMMAND:
					console.log(note.body);
				break;
			}
		},
		/**
		 * [init description]
		 * @return {[type]} [description]
		 */
		init: function() {
	
		},
		/** @override */
		onRegister: function() {
			
		},
		/** @override */
		onRemove: function() {
			
		}
	},
	// STATIC MEMBERS
	{
		/**
		 * @static
		 * @type {string}
		 */
		NAME: 'com.domain.mediator.PropertyChangeTestMediator'
	});
}