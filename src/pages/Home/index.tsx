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

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <span>{country.name.official}</span>{" "}
          {!!country.coatOfArms.png && (
            <img src={country.coatOfArms.png} alt="coat of arms" width={100} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
