import HooverController from './HooverController'


it('render correctly', () => {
    const wrapper = render(<HooverController />)
    expect(wrapper).toMatchSnapshot()
})


it('all the buttons clicked once', () => {
    const onClick = jest.fn()
    const wrapper = mount(<HooverController goLeft={onClick} goDown={onClick} goRight={onClick} goUp={onClick} />)
    const button = wrapper.find(`.btn-controller`)
    button.map(eachNode => eachNode.simulate('click'))
    expect(onClick).toHaveBeenCalledTimes(4)
})

