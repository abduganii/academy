import {Skeleton} from "@nextui-org/react";

export default function Loading() {
  return (
    <section className="page container pt-[100px] pb-5">
      <Skeleton className="h-60 sm:h-72 md:h-80 lg:h-[420px] rounded-lg w-full"/>
      <Skeleton className="h-5 w-full my-4 max-w-sm rounded"/>
      <Skeleton className="h-5 w-full mb-4 max-w-sm rounded"/>
      <Skeleton className="h-5 w-full mb-4 max-w-sm rounded"/>
      <Skeleton className="h-5 w-full mb-4 max-w-sm rounded"/>
    </section>
  )
}