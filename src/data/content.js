import {
  ArrowUpRight,
  CalendarHeart,
  Camera,
  Car,
  ChefHat,
  CookingPot,
  Flame,
  Flower2,
  Gem,
  GlassWater,
  HeartHandshake,
  House,
  Instagram,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  PartyPopper,
  Quote,
  Sparkles,
  Trees,
  UsersRound,
  Utensils,
  Waves
} from 'lucide-react'

export const brand = {
  name: 'Eventos Haras San Gregório',
  shortName: 'Haras San Gregório',
  line: 'Um espaço raro para momentos únicos.',
  location: 'Ingleses · Florianópolis',
  address: 'Rod. João Gualberto Soares, 3115 · Ingleses do Rio Vermelho, Florianópolis – SC',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rod.+Jo%C3%A3o+Gualberto+Soares%2C+3115%2C+Ingleses+do+Rio+Vermelho%2C+Florian%C3%B3polis'
}

export const whatsappFormPhone = '5548996729976'

export const whatsappFormUrl = (message) =>
  `https://api.whatsapp.com/send?phone=${whatsappFormPhone}&text=${encodeURIComponent(message)}`

export const whatsappUrl = whatsappFormUrl(
  'Olá! Vim pelo site e gostaria de agendar uma visita gratuita ao Haras San Gregório. Quais horários vocês têm disponíveis?'
)

export const quoteUrl = whatsappFormUrl(
  'Olá! Vim pelo site e gostaria de conversar sobre um evento no Haras San Gregório.'
)

export const instagramUrl =
  'https://www.instagram.com/eventosharassangregorio?igsh=MXV2NGZheHU4NTR2Zw%3D%3D&utm_source=qr'

const trimUrl = (value = '') => value.trim().replace(/\/$/, '')

const mediaBaseUrl = trimUrl(import.meta.env.VITE_MEDIA_BASE_URL || '')
const imageBaseUrl = trimUrl(import.meta.env.VITE_IMAGE_BASE_URL || '')

const remoteImageBaseUrl =
  imageBaseUrl || 'https://res.cloudinary.com/dfugu53pd/image/upload/f_webp,q_auto'

const remoteCloudinaryImage = (publicId) => ({
  src: `${remoteImageBaseUrl},w_1400,c_limit/${publicId}`,
  srcSet: [
    `${remoteImageBaseUrl},w_800,c_limit/${publicId} 800w`,
    `${remoteImageBaseUrl},w_1200,c_limit/${publicId} 1200w`,
    `${remoteImageBaseUrl},w_1800,c_limit/${publicId} 1800w`
  ].join(', '),
  fallback: `${remoteImageBaseUrl}/${publicId}`
})

const mediaPath = (path) => `${mediaBaseUrl}${path}`
const localImagePath = (path) => mediaPath(path)

export const heroVideoSources = {
  // Drone real do Haras (piscina, tenda e casa vistos do alto).
  desktop: localImagePath('/videos/haras-hero-desktop.mp4'),
  mobile: localImagePath('/videos/haras-hero-mobile.mp4')
}
export const heroPoster = localImagePath('/images/optimized/haras-fachada-evento-2200.webp')

const publicLocal = (src) => ({ src, fallback: src })
const responsive = (name, ext = 'webp') => ({
  src: localImagePath(`/images/optimized/${name}-1400.${ext}`),
  srcSet: [
    `${localImagePath(`/images/optimized/${name}-900.${ext}`)} 900w`,
    `${localImagePath(`/images/optimized/${name}-1400.${ext}`)} 1400w`,
    `${localImagePath(`/images/optimized/${name}-2200.${ext}`)} 2200w`
  ].join(', '),
  fallback: localImagePath(`/images/optimized/${name}-1400.${ext}`)
})

