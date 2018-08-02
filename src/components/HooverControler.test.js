import HooverController from './HooverController'


it('render correctly', () => {
    const wrapper = render(<HooverController />)
    expect(wrapper).toMatchSnapshot()
})