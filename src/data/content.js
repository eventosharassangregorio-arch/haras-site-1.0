import {
  ArrowUpRight,
  Baby,
  CalendarHeart,
  Camera,
  Car,
  ChefHat,
  CircleParking,
  CookingPot,
  DoorOpen,
  Flame,
  Flower2,
  Gem,
  GlassWater,
  HeartHandshake,
  House,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  PartyPopper,
  Quote,
  Sparkles,
  Sun,
  Trees,
  UsersRound,
  Utensils,
  Waves
} from 'lucide-react'

export const brand = {
  name: 'Eventos Haras São Gregório',
  shortName: 'Haras São Gregório',
  line: 'Um espaço raro para momentos únicos.',
  location: 'Florianópolis, SC'
}

export const whatsappUrl = 'https://wa.me/message/AKHZGIR7BGP3O1'

export const quoteUrl = whatsappUrl

export const whatsappFormPhone = '5548996729976'

export const whatsappFormUrl = (message) =>
  `https://api.whatsapp.com/send?phone=${whatsappFormPhone}&text=${encodeURIComponent(message)}`

export const instagramUrl =
  'https://www.instagram.com/eventosharassangregorio?igsh=MXV2NGZheHU4NTR2Zw%3D%3D&utm_source=qr'

const trimUrl = (value = '') => value.trim().replace(/\/$/, '')
const filename = (path) => path.split('/').pop()

const mediaBaseUrl = trimUrl(import.meta.env.VITE_MEDIA_BASE_URL || '')
const imageBaseUrl = trimUrl(import.meta.env.VITE_IMAGE_BASE_URL || '')
const videoBaseUrl = trimUrl(import.meta.env.VITE_VIDEO_BASE_URL || '')

const cloudinaryPublicIds = {
  'aquarela-convites-900.png': 'aquarela-convites-900_upqwie',
  'haras-arquitetura-jardim-900.jpg': 'haras-arquitetura-jardim-900_e85ctj',
  'haras-arquitetura-jardim-1400.jpg': 'haras-arquitetura-jardim-1400_xvvvz5',
  'haras-arquitetura-jardim-2200.jpg': 'haras-arquitetura-jardim-2200_flx1l9',
  'haras-bolo-900.jpg': 'haras-bolo-900_klgsts',
  'haras-bolo-1400.jpg': 'haras-bolo-1400_fye8bd',
  'haras-bolo-2200.jpg': 'haras-bolo-2200_bszkuc',
  'haras-campo-casal-900.jpg': 'haras-campo-casal-900_ivkm98',
  'haras-campo-casal-1400.jpg': 'haras-campo-casal-1400_d1myez',
  'haras-campo-casal-2200.jpg': 'haras-campo-casal-2200_ssh34m',
  'haras-campo-casal-wide-900.jpg': 'haras-campo-casal-wide-900_dkrxhk',
  'haras-campo-casal-wide-1400.jpg': 'haras-campo-casal-wide-1400_srzbgn',
  'haras-campo-casal-wide-2200.jpg': 'haras-campo-casal-wide-2200_wxhfxn',
  'haras-casal-fachada-900.jpg': 'haras-casal-fachada-900_akprux',
  'haras-casal-fachada-1400.jpg': 'haras-casal-fachada-1400_qtcact',
  'haras-casal-fachada-2200.jpg': 'haras-casal-fachada-2200_kdvvsq',
  'haras-evento-jardim-900.jpg': 'haras-evento-jardim-900_jl1eda',
  'haras-evento-jardim-1400.jpg': 'haras-evento-jardim-1400_uin84t',
  'haras-evento-jardim-2200.jpg': 'haras-evento-jardim-2200_okpt5w',
  'haras-fachada-evento-900.jpg': 'haras-fachada-evento-900_vr5ygs',
  'haras-fachada-evento-1400.jpg': 'haras-fachada-evento-1400_cfuyjz',
  'haras-fachada-evento-2200.jpg': 'haras-fachada-evento-2200_l3acc3',
  'haras-hero-poster.jpg': 'haras-hero-poster_ype6vb',
  'haras-noivos-escada-900.jpg': 'haras-noivos-escada-900_w2cxke',
  'haras-noivos-escada-1400.jpg': 'haras-noivos-escada-1400_aa2zyv',
  'haras-noivos-escada-2200.jpg': 'haras-noivos-escada-2200_bqalz5',
  'haras-padrinhos-900.jpg': 'haras-padrinhos-900_woa28n',
  'haras-padrinhos-1400.jpg': 'haras-padrinhos-1400_pzvs9g',
  'haras-padrinhos-2200.jpg': 'haras-padrinhos-2200_p7gjmt',
  'haras-salao-casal-900.jpg': 'haras-salao-casal-900_oymwi3',
  'haras-salao-casal-1400.jpg': 'haras-salao-casal-1400_zcyij8',
  'haras-salao-casal-2200.jpg': 'haras-salao-casal-2200_hsgwjc',
  'haras-vestido-arco-900.jpg': 'haras-vestido-arco-900_hgh2nv',
  'haras-vestido-arco-1400.jpg': 'haras-vestido-arco-1400_vhmheu',
  'haras-vestido-arco-2200.jpg': 'haras-vestido-arco-2200_bzzdns',
  'haras-hero.webm': 'haras-hero_p4m5gm'
}

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

