import { useFetchData } from "@/hooks";

export const usePageProps = () => {
  const { data: maps } = useFetchData<any>({
    url: "maps",
  });

  return {
    maps: maps,
  };
};

export const usePageIdProps = ({ id }: any) => {
  const { data: legislations } = useFetchData<any>({
    url: `map-items`,
    params: { mapId: id, type: "legislation" },
  });
  const { data: anti_corruptions } = useFetchData<any>({
    url: `map-items`,
    params: { mapId: id, type: "anti_corruption", relations: "logo" },
  });
  const { data: international_cooperations } = useFetchData<any>({
    url: `map-items`,
    params: { mapId: id, type: "international_cooperation", relations: "logo" },
  });
  const { data: indexes } = useFetchData<any>({
    url: `map-items`,
    params: { mapId: id, type: "index" },
  });
  const { data: national_cooperations } = useFetchData<any>({
    url: `map-items`,
    params: { mapId: id, type: "national_cooperation" },
  });

  return {
    legislations: legislations?.data,
    anti_corruptions: anti_corruptions?.data,
    international_cooperations: international_cooperations?.data,
    indexes: indexes?.data,
    national_cooperations: national_cooperations?.data,
  };
};
