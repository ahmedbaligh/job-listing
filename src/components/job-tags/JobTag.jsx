import './JobTag.css';

export const JobTag = ({ name, onTagClick }) => (
  <button className="job-tag" onClick={onTagClick}>
    {name}
  </button>
);
