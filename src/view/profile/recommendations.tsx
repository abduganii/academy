
'use client'
import ArticlesCardPage from "@/components/card/acticles-card-in-page";
import NewsCard from "@/components/card/news-card";
import { hoc } from "@/utils";
import {Tabs, Tab} from "@nextui-org/react";
import { useNewsProps } from "./props";
import Pagination from "@/components/pagination";
export const RecommendationsPage:any = hoc(useNewsProps, props => {
  const { news } = props
  let tabs = [
    {
      id: "new",
      label: "new",
    },
    {
      id: "popularPublications",
      label: "Popular Publications",
    },
    {
        id: "yourInterests",
        label: "your interests",
      },
  ];

  return (
      <Tabs items={tabs} defaultSelectedKey={'new'} >
        {(item) => (
          <Tab key={item.id}  title={item.label}>
        <div className='flex flex-wrap gap-5 '>
           {news?.data && news?.data?.map((e:any,index:number)=>( 
                      <NewsCard
                          link={`/news/${e?.id}`}
                          className={'colm1'}
                          key={e?.id}
                          image={`${process.env.NEXT_PUBLIC_BASE_URL}${e?.image?.path}`}
                          Isgrey={true}
                          text={index == 0||index == 1 ?  e?.content: false}
                          category={e?.section}
                          title={e?.title}
                          date={e?.publishStartTime}
                          view={e?.views}
                      />
                ))}
        </div>
         <Pagination pagination={ news?.pagination} />
          </Tab>
        )}
      </Tabs>
  );
})