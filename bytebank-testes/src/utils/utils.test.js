import { calculaNovoSaldo } from './index'

describe('Quando eu realizo uma transação', () => {
  test('que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    }

    const novoSaldo = calculaNovoSaldo(transacao, 100)

    expect(novoSaldo).toBe(150)
  })

  test('que é uma transferência, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    }

    const novoSaldo = calculaNovoSaldo(transacao, 100)

    expect(novoSaldo).toBe(50)
  })
})

describe('Testing the balance', () => {
  it('should be test the new balance with the profit', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005)

    const saldo = 100

    const novoSaldo = calculaRendimento(saldo)

    expect(novoSaldo).toBe(100.5)
  })
  it('should be test if the function calculaRendimento was called', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005)

    const saldo = 100

    const novoSaldo = calculaRendimento(saldo)

    expect(calculaRendimento).toBeCalled()
  })
  it('should be test if the function calculaRendimento was called with saldo', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005)

    const saldo = 100

    const novoSaldo = calculaRendimento(saldo)

    expect(calculaRendimento).toHaveBeenCalledWith(saldo)
  })
})
