import { screen, render } from '@testing-library/react'
import Saldo from './index'

describe('Componente <Saldo />', () => {
  test('deve renderizar o saldo com valor monetário', () => {
    const valorSaldo = 1000
    render(<Saldo saldo={valorSaldo} />)

    const saldo = screen.getByTestId('saldo')
    expect(saldo).toHaveTextContent(`R$ ${valorSaldo}`)
  })
})
