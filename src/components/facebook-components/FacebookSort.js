const FacebookSort = (props) => {
    const { sort } = props
    return ( <div className="sort mb-10">
    <h1>
        Sort via:
    </h1>
        <select onChange={(e) => sort(e)} className="py-2 px-5 rounded-sm">
            <option value="firstName">First name</option>
            <option value="lastName">Last name</option>
            <option value="country">Country</option>
        </select>
    </div> );
}
 
export default FacebookSort;