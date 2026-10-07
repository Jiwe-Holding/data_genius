export const company = {
  name: 'DATAGENIUS',
  since: 2013,
  phone: '+243 973 980 353',
  phoneHref: '+243973980353',
  email: 'contact@data-genius.com',
  address: ['888 Av. Plateau, Gombe', 'Kinshasa, DRC'],
}

export const nav = [
  { id: 'expertise', label: 'Expertise' },
  { id: 'qualitative', label: 'Qualitative' },
  { id: 'quantitative', label: 'Quantitative' },
  { id: 'consulting', label: 'Consulting & Strategy' },
  { id: 'about', label: 'About' },
]

export const heroPoints = ['Field interviews', 'CATI surveys', 'Focus groups', 'Multivariate analysis']

export const stats = [
  { value: '2013', label: 'Year founded' },
  { value: '3', label: 'Practices: qualitative, quantitative, consulting' },
  { value: '6–12', label: 'Participants per focus group' },
  { value: '100%', label: 'Independent' },
]

export const expertise = [
  {
    icon: 'chart',
    tag: 'Quantitative',
    title: 'Quantitative research',
    text: 'Higher-order statistical analysis, multivariate analysis, CATI surveys and large-scale field data collection.',
    anchor: 'quantitative',
  },
  {
    icon: 'users',
    tag: 'Qualitative',
    title: 'Qualitative research',
    text: 'All forms, including SILO, creative thought-shops, qualitative diaries, semiotic analysis, ethnography and more.',
    anchor: 'qualitative',
  },
  {
    icon: 'radar',
    tag: 'Monitoring',
    title: 'Market & competitor monitoring',
    anchor: 'consulting',
    bullets: [
      'Monitor the market and its trends',
      'Know what your competitors are doing and how they cope with a specific issue',
      'Know what your trade feels and pushes',
      'Know how competition handles trade: margins, relationships and more',
    ],
  },
]

export const qualitative = [
  {
    id: 'focus',
    label: 'Focus groups',
    icon: 'users',
    how: 'A small number of participants (6–12) from within the company’s target market are brought together and led by a moderator through discussions of important company and brand topics.',
    why: [
      'To get open and complete perspectives on the brand or product.',
      'To gain insights into the way the group views the brand, product, related images, slogans, concepts or symbols.',
    ],
  },
  {
    id: 'idi',
    label: 'In-depth interviews',
    icon: 'mic',
    how: 'Face-to-face interviews using a discussion guide that draws out the respondent’s views through open-ended questioning.',
    why: [
      'To get detailed information about a person’s thoughts and behaviours.',
      'To explore new issues in depth.',
      'When participants may not be comfortable talking openly in a group, or when you want to distinguish individual views from group views.',
    ],
  },
  {
    id: 'desk',
    label: 'Desk research',
    icon: 'book',
    how: 'Drawing on online resources, call centres, national statistics offices and previously conducted social and marketing research.',
    why: [
      'To perform a competitive analysis of a product portfolio.',
      'To develop a presentation strategy for a new product on the local market.',
      'To design a product usage strategy for a foreign market.',
      'To explore the unmet requirements of various products and find a competitive advantage.',
    ],
  },
]

export const facilities = [
  {
    title: 'Technology',
    icon: 'monitor',
    items: [
      'Dual-monitor set-up for respondent use and simultaneous client viewing for usability testing',
      'FocusVision video streaming for off-site viewing of focus groups, mini-groups, IDIs and more',
      'Wall-mounted camera, microphones and speakers',
      'Projector and TV monitors',
      'Tablet to communicate with the moderator',
      'Tablets for respondents (when filling in forms)',
    ],
  },
  {
    title: 'Client',
    icon: 'eye',
    items: [
      'Tiered, comfortable client viewing room for up to 6 guests',
      'Double-pane glass for ultimate soundproofing',
      'Internet access',
      'Headphone translation',
      'Online chat platform to communicate with the moderator',
    ],
  },
]

