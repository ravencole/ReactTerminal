import ClearCommand from '~/src/models/clearCommand';
import NameCommand from '~/src/models/nameCommand';
import TerminalCommandFormat from '~/src/models/terminalCommandFormat';

class CommandController {
    constructor(_command, _previousCommands) {
        this.command = new TerminalCommandFormat(_command);
        this.unparsedCommand = _command;
        this.previousCommands = _previousCommands;
        
        return this.controller();
    }
    controller() {
        switch (this.command.command) {
            case 'clear':
                return new ClearCommand();
            case 'name':
                return this.logCommand(new NameCommand(this.command));
            default:
                return this.logCommand({commandLog:{message: true, template: null, error: 'not_a_command'}});
        }
    }
    logCommand(_commandAndState) {
        if (_commandAndState.state) {
            this.stateChange = _commandAndState.state;
        } else {
            this.stateChange = {};
        }
        _commandAndState.commandLog.command = this.unparsedCommand;
        this.stateChange.terminalPreviousCommands = this.previousCommands.concat({commandAdd: this.unparsedCommand},_commandAndState.commandLog);
        this.stateChange.terminalInputText = '';
        return this.stateChange;
    }
}

export default CommandController;