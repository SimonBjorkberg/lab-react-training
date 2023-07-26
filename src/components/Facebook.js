import data from '../data/berlin.json';
import { useState } from 'react';
import FacebookButtons from './facebook-components/FacebookButtons';
import FacebookProfiles from './profiles/FacebookProfiles';
import FacebookSort from './facebook-components/FacebookSort';
import FacebookSearch from './facebook-components/FacebookSearch';

const Facebook = () => {
  const [profiles, setProfiles] = useState(data);

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

  function showInfo(profile) {
    profile.showInfo === true
      ? (profile.showInfo = false)
      : (profile.showInfo = true);
    setProfiles([...profiles]);
  }

  function sort(e) {
    const sortValue = e.target.value;
    profiles.sort((a, b) => a[sortValue].localeCompare(b[sortValue]));
    setProfiles([...profiles]);
  }

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

  return (
    <div className="facebook">
      <FacebookButtons filter={filter} />
      <FacebookSort sort={sort} />
      <FacebookSearch search={search} />
      <FacebookProfiles profiles={profiles} showInfo={showInfo} />
    </div>
  );
};

export default Facebook;
