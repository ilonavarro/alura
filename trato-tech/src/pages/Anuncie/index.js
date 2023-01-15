import Button from 'components/Button'
import Header from 'components/Header'
import { useSelector } from 'react-redux'
import styles from './Anuncie.module.scss'
import { useForm } from 'react-hook-form'

export default function Anuncie() {
  const categorias = useSelector(state =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  )
  const { register, handleSubmit } = useForm()
  function cadastrar(parametro) {
    console.log('parâmetro: ', parametro)
  }
  return (
    <div className={styles.container}>
      <Header titulo='Anuncie aqui' descricao='Anuncie seu produto aqui de forma fácil' />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input
          {...register('nome')}
          placeholder='Nome do produto'
          alt='Insira o nome do produto'
        />
        <input
          {...register('descricao')}
          placeholder='Descrição do produto'
          alt='Insira a descrição do produto'
        />
        <input
          {...register('imagem')}
          placeholder='Url da imagem do produto'
          alt='Insira a url da imagem do produto'
        />
        <select {...register('categoria')}>
          <option value='' disabled>
            Selecione a categoria
          </option>
          {categorias.map(({ nome, id }) => (
            <option key={id} value={id}>
              {nome}
            </option>
          ))}
        </select>
        <input
          {...register('preco')}
          type='number'
          placeholder='Preço do produto'
          alt='Insira o preço do produto'
        />
        <Button type='submit'>Cadastrar produto</Button>
      </form>
    </div>
  )
}
