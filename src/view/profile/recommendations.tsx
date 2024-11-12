
'use client'
import ArticlesCardPage from "@/components/card/acticles-card-in-page";
import NewsCard from "@/components/card/news-card";
import {Tabs, Tab} from "@nextui-org/react";

export default function RecommendationsPage() {
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
            { [1,2,3,4,5].map((e)=>( 
                    <NewsCard
                    link={`/news/${e}`}
                        className={'colm1'}
                        key={e}
                        image='/news.png'
                        Isgrey={true}
                        title='Объявляется прием на обучение на стажера-исследователя'
                        date='16.07.2024'
                        view={567}
                    />
            ))}
        </div>
          </Tab>
        )}
      </Tabs>
  );
}