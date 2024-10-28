"useer client";
import { usurState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
]);
export function BirthdayTranslator() {
  const [currentPhrase, setCurrentPhrase] = useState({
    lang: "english",
    phrase: "Happy Birthday",
  });
  const handleChangeLanguage = (newlang) => {
    setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });
  };
  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {currentPhrase.phrase}! ({currentPhrase.lang})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>

      <button onClick={() => handleChangeLanguage("german")}>German</button>

      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    </div>
  );
}
