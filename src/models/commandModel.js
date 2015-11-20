class CommandModel {
    constructor(_command, _previousCommands) {
        this.command = _command;
        this.previousCommands = _previousCommands;
    }
    clear() {
        return {
            terminalPreviousCommands: [],
            terminalInputText: ''
        };
    }
}

export default CommandModel;