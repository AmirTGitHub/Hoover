import Home from './Home'

const selector = (id) => `[data-test="${id}"]`

const firstState = {
    column: 0,
    row: 0,
    disabled: false,
    room: [],
    dirtPosition: 0,
    hooverPosition: 0,
    display: false
}

it('render the whole app', () => {
    const wrapper = render(
        <Home />
    )
    expect(wrapper).toMatchSnapshot()
})


it('check to have empty state at the beginning', () => {
    const wrapper = mount(<Home />)
    const emptyState = wrapper.state()
    expect(emptyState).toMatchObject(firstState)
})


const newState = {
    column: 10,
    row: 10,
    disabled: true,
    room: [...new Array(100)],
    dirtPosition: 48,
    hooverPosition: 10,
    display: true
}

it('render the room and the hoover controller when the display in state changed', () => {
    const wrapper = mount(<Home />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setState({ ...newState })
    expect(wrapper).toMatchSnapshot()

})