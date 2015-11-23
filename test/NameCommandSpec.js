import { describe, it } from 'mocha';
import { expect } from 'chai';
import NameCommand from '~/src/models/nameCommand';

describe('NameCommand', () => {

    it('returns an object', () => {
        const command = {command: null, option: null, modifier: null};
        const name = new NameCommand(command);
        expect(name).to.be.an('object');
    });

    it('returns a correctly formatted object', () => {
        const command = {command: null, option: null, modifier: null};
        const name = new NameCommand(command);
        expect(name).to.have.property('state');
        expect(name).to.have.property('commandLog');
        expect(name).to.have.deep.property('commandLog.message');
        expect(name).to.have.deep.property('commandLog.error');
        expect(name).to.have.deep.property('commandLog.template');
    });

    it('returns an error if no option is passed', () => {
        const command = {command: 'name', option: null, modifier: null};
        const name = new NameCommand(command);
        expect(name.commandLog.error).to.be.a('string');
    });

    it('sets the option to a terminalUserName property of the state object', () => {
        const command = {command: 'name', option: 'raven', modifier: null};
        const name = new NameCommand(command);
        expect(name.state.terminalUserName).to.equal('raven');
    });

    it('returns an error if a modifier that does not exist is passed', () => {
        const command = {command: 'name', option: 'raven', modifier: '-z'};
        const name = new NameCommand(command);
        expect(name.commandLog.error).to.be.a('string');
    });

    it('transforms the option passed to uppercase when the -u modifier is called', () => {
        const command = {command: 'name', option: 'raven', modifier: '-u'};
        const name = new NameCommand(command);
        expect(name.state.terminalUserName).to.equal('RAVEN');
    });
});










