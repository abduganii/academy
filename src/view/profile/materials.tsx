'use client'
import ArticlesCardPage from "@/components/card/acticles-card-in-page";
import { hoc } from "@/utils";
import {Tabs, Tab} from "@nextui-org/react";
import { useArticlesProps } from "./props";
import { useTranslations } from "next-intl";


export const MaterialsPage:any = hoc(useArticlesProps, props => {
    const {articles} = props
    const t = useTranslations()
  let tabs = [
    {
      id: "articles",
      label: t("articles"),
    },
    {
      id: "books",
      label: t("books"),
    },
  
  ];

  return (
      <Tabs items={tabs} defaultSelectedKey={'articles'} >
        {(item) => (
          <Tab key={item.id}  title={item.label}>
            {
                item?.id == "articles" ?
                <>
                       { 
                             articles?.data?.length && articles?.data?.map((e:any)=>(
                                          <ArticlesCardPage
                                          className="mb-4"
                                          link={`/articles/${e?.article?.id}`}
                                          key={e?.article?.id}
                                          title={e?.article?.title}
                                          name={e?.article?.text}
                                          date={e?.article?.created_at}
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
})