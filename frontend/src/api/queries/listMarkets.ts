import useAxios from "#/hooks/useAxios";
import { Market, QueryHook } from "#/types";

import { QueryKey, useQuery } from "@tanstack/react-query";

const listMarkets: QueryHook<Market[]> = (options) => {
  const axios = useAxios();

  return useQuery(
    ["markets"] as QueryKey,
    () => axios.get<Market[]>("markets/").then(({ data: markets }) => markets),
    options,
  );
};

export default listMarkets;
