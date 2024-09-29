type SubLinks = {
  firstTitle: string
  links: Links[]
}

type Links = {
  title?: string;
  url?: string;
  subLinks?: SubLinks[]
};

export type LinksProps = {
  title?: string;
  url?: string;
  subLinks?: SubLinks[]
};


// {
//   "title": "title",
//   "url": "rrr",
//   "sublinks": [
//     "subLinkTitle": "title",
//     "links": [
//       {
//         "title": "title",
//         "url": "url"
//       }
//     ]
//   ]
// }