import Header from './Header'

it('check heather render corectly', () => {
    const wrapper = render(
        <Header title='hoover app' />
    )
    expect(wrapper).toMatchSnapshot()
})