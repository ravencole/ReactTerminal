import React from 'react';
import Radium from 'radium';

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
                height: '12px',
                backgroundColor: 'transparent',
                outline: '0',
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
            return (
                <div>{command.content}</div>
            );
        });
        return (
            <div style={[ styles.terminalTextBox ]}>
                {displayTerminalPreviousCommands}
                <form 
                    onSubmit={this.props.onTerminalSubmit}
                    style={[ styles.terminalForm ]}
                >
                    <div style={[ styles.terminalInputName ]}>   
                        Terminal:home guest$
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