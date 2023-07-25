import profiles from '../data/berlin.json';

const Facebook = () => {
  return (
    <div className="facebook">
      {profiles.map((profile) => {
        return (
          <div className="profile flex text-left border border-black p-1 w-[500px] mx-auto mb-2">
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
