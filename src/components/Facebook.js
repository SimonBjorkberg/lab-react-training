import { v4 as uuidv4 } from 'uuid';
import data from '../data/berlin.json';
import { useState } from 'react';

const Facebook = () => {
  const [profiles, setProfiles] = useState(data);

  function filter(e) {
    setProfiles(data)
    const filterValue = e.target.value.toLowerCase();
    const arrayCopy = [...data];
    arrayCopy.forEach((profile) => {
      if (profile.country.toLowerCase() === filterValue) {
        profile.toggle = true;
      }
      else {
        profile.toggle = false;
      }
    });
    setProfiles(arrayCopy);
  }

  return (
    <div className="facebook">
      <div className="my-10 flex justify-between w-1/3 mx-auto bg-neutral-400 px-8 py-4">
      <button value={'All'} onClick={(e) => filter(e)} className='py-2 px-3 bg-blue-300 rounded hover:bg-blue-200'>
          All
        </button>
        <button value={'England'} onClick={(e) => filter(e)} className='py-2 px-3 bg-blue-300 rounded hover:bg-blue-200'>
          England
        </button>
        <button value={'USA'} onClick={(e) => filter(e)} className='py-2 px-3 bg-blue-300 rounded hover:bg-blue-200'>
          USA
        </button>
        <button value={'Sweden'} onClick={(e) => filter(e)} className='py-2 px-3 bg-blue-300 rounded hover:bg-blue-200'>
          Sweden
        </button>
        <button value={'Nigeria'} onClick={(e) => filter(e)} className='py-2 px-3 bg-blue-300 rounded hover:bg-blue-200'>
          Nigeria
        </button>
      </div>

      {profiles.map((profile) => {
        return (
          <div
            className={`profile flex text-left border border-black p-1 w-[500px] mx-auto mb-2 ${
              profile.toggle && 'bg-blue-300'
            }`}
            key={uuidv4()}
          >
            <img src={profile.img} alt="" className="w-28" />
            <div className="ml-5">
              <p>
                <span className="font-bold">First name: </span>
                {profile.firstName}
              </p>
              <p>
                <span className="font-bold">Last name: </span>
                {profile.lastName}
              </p>
              <p>
                <span className="font-bold">Country: </span>
                {profile.country}
              </p>
              <p>
                <span className="font-bold">Type: </span>
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
