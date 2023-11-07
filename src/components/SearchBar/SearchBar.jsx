import { useEffect, useRef, useState } from "react";
import { SearchBarStyles } from "./SearchBar.styles";
import { Link } from "react-router-dom";

export const SearchBar = ({ venues, setFilteredVenues, filteredVenues }) => {
    const [search, setSearch] = useState("");
    const searchRef = useRef(null);

    useEffect(() => {
        function handleClickOutsideSearchBar(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setFilteredVenues(venues);
                setSearch("");
            } 
        }
        document.addEventListener("mousedown", handleClickOutsideSearchBar);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSearchBar);
        };
    }, [setFilteredVenues, venues]);

        const handleSearchChange = (event) => {
            const searchInput = event.target.value;
            setSearch(searchInput);
    
            const matchedVenues = searchInput 
                ? venues.filter((venue) => venue.name.toLowerCase().includes(searchInput.toLowerCase()))
                : venues;

                setFilteredVenues(matchedVenues);
        };

    return(
        <SearchBarStyles ref={searchRef}>
            <input type="text" 
            value={search}
            onChange={handleSearchChange}
            placeholder="Search venues.."
            />
            {search && venues.length > 0 ? (
                <div className="searchResults">
                {filteredVenues.map((venue) => (
                    <Link className="searchBarLink" to={`/venue/${venue.id}`} key={venue.id}>
                        { venue.name }
                    </Link>
                ))}
                </div>
        ) : null}
        </SearchBarStyles>
    )
}



