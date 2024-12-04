import "./card.scss";

export const Card = ({ name, about, image, profile_link, handleClick }) => {
  return (
    <div class="card">
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{about}</p>
        <div className="btn btn-group w-100">
          <a href={profile_link} class="btn btn-primary">
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
