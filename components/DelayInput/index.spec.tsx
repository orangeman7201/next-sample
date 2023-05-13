import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react'
import { DelayInput } from './index'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    handleChange = jest.fn()

    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
    jest.useFakeTimers()
  })

  it('初期表示時は何も表示されないこと', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })


  it('入力直後はspan要素が「入力中」となること', () => {
    const inputText = 'hogehoge'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    fireEvent.change(inputNode, {target: {value: inputText}})
    const spanNode = screen.getByTestId('display-text') as HTMLInputElement

    expect(spanNode).toHaveTextContent('入力中...')
  })

  it('入力1秒後はspan要素が「入力したテキスト: hogehoge」となること', async() => {
    const inputText = 'hogehoge'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    await act(async() => {
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLInputElement
    expect(spanNode).toHaveTextContent('入力したテキスト: hogehoge')
  })

  it('onChangeが呼ばれること', async () => {
    const inputText = 'hogehoge'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    await act(async() => {
      jest.runAllTimers()
    })

    expect(handleChange).toHaveBeenCalled
  })
})