/**
 * ModelChangeProxy.js 
 * 06-08-2015 12:50
 * 
 * @author 
 * @email 
 * 
 */

module.exports = function(include, puremvc) {

	/**
	 * @class npmvc.ModelChangeProxy
	 *
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: "npmvc.ModelChangeProxy",
			parent: puremvc.Proxy
		},
		// INSTANCE MEMBERS 
		{
			onRegister: function() {
				this.model = {};
				this.listeners = {};
				this.modelref = {};
			},
			setModel: function(model) {
				this.CHANGE_COMMAND = this.constructor.CHANGE_COMMAND;
				this.modelref = model.constructor.NAME;
				var self = this;
				for (var prop in model) {
					var _prop = prop;
					this.model[prop] = model[_prop];
					this.addChangeListener(prop, function(_prop) {
						self.facade.sendNotification(this.CHANGE_COMMAND, {
							model: this.modelref,
							property: _prop,
							value: self.model[_prop]
						});
					}.bind(this));
				}
				this.set = this.setProperty;
				this.get = this.getProperty;
			},
			getModel: function() {
				return this.model;
			},
			getmodel: function() {
				return this.model;
			},
			addChangeListener: function(_property, callback) {
				if (!this.listeners[_property]) {
					this.listeners[_property] = [];
				}
				this.listeners[_property].push(callback);

			},
			// returns false if _value quals current value otherwise true
			setProperty: function(_property, _value) {
				if (this.model[_property] == undefined || this.model[_property] == null) {
					var self = this;
					this.addChangeListener(_property, function(_prop) {
						self.facade.sendNotification(this.CHANGE_COMMAND, {
							model: this.modelref,
							property: _property,
							value: self.model[_property]
						});
					}.bind(this));
				}
				if (this.model[_property] != _value) {
					this.model[_property] = _value;
					for (var listener in this.listeners[_property]) {
						this.listeners[_property][listener](_property, _value)
					}
					return true;
				} else {
					return false;
				}
			},
			getProperty: function(_property) {
				return this.model[_property];
			}
		},
		// STATIC MEMBERS	
		{
			NAME: 'npmvc.ModelChangeProxy',
		});


}