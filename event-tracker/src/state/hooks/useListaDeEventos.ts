import { eventosFiltradosState } from './../seletores/index'
import { useRecoilValue } from 'recoil'

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos
