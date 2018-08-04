import Header from './Header'

it('check header render correctly', () => {
    const wrapper = render(
        <Header title='hoover app' />
    )
    expect(wrapper).toMatchSnapshot()
})