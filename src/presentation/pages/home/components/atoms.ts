import { atom } from 'recoil'

const lines = [
  '006 - Novo Sarandi',
  '006 - Vila Nova',
  '006 - Novo Sobradinho',
  '007 - Ouro Preto',
  '007 - Boa Vista',
  '010 - Bom Principio',
  '010 - Gramado',
  '010 - São Luiz do Oeste',
  '011 - Dois Irmãos',
  '019 - Biopark',
  '020 - Santa Clara IV',
  '021 - Santa Clara II',
  '022 - JD. Concórdia',
  '023 - JD. Coopagro',
  '024 - JD. São Francisco',
  '025 - PUC',
  '026 - Operária',
  '027 - JD. Porto Alegre',
  '028 - Vila Industrial',
  '030 - Colonia',
  '031 - Pioneira',
  '032 - Europa Via Centro',
  '034 - Panorama',
  '048 - Metropolitano Toledo',
  '291 - Europa Via Concórdia'
]

const lastSearchs = [{
  title: 'Colonia',
  subtitle: 'sentido centro',
  datetime: 'hoje'
},{
  title: 'Jardim Europa',
  subtitle: 'sentido centro',
  datetime: 'ontem'
},{
  title: 'São Francisco',
  subtitle: 'sentido Parizotto',
  datetime: '4 dias'
}]

export const homeState = atom({
  key: 'homeState',
  default: {
    isLoading: false,
    isFormInvalid: false,
    mainError: '',
    lines,
    lastSearchs,
    current: -1,
    dayFilter: 'today'
  }
})
