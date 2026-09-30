export const company = {
  name: 'DATAGENIUS',
  since: 2013,
  phone: '+243 973 980 353',
  phoneHref: '+243973980353',
  email: 'contact@data-genius.com',
  address: ['888 Av. Plateau, Gombe', 'Kinshasa, DRC'],
}

export const nav = [
  { id: 'accueil', label: 'Home' },
  { id: 'apropos', label: 'About' },
  { id: 'qualitatif', label: 'Qualitative' },
  { id: 'quantitatif', label: 'Quantitative' },
  { id: 'conseil', label: 'Consulting & Strategy' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '2013', label: 'Year founded' },
  { value: '3', label: 'Core areas of expertise' },
  { value: '5', label: 'Consulting modules' },
  { value: '100%', label: 'Independent firm' },
]

export const services = [
  {
    icon: 'chart',
    title: 'Quantitative research',
    text: 'Higher order statistical analysis, multivariate analysis, CATI surveys and large-scale field data collection.',
    anchor: 'quantitatif',
  },
  {
    icon: 'users',
    title: 'Qualitative research',
    text: 'All forms, including SILO, creative thought-shops, qualitative diaries, semiotic analysis, ethnography and more.',
    anchor: 'qualitatif',
  },
  {
    icon: 'radar',
    title: 'Market monitoring',
    text: 'Monitor the market and its trends, know what your competitors are doing, and what your trade feels and pushes.',
    anchor: 'conseil',
  },
]

export const quantitative = [
  { icon: 'phone', title: 'CATI surveys', text: 'Computer-assisted telephone interviews with real-time quality control.' },
  { icon: 'pin', title: 'Field interviews', text: 'Face-to-face surveys on tablets, geolocated and supervised.' },
  { icon: 'chart', title: 'Statistical analysis', text: 'Higher order statistics, multivariate analysis, segmentation and modelling.' },
  { icon: 'radar', title: 'Market tracking', text: 'Barometers and dashboards to track your indicators over time.' },
]

export const qualitative = [
  {
    id: 'focus',
    label: 'Focus Groups',
    how: 'A small number of participants (6-12) from within the company target market are brought together and led through discussions of important company and brand topics by a moderator.',
    why: [
      'To get open and complete perspectives on the brand or product.',
      'To gain insights about the way the group views the brand, product, related images, slogans, concepts or symbols.',
    ],
  },
  {
    id: 'idi',
    label: 'In-Depth Interviews',
    how: 'Face-to-face interview using a discussion guide which facilitates the flushing out of the respondent’s views through open-ended questioning.',
    why: [
      'To get detailed information about a person’s thoughts and behaviors.',
      'To explore new issues in depth.',
      'When potential participants may not be comfortable talking openly in a group, or when you want to distinguish individual views from group views.',
    ],
  },
  {
    id: 'desk',
    label: 'Desk Research',
    how: 'Drawing on online resources, call centers, national statistics offices and existing social and marketing research.',
    why: [
      'To perform competitive analysis of a product portfolio.',
      'To develop a new product presentation strategy on the local market.',
      'To design a strategy for product usage in a foreign market.',
      'To explore the unmet requirements of various products and find competitive advantage.',
    ],
  },
]

export const facilities = [
  {
    title: 'Technology',
    items: [
      'Dual monitor set-up for respondent use and simultaneous client viewing for usability testing',
      'Focus Vision video streaming for off-site viewing of focus groups, mini-groups, IDIs, etc.',
      'Wall-mounted camera, mic and speakers',
      'Projector and TV monitors',
      'Tablet to communicate with the moderator',
      'Tablets for respondents (when needing to fill forms)',
    ],
  },
  {
    title: 'Client',
    items: [
      'Tiered, comfortable client viewing room for up to 6 guests',
      'Double pane glass for ultimate soundproofing',
      'Internet',
      'Headphone translation',
      'Online chatting platform to communicate with the moderator',
    ],
  },
]

export const consulting = [
  { icon: 'globe', title: 'Market overview', text: 'In-depth analysis of trends, customer behavior and product innovation based on up-to-date market data and target interviews. Develop market insights and strategic directions backed by market intelligence.' },
  { icon: 'scale', title: 'Benchmark & Gap analysis', text: 'Analyze competitors’ offerings related to features, user experience, pricing and other key elements of the value proposition. Perform gap analysis and optimize product positioning.' },
  { icon: 'target', title: 'Size opportunities', text: 'Identify cluster-specific opportunities based on specific trends, and size them based on the positioning of competitive products.' },
  { icon: 'users', title: 'Customer profiling & Segmentation', text: 'Develop a segmentation strategy by clustering clients according to customer behavior and value, aimed at tailored propositions. Apply specific methodologies to consumer and commercial clientele.' },
  { icon: 'shield', title: 'Regulatory landscape', text: 'Read the regulatory framework and its changes to anticipate constraints and identify cluster-specific opportunities.' },
]

export const process = [
  { n: '01', title: 'Scoping', text: 'Objectives, targets and indicators defined with you.' },
  { n: '02', title: 'Collection', text: 'Qualitative, CATI, field or desk research as needed.' },
  { n: '03', title: 'Analysis', text: 'Statistical processing and expert reading of results.' },
  { n: '04', title: 'Recommendations', text: 'Clear, innovative and actionable decisions.' },
]
