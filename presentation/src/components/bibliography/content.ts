export interface BibliographyEntry {
  authors?: `${string},${string}`[];
  year?: string | number;
  title?: string;
  container?: string;
  volume?: string | number;
  issue?: string | number;
  pages?: string;
  publisher?: string;
  url?: string;
}

export const bibliography: BibliographyEntry[] = [
  {
    authors: ["Card,S. K.", "Moran,T. P.", "Newell,A."],
    year: 1983,
    title: "The Psychology of Human-Computer Interaction",
    container: "Hillsdale, NJ: L. Erlbaum Associates",
    url: "https://books.google.pl/books/about/The_Psychology_of_Human_computer_Interac.html?id=JeFQAAAAMAAJ&redir_esc=y",
  },
  {
    authors: ["Preece,J.", "Rogers,Y.", "Sharp,H."],
    year: 2015,
    title: "Interaction Design: Beyond Human-Computer Interaction",
    container: "Chichester, UK: John Wiley & Sons",
    volume: "4th ed.",
    url: "https://www.vitalsource.com/products/interaction-design-beyond-human-computer-jenny-preece-helen-sharp-v9781119088790",
  },
  {
    authors: ["Shneiderman,B.", "Plaisant,C."],
    year: 2010,
    title:
      "Designing the User Interface: Strategies for Effective Human-Computer Interaction",
    container: "Boston, MA: Addison-Wesley",
    volume: "5th ed.",
    url: "https://www.scirp.org/reference/referencespapers?referenceid=230459",
  },
  {
    authors: ["Dix,A.", "Finlay,J.", "Abowd,G. D.", "Beale,R."],
    year: 2004,
    title: "Human-Computer Interaction",
    container: "Harlow: Pearson Education",
    volume: "3rd ed.",
    url: "https://paragnachaliya.in/wp-content/uploads/2017/08/HCI_Alan_Dix.pdf",
  },
  {
    authors: ["Weiser,M."],
    year: 1991,
    title: "The Computer for the 21st Century",
    container: "Scientific American",
    volume: 265,
    issue: 3,
    pages: "94–104",
    url: "https://www.scientificamerican.com/article/the-computer-for-the-21st-century/",
  },
  {
    authors: ["Aarts,E. H. L.", "Marzano,S. (Eds.)"],
    year: 2003,
    title: "The New Everyday: Views on Ambient Intelligence",
    container: "Rotterdam: Uitgeverij 010",
    url: "https://research.tue.nl/en/publications/the-new-everyday-views-on-ambient-intelligence",
  },
  {
    authors: ["Bly,S. A.", "Harrison,S. R.", "Irwin,S."],
    year: 1993,
    title:
      "Media Spaces: Bringing People Together in a Video, Audio and Computing Environment",
    container: "Communications of the ACM",
    volume: 36,
    issue: 1,
    pages: "28–47",
  },
  {
    authors: ["Davies,N.", "Gellersen,H. W."],
    year: 2002,
    title:
      "Beyond Prototypes: Challenges in Deploying Ubiquitous Computing Systems",
    container: "IEEE Pervasive Computing",
    volume: 1,
    issue: 1,
    pages: "26–33",
  },
  {
    authors: ["Grudin,J."],
    year: 1994,
    title: "Computer-Supported Cooperative Work: History and Focus",
    container: "IEEE Computer",
    volume: 27,
    issue: 5,
    pages: "19–26",
  },
  {
    authors: ["International Organization for Standardization,ISO"],
    year: 2020,
    title:
      "ISO 9241-110:2020 – Ergonomics of human-system interaction — Part 110: Interaction principles",
    container: "ISO",
    url: "https://cdn.standards.iteh.ai/2020/standards/iso/iso_9241-110_2020.pdf",
  },
  {
    authors: ["Norman,D. A."],
    year: 2013,
    title: "The Design of Everyday Things: Revised and Expanded Edition",
    container: "New York: Basic Books",
    url: "https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/",
  },
];
