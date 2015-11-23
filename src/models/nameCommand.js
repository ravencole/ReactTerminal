class NameCommand {
    constructor(_command) {
        this.command = _command;
        this.output = {
            state: {}, 
            commandLog: {
                message: null,
                template: null,
                error: null
            }
        };

        this.controller();
        return this.output;
    }
    controller() {
        if (!this.command.option) {
            this.output.commandLog.error = 'requires_option';
            this.output.commandLog.message = 'alert';
            return;
        }   

        if (this.command.modifier) {
            switch (this.command.modifier) {
                case '--uppercase':
                    //fallthrough
                case '-u':
                    this.command.option = this.command.option.toUpperCase();
                    break;
                default:
                    this.output.commandLog.message = 'alert';
                    this.output.commandLog.error = 'not_a_modifier';
                    return;
            }
        }

        this.output.state.terminalUserName = this.command.option;
    }
}

export default NameCommand;