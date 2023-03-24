
import React from "react";
import type { GetPagesDocumentQuery,GetBlogPostDocumentQuery } from "../../.tina/__generated__/types";
import SpacingBlock from "../blocks/SpacingBlock/SpacingBlock";
import HomepageHeroBlock from "../blocks/HomepageHeroBlock/HomepageHeroBlock";
import TwoImagesBlock from "../blocks/TwoImagesBlock/TwoImagesBlock";
import ImageBlock from "../blocks/ImageBlock/ImageBlock";
import ImageTwoBlock from "../blocks/ImageTwoBlock/ImageTwoBlock";
import ContentVideoBlock from "../blocks/ContentVideoBlock/ContentVideoBlock";
import LeftImageRightLinksBlock from "../blocks/LeftImageRightLinksBlock/LeftImageRightLinksBlock";
import AdventureBlock from "../blocks/AdventureBlock/AdventureBlock";
import TitleDescriptionBlock from "../blocks/TitleDescriptionBlock/TitleDescriptionBlock";
import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import SmallHeroBlock from "../blocks/SmallHeroBlock/SmallHeroBlock";
import WhatYouGetBlock from "../blocks/WhatYouGetBlock/WhatYouGetBlock";
import ArticlesBlogBlock from "../blocks/ArticlesBlogBlock/ArticlesBlogBlock";
import PdfBlock from "../blocks/PdfBlock/PdfBlock";
import ContactPageBlock from "../blocks/ContactPageBlock/ContactPageBlock";


interface P {
  pageData: GetPagesDocumentQuery;
  blogPosts: GetBlogPostDocumentQuery;
}

export const Blocks = ({pageData, blogPosts} : P) => {

  return (
    <>
      {pageData?.getPagesDocument?.data?.pageBlocks
        ? pageData?.getPagesDocument?.data?.pageBlocks?.map(
          (block: any, i: number): JSX.Element | null | undefined => {
            switch (block && block.__typename) {    
                case "PagesPageBlocksHomepageHero":
                  if (block && block.__typename) {
                    return (
                      <React.Fragment key={i + block.__typename}>
                        <HomepageHeroBlock {...block} />
                      </React.Fragment>
                    );
                  }            
                case "PagesPageBlocksSpacing":
                  if (block && block.__typename) {
                    return (
                      <React.Fragment key={i + block.__typename}>
                        <SpacingBlock {...block} />
                      </React.Fragment>
                    );
                  }
                  case "PagesPageBlocksTwoImages":
                    if (block && block.__typename) {
                      return (
                        <React.Fragment key={i + block.__typename}>
                          <TwoImagesBlock {...block} />
                        </React.Fragment>
                      );
                    }
                    case "PagesPageBlocksImageTwo":
                      if (block && block.__typename) {
                        return (
                          <React.Fragment key={i + block.__typename}>
                            <ImageTwoBlock {...block} />
                          </React.Fragment>
                        );
                      }
                      case "PagesPageBlocksContactPage":
                        if (block && block.__typename) {
                          return (
                            <React.Fragment key={i + block.__typename}>
                              <ContactPageBlock {...block} />
                            </React.Fragment>
                          );
                        }
                      case "PagesPageBlocksPdf":
                        if (block && block.__typename) {
                          return (
                            <React.Fragment key={i + block.__typename}>
                              <PdfBlock {...block} />
                            </React.Fragment>
                          );
                        }
                    case "PagesPageBlocksImage":
                      if (block && block.__typename) {
                        return (
                          <React.Fragment key={i + block.__typename}>
                            <ImageBlock {...block} />
                          </React.Fragment>
                        );
                      }
                      case "PagesPageBlocksDescription":
                        if (block && block.__typename) {
                          return (
                            <React.Fragment key={i + block.__typename}>
                              <DescriptionBlock {...block} />
                            </React.Fragment>
                          );
                        }
                        case "PagesPageBlocksWhatYouGet":
                          if (block && block.__typename) {
                            return (
                              <React.Fragment key={i + block.__typename}>
                                <WhatYouGetBlock {...block} />
                              </React.Fragment>
                            );
                          }
                        case "PagesPageBlocksSmallHero":
                          if (block && block.__typename) {
                            return (
                              <React.Fragment key={i + block.__typename}>
                                <SmallHeroBlock {...block} />
                              </React.Fragment>
                            );
                          }
                      case "PagesPageBlocksContentVideo":
                        if (block && block.__typename) {
                          return (
                            <React.Fragment key={i + block.__typename}>
                              <ContentVideoBlock {...block} />
                            </React.Fragment>
                          );
                        }
                        case "PagesPageBlocksAdventure":
                          if (block && block.__typename) {
                            return (
                              <React.Fragment key={i + block.__typename}>
                                <AdventureBlock {...block} />
                              </React.Fragment>
                            );
                          }
                          case "PagesPageBlocksTitleDescription":
                            if (block && block.__typename) {
                              return (
                                <React.Fragment key={i + block.__typename}>
                                  <TitleDescriptionBlock {...block} />
                                </React.Fragment>
                              );
                            }
                           case "PagesPageBlocksLeftImageRightLinks":
                        if (block && block.__typename) {
                          return (
                            <React.Fragment key={i + block.__typename}>
                              <LeftImageRightLinksBlock {...block} />
                            </React.Fragment>
                          );
                        }
                        case 'PagesPageBlocksArticlesBlog':
                          if (block && block.__typename) {
                            return (
                              <React.Fragment key={i + block.__typename}>
                                <ArticlesBlogBlock
                                  blockData={block}
                                  blogPosts={blogPosts}
                                />
                              </React.Fragment>
                            );
                          }
                          break;

                default:
                  return null;
              }
            }
          )
        : null}
    </>
  );
};