const cloudinaryPath = (baseUrl, path) => {
  if (!baseUrl) return mediaPath(path)

  const file = filename(path)
  const extensionStart = file.lastIndexOf('.')
  const extension = extensionStart >= 0 ? file.slice(extensionStart) : ''
  const fallbackId = extensionStart >= 0 ? file.slice(0, extensionStart) : file
  const publicId =
    cloudinaryPublicIds[file] ||
    cloudinaryPublicIds[`${fallbackId}.jpg`] ||
    cloudinaryPublicIds[`${fallbackId}.png`] ||
    fallbackId

  return `${baseUrl}/${publicId}${extension}`
}

const mediaPath = (path) => `${mediaBaseUrl}${path}`
const imagePath = (path) => cloudinaryPath(imageBaseUrl, path)
const videoPath = (path) => cloudinaryPath(videoBaseUrl, path)

export const heroVideo = videoPath('/videos/haras-hero.webm')
export const heroPoster = imagePath('/images/optimized/haras-hero-poster.webp')

const local = (src) => ({ src: imagePath(src), fallback: imagePath(src) })
const publicLocal = (src) => ({ src, fallback: src })
const responsive = (name, ext = 'webp') => ({
  src: imagePath(`/images/optimized/${name}-1400.${ext}`),
  srcSet: [
    `${imagePath(`/images/optimized/${name}-900.${ext}`)} 900w`,
    `${imagePath(`/images/optimized/${name}-1400.${ext}`)} 1400w`,
    `${imagePath(`/images/optimized/${name}-2200.${ext}`)} 2200w`
  ].join(', '),
  fallback: imagePath(`/images/optimized/${name}-1400.${ext}`)
})

export const images = {
  heroPoster: local('/images/optimized/haras-hero-poster.webp'),
  hero: responsive('haras-fachada-evento'),
  garden: responsive('haras-evento-jardim'),
  facade: responsive('haras-casal-fachada'),
  watercolor: {
    src: imagePath('/images/optimized/aquarela-convites-900.webp'),
    fallback: imagePath('/images/optimized/aquarela-convites-900.webp')
  },
  logo: publicLocal('/images/san-gregorio-logo.webp'),
  pool: local('/images/optimized/haras-hero-poster.webp'),
  sunset: responsive('haras-casal-fachada'),
  horses: responsive('haras-casal-fachada'),
  table: responsive('haras-evento-jardim'),
  interior: responsive('haras-casal-fachada'),
  kitchen: responsive('haras-fachada-evento'),
  child: {
    src: imagePath('/images/optimized/aquarela-convites-900.webp'),
    fallback: imagePath('/images/optimized/aquarela-convites-900.webp')
  },
  twilight: responsive('haras-casal-fachada'),
  cake: responsive('haras-bolo'),
  salaoCouple: responsive('haras-salao-casal'),
  architectureGarden: responsive('haras-arquitetura-jardim'),
  fieldCoupleWide: responsive('haras-campo-casal-wide'),
  fieldCouple: responsive('haras-campo-casal'),
  dressArch: responsive('haras-vestido-arco'),
  groomsmen: responsive('haras-padrinhos'),
  coupleStairs: responsive('haras-noivos-escada')
}

