import Button from 'components/Button'
import Header from 'components/Header'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Anuncie.module.scss'
import { useForm } from 'react-hook-form'
import { cadastrarItem } from 'store/reducers/itens'
import { useParams } from 'react-router-dom'

export default function Anuncie() {
  const dispatch = useDispatch()
  const { nomeCategoria = '' } = useParams()
  const categorias = useSelector(state =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  )
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { categoria: nomeCategoria }
  })
  const { errors } = formState

  function cadastrar(data) {
    dispatch(cadastrarItem(data))
  }
  const retornaErro = campo => `O campo ${campo} é obrigatório!`

  return (
    <div className={styles.container}>
      <Header titulo='Anuncie aqui' descricao='Anuncie seu produto aqui de forma fácil' />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input
          className={errors.titulo ? styles['input-erro'] : ''}
          {...register('titulo', { required: retornaErro('nome') })}
          placeholder='Nome do produto'
          alt='Insira o nome do produto'
        />
        {errors.titulo && (
          <span className={styles['mensagem-erro']}> {errors.titulo.message} </span>
        )}
        <input
          className={errors.descricao ? styles['input-erro'] : ''}
          {...register('descricao', { required: retornaErro('descrição') })}
          placeholder='Descrição do produto'
          alt='Insira a descrição do produto'
        />
        {errors.descricao && (
          <span className={styles['mensagem-erro']}> {errors.descricao.message} </span>
        )}
        <input
          className={errors.foto ? styles['input-erro'] : ''}
          {...register('foto', { required: retornaErro('imagem') })}
          placeholder='Url da imagem do produto'
          alt='Insira a url da imagem do produto'
        />
        {errors.foto && (
          <span className={styles['mensagem-erro']}> {errors.foto.message} </span>
        )}
        <select
          className={errors.categoria ? styles['input-erro'] : ''}
          {...register('categoria', { required: retornaErro('categoria') })}
          disabled={!!nomeCategoria} /* to resolve it with TS */
        >
          <option value='' disabled>
            Selecione a categoria
          </option>
          {categorias.map(({ nome, id }) => (
            <option key={id} value={id}>
              {nome}
            </option>
          ))}
        </select>
        {errors.categoria && (
          <span className={styles['mensagem-erro']}> {errors.categoria.message} </span>
        )}
        <input
          className={errors.preco ? styles['input-erro'] : ''}
          {...register('preco', { required: retornaErro('preço'), valueAsNumber: true })}
          type='number'
          placeholder='Preço do produto'
          alt='Insira o preço do produto'
        />
        {errors.preco && (
          <span className={styles['mensagem-erro']}> {errors.preco.message} </span>
        )}
        <Button type='submit'>Cadastrar produto</Button>
      </form>
    </div>
  )
}
