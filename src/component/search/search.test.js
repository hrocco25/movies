import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import Search from './search'

describe('Search Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Search />)
    })
    it('Should contain class name content', () => {
     expect(wrapper.find('div').at(1).hasClass('content')).toEqual(true)
    })

    it('Should contain class name Search', () => {
     expect(wrapper.find('label').at(0).hasClass('search')).toEqual(true)
    })

    it('Should contain class name currentMovie', () => {
     expect(wrapper.find('div').at(3).hasClass("currentMovie")).toEqual(true)
    })
  })


