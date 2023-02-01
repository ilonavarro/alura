import { render, screen } from '@testing-library/react'
import Extrato from './index'

describe('Deve renderizar', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ]

  test('uma lista de transações', () => {
    render(<Extrato transacoes={transacoes} />)
    const lista = screen.getByRole('listitem')
    expect(lista).toBeInTheDocument()
  })
})
