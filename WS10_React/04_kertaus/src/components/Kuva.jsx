/* eslint-disable react/prop-types */
const Kuva = (props) => {
  let posterImg = props.src;

  // Palautetaan kuvatägi. onError suoritetaan jos kuvan lataus ei onnistu
  return (
    <img
      src={posterImg}
      alt="Poster"
      className="img-thumbnail"
      /* onError={addDefaultSrc} */
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://openvirtualworlds.org/omeka/files/fullsize/1/30/movie-big.jpg";
      }}
      width="50%"
    />
  );
};

export default Kuva;
