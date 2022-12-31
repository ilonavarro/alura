import styles from './SobreMim.module.css'
import PostModelo from '~/components/PostModelo'
import fotoCapa from '~/assets/sobre_mim_capa.png'
import fotoSobreMim from '~/assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo='Sobre Mim'>
      <h3 className={styles.subtitulo}>Olá, eu sou o Ilo!</h3>
      <img className={styles.fotoSobreMim} src={fotoSobreMim} alt='Minha foto' />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
        tincidunt orci ut blandit. Curabitur nec enim ipsum. Pellentesque fringilla neque
        id vulputate ultrices. Nullam ultrices turpis ex, eu condimentum turpis luctus
        eget. Sed pellentesque metus nibh. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam tortor magna, dapibus imperdiet pulvinar eu, cursus sed
        turpis.
      </p>

      <p className={styles.paragrafo}>
        In hac habitasse platea dictumst. Etiam bibendum eros turpis, ac volutpat augue
        mattis id. Vestibulum facilisis tortor vitae velit iaculis consequat. Vivamus sit
        amet risus in mi luctus consectetur sed id leo. Phasellus pretium vitae libero a
        posuere. Nunc augue enim, mollis in dolor vel, semper dignissim ante. Mauris
        mollis ligula eget viverra sodales. Proin sagittis nibh diam, sed venenatis nulla
        ultricies ac. Suspendisse malesuada auctor ex, quis commodo leo sodales vel. Nam
        vulputate maximus metus, quis interdum ipsum efficitur non. Praesent eget sem
        pretium nisl varius porttitor. Maecenas at odio mi. Mauris nec lorem mauris.
        Suspendisse potenti. Duis eget ultricies metus, sed posuere nisl. Pellentesque vel
        arcu elementum, lobortis augue id, tempor lacus.
      </p>

      <p className={styles.paragrafo}>
        Aliquam luctus id ipsum eu condimentum. Maecenas mattis dapibus risus, id rhoncus
        eros faucibus nec. Nunc mollis dui et est placerat, suscipit lobortis tellus
        lobortis. Curabitur at quam accumsan, sodales turpis sit amet, aliquet lorem.
        Phasellus eu leo congue, varius lacus vel, tincidunt velit. Praesent eu venenatis
        nulla. Proin a arcu non nibh tempor aliquet ut a nisl.
      </p>

      <p className={styles.paragrafo}>
        In hac habitasse platea dictumst. Nulla placerat accumsan pharetra. Mauris
        tincidunt nibh eu arcu faucibus consectetur. Suspendisse maximus nisl tempus,
        facilisis neque sit amet, dictum felis. In consequat fringilla mauris non tempus.
        Vestibulum eget volutpat orci. Quisque dapibus velit mattis, commodo nibh et,
        faucibus est. Morbi laoreet ut magna at facilisis. Vivamus ac tellus ac risus
        vestibulum gravida.
      </p>

      <p className={styles.paragrafo}>
        Vivamus imperdiet odio in consectetur elementum. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Nam ultricies varius velit, eget pellentesque orci
        volutpat a. In volutpat augue leo, non feugiat neque egestas ac. Ut pellentesque
        sapien ac lacus feugiat posuere. Mauris facilisis ante quis nunc sagittis
        porttitor. Duis hendrerit risus a gravida efficitur. Donec efficitur at arcu
        interdum scelerisque. Aenean eu euismod est. Nunc dignissim aliquam purus, vel
        mollis turpis. Phasellus posuere congue nisl, suscipit imperdiet ligula lobortis
        ut. Praesent porttitor volutpat ante sed consectetur.
      </p>

      <p className={styles.paragrafo}>
        Donec molestie nulla a elementum viverra. Vestibulum dictum id purus eu semper. Ut
        elit ipsum, auctor eu consequat et, varius finibus urna. Suspendisse sit amet eros
        sit amet dui blandit commodo. Proin sed nulla nec est interdum ullamcorper sed eu
        nunc. Mauris sagittis feugiat dignissim. Donec vitae mauris laoreet, sodales ipsum
        quis, finibus lacus. Nulla eget finibus augue. Mauris pellentesque odio at urna
        viverra, eu scelerisque sapien ultricies. Donec ac lacus condimentum, facilisis ex
        in, tincidunt orci.
      </p>
    </PostModelo>
  )
}
