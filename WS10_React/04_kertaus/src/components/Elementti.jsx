const user = {
  firstName: "Full",
  lastName: "Stack",
  avatarUrl: "https://cdn.sstatic.net/Sites/stackoverflow/img/captcha.svg",
  linkki: "https://canvas.laurea.fi/courses/6307",
};

/* Luodaan Elementti komponentti, jota kutsutaan App komponentista. Komponentti käyttää edellä määriteltyä user-muuttujaa*/
const Elementti = () => {
  return (
    <div>
      <h2>
        {user.firstName}
        {user.lastName}
      </h2>
      <a href={user.linkki} target="_blank" rel="noreferrer">
        <img src={user.avatarUrl} alt="Kuvalinkki rikki..." />
      </a>
    </div>
  );
};

export default Elementti;