export const quantitative = [
  {
    icon: 'phone',
    title: 'CATI surveys',
    text: 'Computer-assisted telephone interviewing with real-time quality control and supervisor monitoring.',
  },
  {
    icon: 'pin',
    title: 'Field interviews (CAPI)',
    text: 'Face-to-face, tablet-based surveys with households, retail outlets and trade spots.',
  },
  {
    icon: 'chart',
    title: 'Statistical analysis',
    text: 'Higher-order statistics, multivariate analysis, segmentation, modelling and cross-tabulation.',
  },
  {
    icon: 'radar',
    title: 'Tracking & barometers',
    text: 'Recurring measurement and dashboards to track your indicators over time.',
  },
]

export const capi = [
  { icon: 'store', title: 'Multi-source aggregation', text: 'Aggregates information from different markets, shops and trade spots.' },
  { icon: 'pin', title: 'GPS traces', text: 'Traces and checks the places and shops visited by each interviewer.' },
  { icon: 'camera', title: 'Photo evidence', text: 'Pictures uploaded from the places and shops visited.' },
  { icon: 'clock', title: 'Interview length', text: 'Length indicator to control the pace of each interview.' },
  { icon: 'bolt', title: 'Fast transfer', text: 'Collected data is transferred quickly to the client.' },
  { icon: 'file', title: 'Flexible exports', text: 'Data delivered in the client’s preferred format: PDF, Excel, Access.' },
]

export const consulting = [
  {
    icon: 'globe',
    title: 'Market overview',
    points: [
      'In-depth analysis of trends, customer behaviour and product innovation based on up-to-date market data and target interviews.',
      'Develop market insights and strategic directions backed by market intelligence.',
    ],
  },
  {
    icon: 'scale',
    title: 'Benchmark & gap analysis',
    points: [
      'Analyse competitors’ offerings: features, user experience, pricing and other key elements of the value proposition.',
      'Perform gap analysis and optimise product positioning.',
    ],
  },
  {
    icon: 'target',
    title: 'Size opportunities',
    points: [
      'Identify cluster-specific opportunities based on specific trends.',
      'Size opportunities based on the positioning of competitive products.',
    ],
  },
  {
    icon: 'pie',
    title: 'Customer profiling & segmentation',
    points: [
      'Develop a segmentation strategy by clustering clients according to customer behaviour and value, aimed at tailored propositions.',
      'Apply specific methodologies to consumer and commercial clientele.',
    ],
  },
  {
    icon: 'shield',
    title: 'Regulatory landscape',
    points: [
      'Read the regulatory framework and its changes to anticipate constraints.',
      'Identify the opportunities these changes open up.',
    ],
  },
]

export const process = [
  { n: '01', title: 'Scoping', text: 'Objectives, targets and indicators defined with you.' },
  { n: '02', title: 'Collection', text: 'Qualitative, CATI, field or desk research as needed.' },
  { n: '03', title: 'Analysis', text: 'Statistical processing and expert reading of results.' },
  { n: '04', title: 'Recommendations', text: 'Clear, innovative and actionable decisions.' },
]

export const about = {
  lead: 'DATAGENIUS is a highly respected independent management advisory firm, founded in 2013.',
  body: [
    'We provide strategic direction and business counsel based on the analysis of market insights, competitive dynamics, changing technologies and regulatory shifts.',
    'DATAGENIUS brings together a team of experts in strategy, market analysis and research, technology and regulatory issues, able to provide comprehensive support through innovative, effective and actionable recommendations.',
    'The expertise of our professionals, combined with true passion, dedication and attention to detail, makes our services unique.',
  ],
  pillars: [
    { icon: 'target', title: 'Strategy' },
    { icon: 'chart', title: 'Market analysis' },
    { icon: 'monitor', title: 'Technology' },
    { icon: 'shield', title: 'Regulation' },
  ],
}
