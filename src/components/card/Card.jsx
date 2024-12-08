import "./card.scss";

export const Card = ({ name, about, image, profile_link, handleClick }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{about}</p>
        <div className="btn btn-group w-100">
          <a href={profile_link} className="btn btn-primary">
            Visit website
          </a>
          <button
            className="btn btn-secondary"
            onClick={() => handleClick(name)}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};