export const images = {
  heroPoster: responsive('haras-fachada-evento'),
  hero: responsive('haras-fachada-evento'),
  garden: responsive('haras-evento-jardim'),
  facade: responsive('haras-casal-fachada'),
  watercolor: {
    src: localImagePath('/images/optimized/aquarela-convites-900.webp'),
    fallback: localImagePath('/images/optimized/aquarela-convites-900.webp')
  },
  logo: publicLocal('/images/san-gregorio-logo.webp'),
  pool: remoteCloudinaryImage('CAPA_SITE_r2glel'),
  sunset: responsive('haras-casal-fachada'),
  horses: responsive('haras-casal-fachada'),
  table: responsive('haras-evento-jardim'),
  interior: responsive('haras-casal-fachada'),
  kitchen: responsive('haras-fachada-evento'),
  child: {
    src: localImagePath('/images/optimized/aquarela-convites-900.webp'),
    fallback: localImagePath('/images/optimized/aquarela-convites-900.webp')
  },
  twilight: responsive('haras-casal-fachada'),
  cake: responsive('haras-bolo'),
  salaoCouple: responsive('haras-salao-casal'),
  architectureGarden: responsive('haras-arquitetura-jardim'),
  fieldCoupleWide: responsive('haras-campo-casal-wide'),
  fieldCouple: responsive('haras-campo-casal'),
  dressArch: responsive('haras-vestido-arco'),
  groomsmen: responsive('haras-padrinhos'),
  coupleStairs: responsive('haras-noivos-escada'),
  brunaEdu: remoteCloudinaryImage('BrunaeEdu-1_myyvyg'),
  gourmetMoment: remoteCloudinaryImage('préviasB_G-45_odx8ug'),
  arrivalDetail: remoteCloudinaryImage('préviasB_G-1_rpizwr'),
  gardenReception: remoteCloudinaryImage('préviasB_G-11_n7eh3q'),
  venueHall: responsive('mg-7046'),
  venueHallWide: responsive('mg-7049'),
  venueChandelier: responsive('mg-7051'),
  venueLounge: responsive('mg-7057'),
  venuePool: responsive('mg-7067'),
  venuePoolArch: responsive('mg-7068'),
  venueGardenArch: responsive('mg-7074'),
  venueSinuca: responsive('mg-7093'),
  venueChurrasqueira: responsive('mg-7096'),
  venueFoyer: responsive('mg-7112'),
  venueStairsGolden: responsive('mg-7113'),
  venuePoolGarden: responsive('mg-7124'),
  venueFacade: responsive('mg-7136'),
  venueArcades: responsive('mg-7138')
}

