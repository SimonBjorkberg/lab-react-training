import data from '../data/berlin.json';
import { useState } from 'react';
import FacebookButtons from './facebook-components/FacebookButtons';
import FacebookProfiles from './facebook-components/FacebookProfiles';
import FacebookSort from './facebook-components/FacebookSort';
import FacebookSearch from './facebook-components/FacebookSearch';

const Facebook = () => {
  const [profiles, setProfiles] = useState(data);

  return (
    <div className="facebook">
      <FacebookButtons profiles={profiles} setProfiles={setProfiles} />
      <FacebookSort profiles={profiles} setProfiles={setProfiles} />
      <FacebookSearch data={data} setProfiles={setProfiles} />
      <FacebookProfiles profiles={profiles} setProfiles={setProfiles} />
    </div>
  );
};

export default Facebook;
