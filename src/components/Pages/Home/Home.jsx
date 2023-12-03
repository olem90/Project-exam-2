import { HomeStyles } from "./Home.styles";
import VenueCards from "../../VenueCards/VenueCards";
import { SearchBar } from "../../SearchBar/SearchBar";
import { useState, useEffect } from "react";

const venuesUrl = "https://api.noroff.dev/api/v1/holidaze/venues";

export const Home = () => {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function GetVenues() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(venuesUrl);
        const json = await response.json();
        setVenues(json);
        console.log("Home Venues:", json);
        setIsLoading(false);

      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      }
    }
    GetVenues();
  }, []);

  useEffect(() => {
    if (search) {
      setFilteredVenues(
        venues.filter((venue) =>
          venue.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      setFilteredVenues(venues);
    }
  }, [search, venues]);

  if (isLoading) {
    return <div>Loading venues...</div>;
  }

  if (isError) {
    return <div>Error loading venues...</div>;
  }

  return (
    <HomeStyles>
      <SearchBar
        filteredVenues={filteredVenues}
        setFilteredVenues={setFilteredVenues}
        venues={venues}
      />
      <VenueCards
        isLoading={isLoading}
        venues={filteredVenues}
        filteredVenues={filteredVenues}
        isError={isError}
      />
    </HomeStyles>
  );
};
