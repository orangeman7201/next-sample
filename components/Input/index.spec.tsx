import { render, screen, RenderResult, fireEvent, getByRole } from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />)
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('should render the label', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLElement

    expect(inputNode).toHaveValue('')
  })

  it('should show input text', () => {
    const inputText = 'Test Input'
    const inputNode = screen.getByLabelText('Username') as HTMLElement

    fireEvent.change(inputNode, { target: { value: inputText } })

    expect(inputNode).toHaveValue(inputText)
  })

  it('リセットボタンを押したときインプットボックスのvalueが削除されること', () => {
    const inputText = 'Test Input'
    const inputNode = screen.getByLabelText('Username') as HTMLElement
    const buttonNode = screen.getByRole('button')

    fireEvent.change(inputNode, { target: { value: inputText } })
    fireEvent.click(buttonNode)

    expect(inputNode).toHaveValue('')
  })
})