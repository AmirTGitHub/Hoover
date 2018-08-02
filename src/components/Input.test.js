import Input from './Input'

const handleChange = (event) => {
    event.target.value
}

const setupRow = {
    title: 'Row',
    name: 'row',
    getRow: () => { }
}
const selector = (id) => `[data-test="${id}"]`



it('capture the row number', () => {
    const wrapper = mount(<Input {...setupRow} value={10} />)
    const rowInput = wrapper.find(selector('input')).props()
    expect(rowInput.value).toEqual(10)
})

it('input the negative number', () => {
    const wrapper = mount(<Input {...setupRow} value={-10} />)
    const rowInput = wrapper.find(selector('input')).props()
    expect(rowInput.value).toEqual(-10)
})