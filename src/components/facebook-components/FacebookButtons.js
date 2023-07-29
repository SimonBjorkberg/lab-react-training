const FacebookButtons = (props) => {

    const { profiles, setProfiles } = props

    function filter(e) {
      const filterValue = e.target.value.toLowerCase();
      const arrayCopy = [...profiles];
      arrayCopy.forEach((profile) => {
        if (profile.country.toLowerCase() === filterValue) {
          profile.toggle = true;
        } else {
          profile.toggle = false;
        }
      });
      setProfiles(arrayCopy);
    }

  return (
    <div className="my-10 flex justify-between w-1/3 mx-auto bg-neutral-400 px-8 py-4">
      <button
        value={'None'}
        onClick={(e) => filter(e)}
        className="py-2 px-3 bg-blue-300 rounded hover:bg-blue-200"
      >
        None
      </button>
      <button
        value={'England'}
        onClick={(e) => filter(e)}
        className="py-2 px-3 bg-blue-300 rounded hover:bg-blue-200"
      >
        England
      </button>
      <button
        value={'USA'}
        onClick={(e) => filter(e)}
        className="py-2 px-3 bg-blue-300 rounded hover:bg-blue-200"
      >
        USA
      </button>
      <button
        value={'Sweden'}
        onClick={(e) => filter(e)}
        className="py-2 px-3 bg-blue-300 rounded hover:bg-blue-200"
      >
        Sweden
      </button>
      <button
        value={'Nigeria'}
        onClick={(e) => filter(e)}
        className="py-2 px-3 bg-blue-300 rounded hover:bg-blue-200"
      >
        Nigeria
      </button>
    </div>
  );
};

export default FacebookButtons;