export const navLinks = [
  { href: '#espaco', label: 'O Espaço' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#visitas', label: 'Visitas' },
  { href: '#contato', label: 'Contato' }
]

export const smallSignals = [
  { label: 'Natureza', icon: Leaf },
  { label: 'Privacidade', icon: Gem },
  { label: 'Atmosfera', icon: Sun }
]

export const spaceImages = [
  {
    title: 'Arquitetura e jardim',
    image: images.architectureGarden,
    className: 'lg:col-span-7 lg:row-span-2',
    ratio: 'aspect-[4/3] lg:aspect-auto'
  },
  {
    title: 'Salão principal',
    image: images.salaoCouple,
    className: 'lg:col-span-5',
    ratio: 'aspect-[4/5]'
  },
  {
    title: 'Campo e celebração',
    image: images.fieldCoupleWide,
    className: 'lg:col-span-5',
    ratio: 'aspect-[5/4]'
  }
]

export const experiences = [
  {
    title: 'Casamentos',
    copy: 'Cerimônias ao ar livre e recepções intimistas em um cenário reservado.',
    icon: CalendarHeart,
    image: images.coupleStairs
  },
  {
    title: 'Eventos sociais',
    copy: 'Aniversários, noivados e celebrações com atmosfera sofisticada.',
    icon: PartyPopper,
    image: images.cake
  },
  {
    title: 'Eventos corporativos',
    copy: 'Experiências fora do comum para marcas e encontros especiais.',
    icon: UsersRound,
    image: images.groomsmen
  }
]

export const gallery = [
  { title: 'Bolo e flores', image: images.cake, ratio: 'aspect-[4/5]' },
  { title: 'Salão de madeira', image: images.salaoCouple, ratio: 'aspect-[5/4]' },
  { title: 'Arquitetura no jardim', image: images.architectureGarden, ratio: 'aspect-[3/4]' },
  { title: 'Campo aberto', image: images.fieldCoupleWide, ratio: 'aspect-[16/10]' },
  { title: 'Retrato no campo', image: images.fieldCouple, ratio: 'aspect-[4/5]' },
  { title: 'Vestido no arco', image: images.dressArch, ratio: 'aspect-[3/4]' },
  { title: 'Padrinhos', image: images.groomsmen, ratio: 'aspect-[5/4]' },
  { title: 'Noivos na escada', image: images.coupleStairs, ratio: 'aspect-[4/5]' },
  { title: 'Piscina', image: images.pool, ratio: 'aspect-[5/4]' },
  { title: 'Jardim preparado', image: images.garden, ratio: 'aspect-[4/5]' },
  { title: 'Chegada', image: images.hero, ratio: 'aspect-[5/4]' },
  { title: 'Natureza', image: images.sunset, ratio: 'aspect-[4/5]' }
]

export const pastEvent = {
  eyebrow: 'Eventos Passados',
  title: 'Festa Limão Siciliano',
  subtitle: '',
  copy:
    'Uma tarde temática entre jardim, piscina, arquitetura e detalhes solares, criada para transformar uma celebração familiar em memória de destino.',
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
      title: 'Memórias no Haras',
      image: remoteCloudinaryImage('Valentinofaz1ano-1_hxtjqa'),
      ratio: 'aspect-[5/4]'
    }
  ]
}

export const testimonials = [
  {
    quote: 'Local excelente para eventos',
    author: 'Murillo Alano de Souza',
    meta: 'Google • 21 de jul. de 2022'
  },
  {
    quote: 'Muy hermoso lugar',
    author: 'Rafael Malacosti',
    meta: 'Google • há 15 semanas'
  },
  {
    quote: 'Lindo haras',
    author: 'Petra Wamser',
    meta: 'Google • 24 de abr. de 2024'
  }
]

export const footerLinks = [
  { label: 'Instagram', href: instagramUrl, icon: Instagram },
  { label: 'WhatsApp', href: whatsappUrl, icon: MessageCircle },
  { label: 'Florianópolis, SC', href: 'https://maps.google.com/?q=Florian%C3%B3polis%20SC', icon: MapPin }
]

export const structureItems = [
  {
    title: 'Piscina semi-olímpica',
    copy: 'Um espelho azul em meio ao verde, ideal para recepções de dia, editoriais e momentos de respiro.',
    icon: Waves,
    image: images.pool,
    className: 'lg:col-span-7'
  },
  {
    title: 'Salão principal',
    copy: 'Interiores em madeira, escala acolhedora e atmosfera elegante para jantares, festas e cerimônias reservadas.',
    icon: PanelsTopLeft,
    image: images.salaoCouple,
    className: 'lg:col-span-5'
  },
  {
    title: 'Churrasqueira',
    copy: 'Um ponto de encontro para celebrações descontraídas com acabamento cuidadoso e ritmo de casa de campo.',
    icon: Flame,
    image: images.architectureGarden,
    className: 'lg:col-span-4'
  },
  {
    title: 'Cozinha completa',
    copy: 'Estrutura de apoio para equipes, menus autorais e serviços desenhados com fluidez.',
    icon: CookingPot,
    image: images.cake,
    className: 'lg:col-span-4'
  },
  {
    title: 'Áreas verdes',
    copy: 'Gramados amplos, jardins e árvores que emolduram a experiência com uma presença natural e silenciosa.',
    icon: Flower2,
    image: images.garden,
    className: 'lg:col-span-4'
  },
  {
    title: 'Estacionamento',
    copy: 'Chegada confortável para convidados, fornecedores e produção do evento.',
    icon: CircleParking,
    image: images.groomsmen,
    className: 'lg:col-span-4'
  },
  {
    title: 'Espaços abertos',
    copy: 'Ambientes externos para cerimônias, cocktails, ilhas gastronômicas e lounges sob o céu.',
    icon: DoorOpen,
    image: images.fieldCoupleWide,
    className: 'lg:col-span-5'
  },
  {
    title: 'Área infantil',
    copy: 'Respiro para famílias e acolhimento para crianças, sem quebrar a elegância da celebração.',
    icon: Baby,
    image: images.dressArch,
    className: 'lg:col-span-3'
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
