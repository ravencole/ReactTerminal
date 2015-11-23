class TerminalCommandFormat {
    /**
     *  
     */
    constructor(_command) {
        this.rawCommand = _command;
        this.command    = {command: null, option: null, modifier: null};

        this.validateType();
        this.splitOrigionalCommand();
        this.formatCommand();
        this.formatModifiersAndOptions();
        return this.command;
    }
    formatCommand() {
        if (!this.rawCommand[0]) {
            this.command.error = 'no_command';
            return;
        }
        if (!this.IsAModifier(this.rawCommand[0])) {
            this.command.command = this.rawCommand[0];
        }        
    }
    formatModifiersAndOptions() {
        for (var i = 1; i <= this.rawCommand.length - 1; i++) {
            if (this.IsAModifier(this.rawCommand[i])) {
                this.command.modifier = this.rawCommand[i];
            } else {
                this.command.option = this.rawCommand[i];
            }
        };
    }
    IsAModifier(_commandSection) {
        if (_commandSection.substring(0,1) === '-') {
            return true;
        } 
        return false;
    }
    splitOrigionalCommand() {
        this.rawCommand = this.rawCommand.split(" ");
    }
    validateType() {
        if (typeof this.rawCommand != 'string') {
            this.rawCommand = String(this.rawCommand);
        }
    }
}

export default TerminalCommandFormat;