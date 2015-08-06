/**
 * SomeModelProxy.js 
 * 06-08-2015 13:36
 * 
 * @author 
 * @email 
 * 
 */

module.exports = function(include, puremvc) {

	include("model/ModelChangeProxy");
	include("model/vo/SomeModel");
	
	puremvc.define(
		// CLASS INFO
		{
			name: "com.domain.model.SomeModelProxy",
			parent: npmvc.ModelChangeProxy
		},
		// INSTANCE MEMBERS 
		{
			init:function(){
				this.setModel(new com.domain.model.vo.SomeModel());
			},
			doSomeModelAction:function() {
				this.setProperty("test","TEST_VALUE");

			}
		},
		// STATIC MEMBERS	
		{
			NAME: 'com.domain.model.SomeModelProxy',
			CHANGE_COMMAND:"SOME_MODEL_PROPERTY_CHANGE"
		});
}