import React, { Component } from 'react';
import Radium from 'radium';
import TerminalMenuButtons from './components/terminalMenuButtons';
import TerminalInput from './components/terminalInput';

var Terminal = React.createClass({
    getInitialState() {
        return {
            firstClickTerminalResizeX: false,
            firstClickTerminalResizeY: false,
            origionalTermnalHeight: false,
            origionalTermnalWidth: false,
            terminalHasMoved: false,
            terminalHidden: false,
            terminalMoving: false,
            terminalPositionTop: '50%',
            terminalPositionLeft: '50%',
            terminalSizeHeight: 400,
            terminalSizeWidth: 650
        }
    },
    dropTerminal() {
        if (this.state.terminalMoving) {
            document.onmousemove = function() {return};
            this.setState({ terminalMoving: false });
        }
    },
    expandTerminal() {
        this.setState({ terminalHidden: false });
    },
    hideTerminal() {
        this.setState({ terminalHidden: true });
    },
    moveTerminal() {
        document.onmousemove = function(e) {
            this.setState({
                terminalPositionTop: (e.pageY + 15) + 'px',
                terminalPositionLeft: (e.pageX - (this.state.terminalSizeWidth/2)) + 'px',
                terminalMoving: true,
                terminalHasMoved: true
            });
        }.bind(this);
    },
    resizeTerminal() {
        console.log('fuckme');
        document.onmousemove = function(e) {
            var newHeight = this.state.origionalTermnalHeight - (this.state.firstClickTerminalResizeY - e.pageY);
            var newWidth  = this.state.origionalTermnalWidth - (this.state.firstClickTerminalResizeX - e.pageX);

            if (!this.state.firstClickTerminalResizeX) {
                this.setState({ 
                    firstClickTerminalResizeX: e.pageX,
                    firstClickTerminalResizeY: e.pageY,
                    origionalTermnalHeight: this.state.terminalSizeHeight,
                    origionalTermnalWidth: this.state.terminalSizeWidth
                });
                return
            }
            if (newHeight < 60) 
                this.setState({ terminalSizeHeight: 60 });
            else 
                this.setState({ terminalSizeHeight: newHeight });
            if (newWidth < 200) 
                this.setState({ terminalSizeWidth: 200 });
            else
                this.setState({ terminalSizeWidth: newWidth });
        }.bind(this);
    },
    stopResizeTerminal() {
        document.onmousemove = function() {return};
        this.setState({ 
            firstClickTerminalResizeY: false,
            firstClickTerminalResizeX: false
        });
    },
    render() {
        let styles = {
            dragBar: {
                height: '4px',
                width: '25px',
                borderRadius: '2px',
                backgroundColor: 'rgba(0,0,0,.15)',
                boxShadow: '0px 8px 0 rgba(0,0,0,.15), 0px 16px 0 rgba(0,0,0,.15)'
            },
            dragIconContainer: {
                height: '100%',
                width: '30px',
                position: 'absolute',
                top: '0',
                left: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transform: 'translateX(-50%)',
                paddingTop: '5px',
                ':hover': {
                    cursor: 'pointer'
                }
            },
            Container: {
                height: this.state.terminalSizeHeight + 'px',
                width: this.state.terminalHidden ? '200px' : this.state.terminalSizeWidth + 'px',
                position: 'fixed',
                top: this.state.terminalHidden ? '100%' : this.state.terminalPositionTop,
                left: this.state.terminalHidden ? '0' : this.state.terminalPositionLeft,
                transform: this.state.terminalHasMoved ? '' : 'translateX(-50%) translateY(-50%)',
                borderRadius: '0 0 10px 10px',
                backgroundColor: 'rgba(0,0,0,.4)',
                transition: this.state.terminalHidden ? 'all 200ms ease' : ''
            },
            MenuBar: {
                position: 'absolute',
                top: '-30px',
                left: '0',
                height: '30px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderRadius: '5px 5px 0 0',
                background: 'linear-gradient(to bottom, #efefef 0%,#d8d8d8 80%)'
            },
            ResizeIconContainer: {
                height: '30px',
                width: '30px',
                position: 'absolute',
                bottom: '0',
                right: '0',
                ':hover': {
                    cursor: 'nwse-resize'
                }
            },
            ResizeIcon: {
                height: '5px',
                width: '5px',
                position: 'absolute',
                bottom: '5px',
                right: '16px',
                borderRadius: '50%',
                backgroundColor: '#efefef',
                boxShadow: '6px -6px 0px 0px #efefef, 12px -12px 0px 0px #efefef, 12px 0px 0px 0px #efefef',
            }
        }
        return (
            <div style={ styles.Container }>
                <div style={ styles.MenuBar }>
                    <div 
                        key="terminalDragIcon" 
                        style={ styles.dragIconContainer } 
                        onMouseUp={this.dropTerminal} 
                        onMouseDown={this.moveTerminal}
                    >
                        <div style={styles.dragBar}></div>
                    </div>
                    <TerminalMenuButtons 
                        hideTerminal={this.hideTerminal}
                        expandTerminal={this.expandTerminal}
                    />
                </div>
                <div 
                    key="ResizeIcon" 
                    style={[ styles.ResizeIconContainer ]}
                    onMouseDown={this.resizeTerminal}
                    onMouseUp={this.stopResizeTerminal}
                >
                    <div style={ styles.ResizeIcon }></div>
                </div>
                <TerminalInput />
            </div>
        );
    }
});

Terminal = Radium(Terminal);
export default Terminal;