import React from 'react';
import * as util from '~/src/utilities/utilities';
import * as messageStyles from '~/src/templates/messageStyles';

export const messageTemplates = ['alert', 'info', 'primary', 'success', 'warning'];

export default class TerminalTemplate {
    constructor(_command) {
        this.command = _command;

        return this.controller();
    }
    controller() {
        if (this.command.message) {
            return this.handleMessage();
        }
    }
    handleMessage() {

        if (util.isInArray(this.command.message, messageTemplates)) {
            return <div style={messageStyles.styles[this.command.message]}>{this.command.error}</div>;
        }

        return <div style={messageStyles.styles.primary}>{this.command.command}</div>;

    }
}