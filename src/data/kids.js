import { brand, whatsappRedirectPath } from './content.js'

// Página de campanha "Festa infantil". Só entra aqui o que é fato confirmado sobre o Haras.
const cdn = (id, width) =>
  `https://res.cloudinary.com/dfugu53pd/image/upload/f_auto,q_auto,w_${width},c_limit/${id}`

export const kidsImage = (id, widths = [600, 900, 1400], ratio = [3, 2]) => ({
  src: cdn(id, widths[1]),
  srcSet: widths.map((w) => `${cdn(id, w)} ${w}w`).join(', '),
  width: ratio[0] * 100,
  height: ratio[1] * 100
})

export const kidsWhatsappUrl = (message) => `${whatsappRedirectPath}?text=${encodeURIComponent(message)}`

export const kidsDefaultMessage =
  'Olá! Vim pelo site e queria saber as datas disponíveis para uma festa infantil no Haras San Gregório.'

export const kidsCtaUrl = kidsWhatsappUrl(kidsDefaultMessage)

export const kidsHero = {
  arch: kidsImage('Valentinofaz1ano-3_jigahq', [500, 800, 1100]),
  circle: kidsImage('Valentinofaz1ano-6_w8g2ha', [300, 500], [2, 3])
}

export const kidsMarquee = [
  'Gramado para a criançada correr',
  'Salão com piso de madeira',
  'Piscina semi-olímpica',
  'Mesas, cadeiras e louça incluídas',
  'Cozinha completa e churrasqueira',
  'Visita gratuita e sem compromisso'
]

export const kidsBenefits = [
  {
    title: 'Gramado e jardim',
    copy: 'Espaço aberto e verde para a criançada brincar à vontade, nos Ingleses.',
    image: kidsImage('Valentinofaz1ano-1_hxtjqa', [500, 800, 1100])
  },
  {
    title: 'Salão com piso de madeira',
    copy: 'Arcos amplos para o parabéns, o bolo e a mesa dos convidados.',
    image: kidsImage('Valentinofaz1ano-38_mc3a2y', [500, 800, 1100])
  },
  {
    title: 'Piscina semi-olímpica',
    copy: 'A grande marca do Haras, no centro de um cenário que já é uma festa.',
    image: kidsImage('Valentinofaz1ano-50_ygvykl', [500, 800, 1100])
  },
  {
    title: 'Cozinha e churrasqueira',
    copy: 'Cozinha completa, freezers e geladeiras para servir sem improviso.',
    image: kidsImage('Valentinofaz1ano-60_fnviqd', [500, 800, 1100])
  }
]

export const kidsGallery = [
  { title: 'Jardim e arco da festa', image: kidsImage('Valentinofaz1ano-3_jigahq', [500, 800, 1100]) },
  { title: 'Cantinho de recreação', image: kidsImage('Valentinofaz1ano-39_hjvp3i', [500, 800, 1100]) },
  { title: 'Mesa longa à beira da piscina', image: kidsImage('Valentinofaz1ano-60_fnviqd', [500, 800, 1100]) },
  { title: 'Bolo da festa', image: kidsImage('Valentinofaz1ano-6_w8g2ha', [400, 700, 1000], [2, 3]) },
  { title: 'Salão preparado', image: kidsImage('Valentinofaz1ano-38_mc3a2y', [500, 800, 1100]) },
  { title: 'Piscina e palmeiras', image: kidsImage('Valentinofaz1ano-49_ie5ea6', [500, 800, 1100]) },
  { title: 'Mesa decorada', image: kidsImage('Valentinofaz1ano-34_mo5xhd', [400, 700, 1000], [2, 3]) },
  { title: 'Carrinho da festa', image: kidsImage('Valentinofaz1ano-69_qodam2', [500, 800, 1100]) }
]

export const kidsIncluded = [
  '14 mesas, cada uma para 6 a 8 pessoas',
  '80 cadeiras Tramontina Alegra',
  'Pratos, talheres e copos para 80 pessoas',
  'Cozinha completa, freezers e geladeiras',
  'Churrasqueira e mesa de sinuca'
]

export const kidsSteps = [
  {
    title: 'Você chama no WhatsApp',
    copy: 'Conta quantos anos o aniversariante vai fazer, a data e quantos convidados.'
  },
  {
    title: 'Conhece o espaço',
    copy: 'Mostramos salão, jardim, piscina e cozinha com calma. A visita é gratuita.'
  },
  {
    title: 'Recebe a proposta',
    copy: 'Pensada para a sua festa, sem compromisso. Você decide no seu tempo.'
  }
]

export const kidsFaqs = [
  {
    q: 'A visita tem algum custo?',
    a: 'Não. A visita é gratuita e sem compromisso. Combinamos o melhor horário com você.'
  },
  {
    q: 'Quanto custa a festa?',
    a: 'Depende do número de convidados, dos dias de montagem e dos serviços de que você precisa. Por isso montamos a proposta depois de entender a festa que você imagina, na visita ou pelo WhatsApp.'
  },
  {
    q: 'Quantos convidados cabem?',
    a: 'Recebemos desde encontros pequenos até celebrações maiores. Conte quantos convidados você imagina, entre crianças e adultos, e mostramos na visita como o espaço se adapta.'
  },
  {
    q: 'O que já vem incluso?',
    a: '14 mesas (cada uma para 6 a 8 pessoas), 80 cadeiras Tramontina Alegra e pratos, talheres e copos para 80 pessoas. Também estão à disposição cozinha completa, freezers, geladeiras, churrasqueira e mesa de sinuca.'
  },
  {
    q: 'Posso montar a festa em mais de um dia?',
    a: 'Sim. A montagem em mais de um dia é combinada caso a caso.'
  },
  {
    q: 'Onde fica o Haras?',
    a: `Nos Ingleses, em Florianópolis, perto do Costão Golf: ${brand.address.split(' · ')[0]}.`
  }
]

// Nunca mostrar preço ou valor mínimo (decisão do dono): toda proposta é sob medida.
