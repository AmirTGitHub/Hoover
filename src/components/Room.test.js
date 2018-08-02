import Room from './Room'


const roomSetup = {
    grid: [...new Array(25)],
    width: 5
}

it('render correctly the room', () => {
    const wrapper = render(<Room {...roomSetup} />)
    expect(wrapper).toMatchSnapshot()

})

it('not render anything if there was any props', () => {
    const wrapper = render(<Room />)
    expect(wrapper).toMatchSnapshot()
})

it('render anything if grid is 0', () => {
    const wrapper = render(<Room grid={0} />)
    expect(wrapper).toMatchSnapshot()
})