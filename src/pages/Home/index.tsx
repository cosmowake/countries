import { useLayoutEffect, useState } from "react";
import { Country } from "../../types/country.type.ts";
import httpClient from "../../axios.ts";

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useLayoutEffect(() => {
    httpClient.get<Country[]>("/all").then(({ data }) => {
      setCountries(data);
    });
  }, []);

  return <div>countries length: {countries.length}</div>;
};

export default HomePage;
