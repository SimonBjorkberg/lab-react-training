const FacebookSearch = (props) => {

    const { search } = props

    return ( <div className="search mb-10">
        <input type="text" onChange={(e) => search(e)} className="border-2 rounded-sm border-black"
        />
    </div> );
}
 
export default FacebookSearch;