export const navLinks = [
  { href: '#espaco', label: 'O Espaço' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#visitas', label: 'Visita' },
  { href: '#contato', label: 'Contato' }
]

export const smallSignals = [
  { label: 'Visita gratuita', icon: CalendarHeart },
  { label: 'Piscina semi-olímpica', icon: Waves },
  { label: 'Mesas, cadeiras e louça incluídas', icon: Utensils }
]

export const spaceImages = [
  {
    title: 'Piscina e jardins',
    image: images.venuePool,
    className: 'lg:col-span-7 lg:row-span-2',
    ratio: 'aspect-[16/10] lg:aspect-auto',
    imgClassName: ''
  },
  {
    title: 'Hall de entrada',
    image: images.venueFoyer,
    className: 'lg:col-span-5',
    ratio: 'aspect-[4/5]'
  },
  {
    title: 'Arcadas do Haras',
    image: images.venueArcades,
    className: 'lg:col-span-5',
    ratio: 'aspect-[5/4]'
  }
]

export const experiences = [
  {
    title: 'Casamentos',
    copy: 'Cerimônia e festa no mesmo lugar, cercados de verde. Ideal para casamentos e mini weddings, com a intimidade que um salão comum não tem.',
    icon: CalendarHeart,
    image: images.coupleStairs
  },
  {
    title: 'Aniversários e festas',
    copy: '15 anos, noivados, encontros de família. Piscina, churrasqueira e gramado para todo mundo ficar à vontade.',
    icon: PartyPopper,
    image: images.cake
  },
  {
    title: 'Confraternizações e eventos de empresa',
    copy: 'Um lugar fora do escritório para reunir a equipe ou receber clientes.',
    icon: UsersRound,
    image: images.venueChurrasqueira
  }
]

export const gallery = [
  { title: 'Salão Principal', image: images.venueHallWide, ratio: 'aspect-[5/4]' },
  { title: 'Piscina e arco', image: images.venuePoolArch, ratio: 'aspect-[4/5]' },
  { title: 'Bolo e flores', image: images.cake, ratio: 'aspect-[4/5]' },
  { title: 'Celebração no jardim', image: images.brunaEdu, ratio: 'aspect-[4/5]' },
  { title: 'Arcadas e jardim', image: images.venueArcades, ratio: 'aspect-[3/4]' },
  { title: 'Sinuca e lazer', image: images.venueSinuca, ratio: 'aspect-[3/4]' },
  { title: 'Churrasqueira', image: images.venueChurrasqueira, ratio: 'aspect-[4/5]' },
  { title: 'Escadaria', image: images.venueStairsGolden, ratio: 'aspect-[4/5]' },
  { title: 'Retrato no campo', image: images.fieldCouple, ratio: 'aspect-[4/5]' },
  { title: 'Vestido no arco', image: images.dressArch, ratio: 'aspect-[3/4]' },
  { title: 'Padrinhos', image: images.groomsmen, ratio: 'aspect-[5/4]' },
  { title: 'Entrada do Haras', image: images.venueFacade, ratio: 'aspect-[5/4]' },
  { title: 'Jardim preparado', image: images.garden, ratio: 'aspect-[4/5]' },
  { title: 'Recepção no jardim', image: images.gardenReception, ratio: 'aspect-[5/4]' },
  { title: 'Salão com lustre', image: images.venueChandelier, ratio: 'aspect-[4/5]' }
]

export const pastEvent = {
  eyebrow: 'Eventos Passados',
  title: 'Festa Limão Siciliano',
  subtitle: '',
  copy:
    'Uma tarde temática entre jardim, piscina, arquitetura e detalhes solares, criada para transformar uma celebração familiar em uma lembrança cheia de presença.',
  images: [
    {
      title: 'Celebração no jardim',
      image: remoteCloudinaryImage('Valentinofaz1ano-69_qodam2'),
      ratio: 'aspect-[4/5]'
    },
    {
      title: 'Piscina preparada',
      image: remoteCloudinaryImage('Valentinofaz1ano-50_ygvykl'),
      ratio: 'aspect-[5/4]'
    },
    {
      title: 'Composição da festa',
      image: remoteCloudinaryImage('Valentinofaz1ano-60_fnviqd'),
      ratio: 'aspect-[3/4]'
    },
    {
      title: 'Atmosfera ao ar livre',
      image: remoteCloudinaryImage('Valentinofaz1ano-34_mo5xhd'),
      ratio: 'aspect-[5/4]'
    },
    {
      title: 'Detalhes da mesa',
      image: remoteCloudinaryImage('Valentinofaz1ano-49_ie5ea6'),
      ratio: 'aspect-[4/5]'
    },
    {
      title: 'Jardim preparado',
      image: remoteCloudinaryImage('Valentinofaz1ano-38_mc3a2y'),
      ratio: 'aspect-[4/5]'
    },
    {
      title: 'Receber com afeto',
      image: remoteCloudinaryImage('Valentinofaz1ano-3_jigahq'),
      ratio: 'aspect-[5/4]'
    },
    {
      title: 'Mesa temática',
      image: remoteCloudinaryImage('Valentinofaz1ano-39_hjvp3i'),
      ratio: 'aspect-[4/5]'
    },
    {
      title: 'Festa em família',
      image: remoteCloudinaryImage('Valentinofaz1ano-44_lqaary'),
      ratio: 'aspect-[4/5]'
    },
    {
      title: 'Festa temática',
      image: remoteCloudinaryImage('Valentinofaz1ano-6_w8g2ha'),
      ratio: 'aspect-[3/4]'
    },
    {
      title: 'Memórias no campo',
      image: remoteCloudinaryImage('Valentinofaz1ano-1_hxtjqa'),
      ratio: 'aspect-[5/4]'
    }
  ]
}

export const googleRating = { score: '4,9', count: 37 }

export const testimonials = [
  {
    quote: 'Superou as expectativas, nosso evento foi perfeito graças ao local, que é lindo, com muitos atrativos e o atendimento nota 10 de toda a equipe.',
    author: 'Bianca M.',
    meta: 'Avaliação no Google'
  },
  {
    quote: 'Um lugar lindo em meio à natureza, com uma estrutura fantástica para guardar lindas memórias.',
    author: 'Sonia B.',
    meta: 'Avaliação no Google'
  },
  {
    quote: 'Super bem cuidado, os cavalos são lindos e muito bem tratados. Fui muito bem recebido, pessoal atencioso e simpático.',
    author: 'Bruno L.',
    meta: 'Avaliação no Google'
  },
  {
    quote: 'Arquitetura magnífica, um recanto do campo na ilha.',
    author: 'Gustavo D.',
    meta: 'Avaliação no Google'
  },
  {
    quote: 'Fiz meu pré-wedding e amei. Foi incrível, o local é muito lindo.',
    author: 'Eliza S.',
    meta: 'Avaliação no Google'
  },
  {
    quote: 'Ótimo local para fazer eventos. Muito aconchegante e lindo. Experiência única!',
    author: 'Ariel V.',
    meta: 'Avaliação no Google'
  }
]

export const footerLinks = [
  { label: 'Instagram', href: instagramUrl, icon: Instagram },
  { label: 'WhatsApp', href: whatsappUrl, icon: MessageCircle },
  { label: 'Ingleses, Florianópolis', href: brand.mapsUrl, icon: MapPin }
]

export const structureItems = [
  {
    title: 'Piscina semi-olímpica',
    copy: 'Uma piscina de verdade, das grandes, que vira o centro da festa.',
    icon: Waves,
    image: images.venuePoolGarden,
    className: 'lg:col-span-7'
  },
  {
    title: 'Salão Principal',
    copy: 'Piso de madeira e arcos amplos. Acolhe de 50 a 60 pessoas e se conecta com a área externa.',
    icon: PanelsTopLeft,
    image: images.venueHall,
    className: 'lg:col-span-5'
  },
  {
    title: 'Jardins e áreas verdes',
    copy: 'Gramado e espaço aberto para cerimônia, recepção e para as crianças correrem.',
    icon: Flower2,
    image: images.venueGardenArch,
    className: 'lg:col-span-12'
  }
]

export const includedItems = [
  '10 mesas, cada uma para 6 a 8 pessoas',
  '80 cadeiras Tramontina Alegra',
  'Pratos, talheres e copos para 80 pessoas'
]

export const availableItems = [
  { label: 'Cozinha completa', icon: CookingPot },
  { label: 'Freezers e geladeiras', icon: Utensils },
  { label: 'Churrasqueira', icon: Flame },
  { label: 'Mesa de sinuca', icon: Gem }
]

export const visitSteps = [
  {
    title: 'Você chama no WhatsApp',
    copy: 'Conta o que está planejando: tipo de evento, data e número de convidados.'
  },
  {
    title: 'Combinamos um horário',
    copy: 'Mostramos o espaço com calma: salão, jardim, piscina e cozinha.'
  },
  {
    title: 'Você tira as dúvidas',
    copy: 'E recebe uma proposta pensada para o seu evento, sem compromisso.'
  }
]

export const faqs = [
  {
    q: 'A visita tem algum custo?',
    a: 'Não. A visita é gratuita e sem compromisso. Combinamos o melhor horário com você.'
  },
  {
    q: 'Quanto custa?',
    a: 'Depende do número de convidados, dos dias de montagem e dos serviços de que você precisa. Por isso montamos a proposta depois de entender o seu plano, na visita ou pelo WhatsApp.'
  },
  {
    q: 'Quantos convidados cabem?',
    a: 'Recebemos desde encontros pequenos até celebrações maiores. O formato ideal depende do seu evento: conte quantos convidados você imagina e mostramos, na visita, como o espaço se adapta.'
  },
  {
    q: 'O que já vem incluso?',
    a: '10 mesas (cada uma para 6 a 8 pessoas), 80 cadeiras Tramontina Alegra e pratos, talheres e copos para 80 pessoas. Também estão à disposição cozinha completa, freezers, geladeiras, churrasqueira e mesa de sinuca.'
  },
  {
    q: 'Posso montar em mais de um dia?',
    a: 'Sim. A montagem em mais de um dia é combinada caso a caso.'
  },
  {
    q: 'Onde fica?',
    a: 'Nos Ingleses, em Florianópolis, perto do Costão Golf: Rod. João Gualberto Soares, 3115.'
  }
]

export const amenitySignals = [
  { label: 'Cozinha completa', icon: ChefHat },
  { label: 'Área gourmet', icon: Utensils },
  { label: 'Recepção privativa', icon: HeartHandshake },
  { label: 'Eventos memoráveis', icon: PartyPopper },
  { label: 'Estacionamento', icon: Car },
  { label: 'Piscina', icon: GlassWater },
  { label: 'Registro editorial', icon: Camera },
  { label: 'Atendimento reservado', icon: Quote },
  { label: 'Visitas agendadas', icon: ArrowUpRight },
  { label: 'Arquitetura contemporânea', icon: House },
  { label: 'Luxo silencioso', icon: Sparkles },
  { label: 'Natureza em primeiro plano', icon: Trees }
]
