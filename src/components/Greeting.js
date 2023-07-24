const Greetings = (props) => {
  const { lang } = props;

  let welcome;

  switch (lang) {
    case 'de':
      welcome = 'Hallo';
      break;
    case 'en':
      welcome = 'Hello';
      break;
    case 'fr':
      welcome = 'Bonjour';
      break;
    case 'es':
      welcome = 'Hola';
      break;
    default:
      welcome = 'welcome';
  }

  return (
    <div className="greetings">
      <p className="my-5 border text-left border-black p-2 mx-2">
        {welcome} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
