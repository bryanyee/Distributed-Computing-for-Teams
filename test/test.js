import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Navbar from '../src/components/navbar';
import AboutUs from '../src/components/AboutUs';
import JoinSession from '../src/components/JoinSession';
import Performance from '../src/components/Performance';
import WorkerInput from '../src/components/workerInput';
import LengthInput from '../src/components/lengthInput';

describe("Navbar", function () {
  it("contains one nav tag", function () {
    const wrapper = mount(<Navbar />);
    expect(wrapper.find('nav')).to.have.length(1);
  });
  it("all navlinks should direct to correct page", () => {
    const wrapper = shallow(<Navbar />);
    const links = ['/AboutUs', '/Contact', '/JoinSession'];
    expect(wrapper.find('NavLink').forEach((node) => {
      links.indexOf(node.prop('to') !== -1);
    }))
  })
});
describe("JoinSession", function () {
  beforeEach(() => {
    wrapper = mount(<JoinSession />);
  })
  it('Socket state values should init to falsy values', () => {
    expect(wrapper.state().ready).to.equal(false);
    expect(wrapper.state().userParticipation).to.equal(false);
    expect(wrapper.state().ready).to.equal(false);
    expect(wrapper.state().hasMaster).to.equal(false);
    expect(wrapper.state().isMaster).to.equal(false);
    expect(wrapper.state().calculating).to.equal(false);
    expect(wrapper.state().optimalWorkers).to.equal(undefined);
    expect(wrapper.state().begin).to.equal(undefined);
    expect(wrapper.state().end).to.equal(undefined);
  })
  it('Input state values should init to falsy values', () => {
    expect(wrapper.state().hash).to.equal(undefined);
    expect(wrapper.state().length).to.equal(undefined);
    expect(wrapper.state().workers).to.equal(undefined);
  })
})
describe("JoinSession2", function () {
  it('calls componentDidMount', () => {
    sinon.spy(JoinSession.prototype, 'componentDidMount');
    const wrapper = mount(<JoinSession />);
    expect(JoinSession.prototype.componentDidMount).to.have.property('callCount', 1);
    JoinSession.prototype.componentDidMount.restore();
  });
})
describe("AboutUs", function () {
  it('calls componentDidMount', () => {
    sinon.spy(AboutUs.prototype, 'componentDidMount');
    const wrapper = mount(<AboutUs />);
    expect(AboutUs.prototype.componentDidMount).to.have.property('callCount', 1);
    AboutUs.prototype.componentDidMount.restore();
  });
})

describe("Performance Input Fields", function () {
  const minProps = {
    updateSettings : () => {},
    optimalWorkers : 3,
    startMD5Decrypt : () => {inc++;}
  };
  let inc = 0;

  it('doesn\'t explode upon render', () => {
    const wrapper = shallow(<Performance {...minProps}/>);
    expect((wrapper).length).to.equal(1);
  })
  it('should contain three input fields', () => {
    const wrapper = shallow(<Performance {...minProps}/>);
    expect(wrapper.find('.form-control')).to.have.length(3);
  })
  it('should fire start function upon button click', () => {
    expect(inc).to.equal(0);
    const wrapper = shallow(<Performance {...minProps}/>);
    wrapper.find('button').simulate('click');
    expect(inc).to.equal(1);
  })
})

// describe("Join Session", function(){


//   it('contains a <Participate/> component', function () {
//     const wrapper = mount(<JoinSession />);
//     expect(wrapper.find(Participate)).to.have.length(1);
//   });

//   it('contains an <Performance/> component', function () {
//     const wrapper = mount(<JoinSession />);
//     expect(wrapper.find(Performance)).to.have.length(1);
//   });
//    it('contains an <WorkerProcess/> component', function () {
//     const wrapper = mount(<JoinSession />);
//     expect(wrapper.find(WorkerProcess)).to.have.length(1);
//   });

//    it('contains an <Host/> component', function () {
//     const wrapper = mount(<JoinSession />);
//     expect(wrapper.find(Host)).to.have.length(1);
//   });

//    it('contains an <Success/> component', function () {
//     const wrapper = mount(<JoinSession />);
//     expect(wrapper.find(Success)).to.have.length(1);
//   });

// });

// describe("Performance", function(){
//   it('should have "updateSettings"', () => {
//     const wrapper = mount(<Performance />);
//     expect(wrapper.props().updateSettings).to.be.defined();
//   });
//   it('should have "md5StartDecrypt"', () => {
//     const wrapper = shallow(<Performance />);
//     expect(Performance.props().md5StartDecrypt).to.be.defined();
//   })
//   it('should set the state of JoinSession when text is added to worker length input', () => {
//     const wrapper = mount(<workerInput />);
//     const joinSessionWrapper = mount(<JoinSession />)
//     wrapper.find('.workerInput').simulate('change', {target: {value: '3'}});
//     expect(joinSessionWrapper.state().workers).to.be.defined();
//     expect(joinSessionWrapper.state().workers).to.equal('3');

//   })
// })
// describe('Worker Input', function(){
//   it('should have an onChange prop', () => {
//     const wrapper = shallow(<WorkerInput />);
//     expect(WorkerInput.props().onChange).to.be.defined();
//   })
// })
