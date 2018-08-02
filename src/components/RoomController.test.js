import RoomController from './RoomController'


it('render the three inputs with one button', () => {
    const wrapper = render(
        <RoomController />
    )
    expect(wrapper).toMatchSnapshot()
})



it('button works correctly', () => {
    const onClick = jest.fn()
    const wrapper = mount(<RoomController createRoom={onClick} />)
    const btn = wrapper.find('.btn').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)


})

