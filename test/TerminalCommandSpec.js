import { describe, it } from 'mocha';
import { expect } from 'chai';
import TerminalCommand from '~/src/models/TerminalCommand';

describe('TerminalCommand', () => {

        it('can return an object', () => {
            const command = new TerminalCommand('clear');
            expect(command).to.be.an('object');
        });

        it('can convert a number to a string', () => {
            const command = new TerminalCommand(0);
            expect(command.command).to.be.equal('0');
        });

        it('can return an error if an empty string is passed', () => {
            const command = new TerminalCommand('');
            expect(command).to.deep.equal({command: null, option: null, modifier: null, error: 'no_command'});
        });

        it('can identify a command and cast it to the command property', () => {
            const command = new TerminalCommand('clear now -k');
            expect(command.command).to.be.equal('clear');
        });

        it('can identify a modifier and cast it to the modifier property', () => {
            const command = new TerminalCommand('clear -m');
            expect(command.modifier).to.be.equal('-m');
        });

        it('can identify an option and cast it to the option property', () => {
            const command = new TerminalCommand('update color');
            expect(command.option).to.be.equal('color');
        });

        it('can split and organize the command, modifier, and option to their properties', () => {
            const command1 = new TerminalCommand('style red -m');
            const command2 = new TerminalCommand('style -m red');
            const command3 = new TerminalCommand('style');
            const command4 = new TerminalCommand('style red');
            const command5 = new TerminalCommand('style -l');
            expect(command1).to.deep.equal({command: 'style', modifier: '-m', option: 'red', error: null});
            expect(command2).to.deep.equal({command: 'style', modifier: '-m', option: 'red', error: null});
            expect(command3).to.deep.equal({command: 'style', modifier: null, option: null, error: null});
            expect(command4).to.deep.equal({command: 'style', modifier: null, option: 'red', error: null});
            expect(command5).to.deep.equal({command: 'style', modifier: '-l', option: null, error: null});
        });
});