import { SearchIcon } from "@heroicons/react/solid";

const SearchInput = ({ search, setSearch, isDarkmode }) => {
    function searchHandler(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="bg border-1 border-gray bg-none dark:bg-whiteDark rounded relative py-2 flex items-center">
            <SearchIcon className="h-5 mx-4 dark:text-white" />
            <input
                type="text"
                className="focus:outline-none bg-bgWhite flex-1 mr-4  dark:text-white"
                value={search}
                onChange={searchHandler}
                placeholder="Suchen"
            ></input>
        </div>
    );
};

export default SearchInput;
