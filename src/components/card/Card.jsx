import "./card.scss";

export const Card = ({ name, about, image, profile_link }) => {
  return (
    <div class="card">
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{about}</p>
        <a href={profile_link} class="btn btn-primary">
          Visit website
        </a>
      </div>
    </div>
  );
};
