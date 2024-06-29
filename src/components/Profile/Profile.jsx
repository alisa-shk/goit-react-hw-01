import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageCont}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.title}>{name}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
      </div>
      <ul className={s.statsList}>
        <li className={s.statsListItem}>
          <span>Followers</span>
          <span className={s.statsCount}>{stats.followers}</span>
        </li>
        <li className={s.statsListItem}>
          <span>Views</span>
          <span className={s.statsCount}>{stats.views}</span>
        </li>
        <li className={s.statsListItem}>
          <span>Likes</span>
          <span className={s.statsCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
