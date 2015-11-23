import React from 'react';
import Radium from 'radium';
import TerminalTemplate from '~/src/models/terminalTemplate';

let TerminalInput = React.createClass({
    render() {
        let styles = {
            terminalForm: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            terminalInput: {
                flexGrow: '1',
                backgroundColor: 'transparent',
                outline: '0',
                fontSize: '16px',
                fontFamily: 'serif',
                border: '0px solid transparent',
                color: this.props.terminalInputColor
            },
            terminalInputName: {
                marginRight: '4px'
            },
            terminalTextBox: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                padding: '10px',
                overflow: 'scroll',
                boxSizing: 'border-box',
                color: this.props.terminalInputColor
            }
        };
        let displayTerminalPreviousCommands = this.props.terminalPreviousCommands.map(function(command) {
            if (command.commandAdd) {
                return <div>Terminal:home {this.props.terminalUserName}$ {command.commandAdd}</div>;
            }
            return new TerminalTemplate(command);
        }.bind(this));
        return (
            <div style={[ styles.terminalTextBox ]}>
                {displayTerminalPreviousCommands}
                <form 
                    onSubmit={this.props.onTerminalSubmit}
                    style={[ styles.terminalForm ]}
                >
                    <div style={[ styles.terminalInputName ]}>   
                        Terminal:home {this.props.terminalUserName}$
                    </div>
                    <input 
                        onChange={this.props.onTerminalInputTextChange}
                        style={[ styles.terminalInput ]} 
                        value={this.props.terminalInputText}
                    />
                </form>
            </div>
        );
    } 
});

TerminalInput = Radium(TerminalInput);

export default TerminalInput;