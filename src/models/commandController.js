class CommandController {
    /**
     * [
     * formatTerminalCommand
     *     the first method to deal with new command from the terminal.
     *     it splits the string argument and finds the command, modifier, and option that was passed.
     *     if any of these are incomplete an error property is populated with an error message.
     * ]
     * @param  {[string]} _command [command from the terminal]
     * @return {[object]} this.command [formatted terminal command object]
     */
    formatTerminalCommand(_command) {
        let command;
        this.command = {command: null, option: null, modifier: null, error: null};

        //cautious type check/set
        if (typeof _command != 'string'){
            command = String(_command).split(" ");
        } else {
            command = _command.split(" ");
        }

        //if no string is passed, a no_command error is set. 
        if (command[0]) {
            //modifiers should not be passed first, but if they are the command property
            //is kept at null so the controller can better deal with it.
            if (command[0].substring(0,1) === '-') {
                this.command.modifier = command[0];
            } else {
                this.command.command = command[0];
            }
        } else {
            this.command.error = 'no_command';
        }
        //if it starts with a '-' its a modifier.
        //anything else gets set to an option for right now.
        if (command[1]) {
            if (command[1].substring(0,1) === '-') {
                this.command.modifier = command[1];
            } else {
                this.command.option = command[1];
            }
        }
        if (command[2]) {
            if (command[2].substring(0,1) === '-') {
                this.command.modifier = command[2];
            } else {
                this.command.option = command[2];
            }
        }
        return this.command;
    }
}

export default CommandController;