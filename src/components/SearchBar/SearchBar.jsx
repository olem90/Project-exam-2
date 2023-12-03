import { useEffect, useRef, useState } from "react";
import { SearchBarStyles } from "./SearchBar.styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({ venues, setFilteredVenues, filteredVenues }) => {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);

  useEffect(() => {
    function handleClickOutsideSearchBar(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchDropdownVisible(false);
      }
    }

    if (isSearchDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutsideSearchBar);
    }

    return () => {
      if (isSearchDropdownVisible) {
        document.removeEventListener("mousedown", handleClickOutsideSearchBar);
      }
    };
  }, [isSearchDropdownVisible]);

  const handleSearchChange = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearch(searchInput);

    const matchedVenues = searchInput
      ? venues.filter(
          (venue) =>
            venue.name.toLowerCase().includes(searchInput) ||
            venue.location.city.toLowerCase().includes(searchInput) ||
            venue.location.country.toLowerCase().includes(searchInput),
        )
      : venues;

    setFilteredVenues(matchedVenues);
    setIsSearchDropdownVisible(true);
  };

  return (
    <SearchBarStyles ref={searchRef}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search venues.."
        onFocus={() => setIsSearchDropdownVisible(true)}
      />
      <FontAwesomeIcon
        onClick={() => setIsSearchDropdownVisible(false)}
        className="faSearchIcon"
        icon={faSearch}
      />
      {search && isSearchDropdownVisible && venues.length > 0 ? (
        <div className="searchResults">
          {filteredVenues.map((venue) => (
            <Link
              className="searchBarLink"
              to={`/venue/${venue.id}`}
              key={venue.id}
            >
              {venue.name}
            </Link>
          ))}
        </div>
      ) : null}
    </SearchBarStyles>
  );
};
