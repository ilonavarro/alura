import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes'

const ListaDeParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes()
  return (
    <ul>
      {participantes.map(participante => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  )
}

export default ListaDeParticipantes
