import PropTypes from "prop-types";
import './BlogCard.css';

function BlogCard({ title, content }) {
  return (
      <div className="blog-card-wrapper">
        <div className="blog-card">
        <div className="blog-card__content">
          <h3 className="blog-card__title">{title}</h3>
          <p className="blog-card__description">{content}</p>
        </div>
        <div className="blog-card__actions">
        {/*todo*/}
          <div className="blog-card__pref">{new Date(Date.now()).toString()}</div>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogCard;
