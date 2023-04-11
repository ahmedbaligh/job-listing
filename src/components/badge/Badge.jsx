import './Badge.css';

export const Badge = ({ type }) => <span className={`badge ${type}`}>{type === 'featured' ? 'Featured' : 'New!'}</span>;
