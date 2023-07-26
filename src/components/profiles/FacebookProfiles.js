import { v4 as uuidv4 } from 'uuid';

const FacebookProfiles = (props) => {
  const { profiles, showInfo } = props;

  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div
            className={`profile flex text-left border border-black p-1 ${profile.showInfo ? 'w-[350px]' : 'w-[122px]'} mx-auto mb-2 ${
              profile.toggle && 'bg-blue-300'
            }`}
            key={uuidv4()}
            onClick={() => showInfo(profile)}
          >
            <img src={profile.img} alt="" className="w-28" />
            {profile.showInfo && (
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
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FacebookProfiles;
