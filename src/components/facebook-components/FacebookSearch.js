const FacebookSearch = (props) => {

    const { data, setProfiles } = props;

    function search(e) {
        const searchValue = e.target.value.toLowerCase();
        console.log(searchValue);
    
        const searchArray = data.filter((profile) => {
          return (
            profile.firstName.toLowerCase().includes(searchValue) ||
            profile.lastName.toLowerCase().includes(searchValue) ||
            profile.country.toLowerCase().includes(searchValue)
          );
        });
        setProfiles(searchArray);
      }

    return ( <div className="search mb-10">
        <input type="text" placeholder="Search..." onChange={(e) => search(e)} className="border rounded-sm px-2 py-1"
        />
    </div> );
}
 
export default FacebookSearch;