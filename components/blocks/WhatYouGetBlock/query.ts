export const WhatYouGetQuery = `
... on PagesPageBlocksWhatYouGet{
  __typename
  whatYouGetTitle
   whatYouGetDescription
   gains{
     gainsName
     gainsDescription
     gainsImage
   }
 }
`;
