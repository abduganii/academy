'use client'
import ArticlesCardPage from "@/components/card/acticles-card-in-page";
import {Tabs, Tab, Card, CardBody,} from "@nextui-org/react";

export default function MaterialsPage() {
  let tabs = [
    {
      id: "articles",
      label: "Статьи",
    },
    {
      id: "books",
      label: "Книги",
    },
  
  ];

  return (
      <Tabs items={tabs} defaultSelectedKey={'articles'} >
        {(item) => (
          <Tab key={item.id}  title={item.label}>
            {
                item?.id == "articles" ?
                <>
                       { [1,2,3,4,5].map((e)=>( 
                            <ArticlesCardPage
                                className="mb-4"
                                key={e}
                                title='Вниманию кандидатов, рекомендованных к обучению в магистратуру'
                                link={`/articles/${e}`}
                                name=' Т. Усмонов'
                                date=' 22.02.2024'
                            />
                        ))}
                </>:
                <>
            </>
            }
          </Tab>
        )}
      </Tabs>
  );
}