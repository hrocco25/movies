import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import App from "./App.js"
import Header from './component/header/header'
import MovieInfo from './component/movieInfo'

describe("App component:", () => {
  let component
  beforeEach(() => {
    component = shallow(<App />)
  })
  it('has a App class', () => {
    expect(component.hasClass('App')).toEqual(true)
  })
})

describe("Header component:", () => {
  let component
  beforeEach(() => {
    component = shallow(<Header />)
  })
})




