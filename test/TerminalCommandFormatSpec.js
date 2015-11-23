import { describe, it } from 'mocha';
import { expect } from 'chai';
import TerminalCommandFormat from '~/src/models/TerminalCommandFormat';

describe('TerminalCommandFormat', () => {

        it('can return an object', () => {
            const command = new TerminalCommandFormat('clear');
            expect(command).to.be.an('object');
        });

        it('can convert a number to a string', () => {
            const command = new TerminalCommandFormat(0);
            expect(command.command).to.be.equal('0');
        });

        it('can identify a command and cast it to the command property', () => {
            const command = new TerminalCommandFormat('clear now -k');
            expect(command.command).to.be.equal('clear');
        });

        it('can identify a modifier and cast it to the modifier property', () => {
            const command = new TerminalCommandFormat('clear -m');
            expect(command.modifier).to.be.equal('-m');
        });

        it('can identify an option and cast it to the option property', () => {
            const command = new TerminalCommandFormat('update color');
            expect(command.option).to.be.equal('color');
        });

        it('can split and organize the command, modifier, and option to their properties', () => {
            const command1 = new TerminalCommandFormat('style red -m');
            const command2 = new TerminalCommandFormat('style -m red');
            const command3 = new TerminalCommandFormat('style');
            const command4 = new TerminalCommandFormat('style red');
            const command5 = new TerminalCommandFormat('style -l');
            expect(command1).to.deep.equal({command: 'style', modifier: '-m', option: 'red'});
            expect(command2).to.deep.equal({command: 'style', modifier: '-m', option: 'red'});
            expect(command3).to.deep.equal({command: 'style', modifier: null, option: null});
            expect(command4).to.deep.equal({command: 'style', modifier: null, option: 'red'});
            expect(command5).to.deep.equal({command: 'style', modifier: '-l', option: null});
        });
});













