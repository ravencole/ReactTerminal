import React, { Component } from 'react';
import Radium from 'radium';

class TerminalMenuButtons extends Component {
    render() {
        let styles = {
            terminalButtonContainer: {
                height: '100%',
                width: '70px',
                paddingLeft: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            },
            btn: {
                height: '12px',
                width: '12px',
                marginRight: '8px',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 1px black',
                ':hover': {
                    boxShadow: 'inset 0 0 4px black'
                }
            },
            btnClose: {
                backgroundColor: 'tomato'
            },
            btnMinimize: {
                backgroundColor: 'gold'
            },
            btnExpand: {
                backgroundColor: 'limegreen'
            }
        };
        return (
            <div style={styles.terminalButtonContainer}>
                <div 
                    key="one" 
                    style={[styles.btn, styles.btnClose]}
                ></div>
                <div 
                    key="two" 
                    style={[styles.btn, styles.btnMinimize]}
                    onClick={this.props.hideTerminal}
                ></div>
                <div 
                    key="three" 
                    style={[styles.btn, styles.btnExpand]}
                    onClick={this.props.expandTerminal}
                ></div>
            </div>
        );
    } 
}

TerminalMenuButtons = Radium(TerminalMenuButtons);
export default TerminalMenuButtons;