import Cell from './Cell'

const setup = {
    hoover: 10,
    dirt: 37
}

const cellPropsForDiv = {
    position: 12,
}
it('render cell without hoover or dirt correctly', () => {
    const wrapper = render(
        <Cell {...cellPropsForDiv} />

    )
    expect(wrapper).toMatchSnapshot()
})

const cellPropsForHoover = { ...setup, position: setup.hoover }
it('render the cell containing hoover position', () => {
    const wrapper = render(
        <Cell {...cellPropsForHoover} />

    )
    expect(wrapper).toMatchSnapshot()
})
const cellPropsForDirt = { ...setup, position: setup.dirt };

it('render the cell containing dirt correctly', () => {
    const wrapper = render(
        <Cell {...cellPropsForDirt} />

    )
    expect(wrapper).toMatchSnapshot()
})