import CommandModel from '~/src/models/commandModel';
import TerminalCommand from '~/src/models/terminalCommand';

class CommandController {
    constructor(_command, _previousCommands) {
        this.rawCommand = new TerminalCommand(_command);
        return this.rawCommand;
    }
}

export default CommandController;