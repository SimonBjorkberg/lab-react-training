import { useState } from 'react';
const SignupPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const [user, setUser] = useState({});

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);

  function handleForm(e) {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      nationality: nationality,
    };
    setUser(newUser);
  }

  let greeting = '';

  switch (user.nationality) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    default:
      break;
  }

  return (
    <div className="signup my-20">
      <form
        onSubmit={(e) => handleForm(e)}
        className="flex flex-col w-96 mx-auto"
      >
        <input
          onChange={(e) => handleEmail(e)}
          type="email"
          placeholder="Email..."
          className="w-full border rounded-md mb-3 px-2 py-2"
        />
        <input
          onChange={(e) => handlePassword(e)}
          type="password"
          placeholder="********"
          className="w-full border rounded-md mb-3 px-2 py-2"
        />
        <select
          onChange={(e) => handleNationality(e)}
          className="w-2/3 mx-auto mb-3 px-2 py-2 rounded-md"
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button
          type="submit"
          className="bg-blue-400 w-1/3 mx-auto py-2 rounded-sm hover:bg-blue-300"
        >
          Sign Up
        </button>
      </form>

      {user.email !== undefined && <div className='mt-5 bg-neutral-300 w-96 py-3 rounded-xl border border-black mx-auto'>
        <h1>{greeting}</h1>
        <p>{user.email}</p>
      </div>}
    </div>
  );
};

export default SignupPage;
