/**
* src/command/StartCommand.js 
* 06-08-2015 12:49
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {

	include("command/InitModelsCommand");
	include("command/InitMediatorsCommand");
	include("command/InitServiceCommand");
	include("command/InitCommandsCommand");
	include("command/RunCommand");
	
	/**
	 * @class com.domain.command.StartCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.StartCommand',
			parent: puremvc.MacroCommand
		},
		// INSTANCE MEMBERS
		{
			initializeMacroCommand: function() {
				console.log("exec com.domain.command.StartCommand");
				this.addSubCommand(com.domain.command.InitModelsCommand);
				this.addSubCommand(com.domain.command.InitMediatorsCommand);
				this.addSubCommand(com.domain.command.InitServiceCommand);
				this.addSubCommand(com.domain.command.InitCommandsCommand);
				this.addSubCommand(com.domain.command.RunCommand);
			}
		});

}