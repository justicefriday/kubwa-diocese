import { vision } from './vision'
import { archdeaconries as all } from './parishes'

export { vision }
export const archdeaconries = all.map((a) => a.name)

export const intro =
  'The Missionary Diocese of Kubwa was carved out of the Diocese of Abuja. The Church of Nigeria Standing Committee conceived it in September 2004, and the House of Bishops constituted it in January 2005.'

// Each section: a title, paragraphs, and optional extras (quote / chips)
export const sections = [
  {
    title: 'How It Began',
    paragraphs: [
      'The Missionary Diocese of Kubwa was created from her mother diocese, the Diocese of Abuja. It was conceived by the Church of Nigeria Standing Committee at its meeting in Enugu in September 2004, where nine new missionary dioceses were created and Kubwa was one of them.',
      'In January 2005, the Episcopal Synod of the Church of Nigeria (the House of Bishops) met at the Chapel of St. Peter, Ibru Centre, Agbarha-Otor, Delta State, in its week-long annual retreat, and the diocese was constituted. It began with six archdeaconries: Cathedral, Kubwa, Nyanya, Karmo, Lugbe and Kuje. The then Bishop of Gusau, Rt. Rev. Simon Bala (now late), was translated to lead it.',
    ],
  },
  {
    title: 'The Pioneer Bishop',
    paragraphs: [
      'On 12 March 2005, Bishop Bala was enthroned at the Cathedral Church of St. Bartholomew, Kubwa, by the then Primate, Archbishop Peter Jasper Akinola. The journey to build a new diocese began.',
      'The new Bishop promptly set up structures to start the building process. Surrounded by dedicated men and women in God\u2019s vineyard, he laid the foundation within three years. He gave his ministry clear focus by authoring the diocese\u2019s Vision:',
    ],
    quote: true,
    after: [
      'He set the stage for this vision with a seven-day city-wide crusade. Ven. (Prof.) Chinedu Nebo, former Minister of Power, was guest teacher, and spoke on \u201cThe End-Time Events\u201d to a capacity audience at the open field of St. Andrew\u2019s Church, Kubwa, with many souls surrendering to Christ.',
      'His tenure also saw the establishment of the Anglican Comprehensive Secondary School in Kubwa, the adoption of the Christian Herald as the diocesan newsletter, the Clergy Welfare Scheme, the Diocesan Cooperative Society and the Men\u2019s Fellowship.',
    ],
  },
  {
    title: 'Bishop Bala Goes to Be with the Lord',
    paragraphs: [
      'Barely three years into this exciting journey, on Sunday 19 October 2008, tragedy struck. The young Bishop Simon Bala, aged 44, was called home. To the parishioners of the \u201cbaby\u201d diocese, it was sunset at dawn. He left behind his wife, Mrs. Christiana Talatu Bala, and three little children: Blessed, Grace and Victoria.',
    ],
  },
  {
    title: 'Enter Bishop Akamisoko',
    paragraphs: [
      'The shock of the Bishop\u2019s sudden passing cast a long gloom over the diocese, until relief came with the translation of the Bishop of Zonkwa, Rt. Rev\u2019d Dr. Duke T. Akamisoko, to Kubwa. On Sunday 15 February 2009, he was enthroned as the 2nd Bishop of the Diocese of Kubwa and Dean of the Cathedral Church of St. Bartholomew.',
      'In no time, the new Bishop rolled up his sleeves and got everyone back to work. From then on, there were no dull moments in the diocese.',
    ],
  },
  {
    title: 'A Harvest of Landmarks',
    paragraphs: [
      'On 30 November 2011, three major buildings were completed and dedicated to God at once by the Primate of All Nigeria, Most Rev\u2019d Nicholas Okoh: the state-of-the-art St. Andrew\u2019s Church, the Bishop\u2019s Court, and the two-storey Bishop Bala International Conference Centre. All stand within the four-hectare land that now serves as the headquarters of the diocese.',
      'In 2015, at its 10th anniversary, the diocese established a 50-bed Anglican Hospital, the first in the history of any diocese of the Church of Nigeria. It is complemented by Kubwa Diocesan Development and Welfare Services (KDDWS), registered with the Corporate Affairs Commission in 2011. With about 150 trained community volunteers, KDDWS reaches remote parts of AMAC, Bwari and Kuje in community health, water, sanitation and hygiene, peace and conflict resolution, and community development, with Christian Aid Nigeria among its major partners.',
      'On 5 February 2016, the ultra-modern St. Bartholomew\u2019s Cathedral, seating about 5,000 worshippers, was dedicated by Archbishop Nicholas Okoh. It ranks among the biggest churches in the Church of Nigeria. On 12 March 2020, at the Crystal (15th) Anniversary, the world-class Diocesan Secretariat was dedicated and named \u201cPrimate Peter Akinola Crystal House\u201d, in appreciation of the Primate Emeritus, who acquired the land and bequeathed it to the diocese.',
      'The diocese also owns three thriving secondary schools in the FCT, the Anglican Comprehensive Secondary Schools in Kubwa, Kpeyegyi and Nyanya, and runs the Kubwa Anglican Diocesan Training Centre, which offers diploma courses in lay ministry, as well as a guest house.',
    ],
  },
  {
    title: 'Host to the Church of Nigeria',
    paragraphs: [
      'In its short life, the diocese has hosted several top-level meetings of the Church of Nigeria, among them the Standing Committee (1\u20135 February 2016), the Nigeria Anglican Roman Catholic Commission annual conference (10\u201312 October 2017), the Northern Bishops Conference, the Abuja Provincial Clergy Conference, and the Standing Committee again (13\u201317 February 2023).',
    ],
  },
  {
    title: 'Growth of the Archdeaconries',
    paragraphs: [
      'The diocese began with six archdeaconries and has grown to seventeen. Each one has taken on a giant project of its own, from new churches and vicarages to halls and conference centres, and many more are quietly going on across the diocese.',
    ],
    chips: true,
  },
]

export const bishops = [
  {
    name: 'Rt. Rev. Simon Bala',
    tenure: '2005 to 2008',
    role: 'Pioneer Bishop',
    memorial: true,
  },
  {
    name: "Rt. Rev'd Dr. Duke T. Akamisoko",
    tenure: '2009 to present',
    role: '2nd Bishop of Kubwa',
  },
]