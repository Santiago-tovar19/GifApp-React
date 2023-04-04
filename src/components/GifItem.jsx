export const GifItem = ({ title, url, id }) => {
  return (
    <div className="container-card">
      <div className="container-card_img">
        <img src={url} alt={title} className="img.container-card__img" />
      </div>
      <div className="container-card_text">
        <p className="container-card__text">{title}</p>
      </div>
    </div>
  );
};
