import { JobTag } from '../job-tags/JobTag';
import { Badge } from '../badge/Badge';

import './Job.css';

export function Job({ job, onTagClick }) {
  return (
    <div className={`job ${job.featured ? 'featured' : ''}`}>
      <img className="company-logo" src={`/assets/${job.logo}`} alt={job.company} />

      <div className="job-details">
        <div className="extra-info">
          <h3 className="company-name">{job.company}</h3>

          {job.new && <Badge type="new" />}

          {job.featured && <Badge type="featured" />}
        </div>

        <h2 className="position-title">{job.position}</h2>

        <div className="job-info">
          <span>{job.postedAt}</span>

          {'•'}

          <p>{job.contract}</p>

          {'•'}

          <p>{job.location}</p>
        </div>
      </div>

      <div className="job-tags">
        <JobTag name={job.role} onTagClick={() => onTagClick('role', job.role)} />

        <JobTag name={job.level} onTagClick={() => onTagClick('level', job.level)} />

        {job.languages.map(language => (
          <JobTag
            key={`${job.company}-${language}`}
            name={language}
            onTagClick={() => onTagClick('languages', language)}
          />
        ))}

        {job.tools.map(tool => (
          <JobTag key={`${job.id}-${tool}`} name={tool} onTagClick={() => onTagClick('tools', tool)} />
        ))}
      </div>
    </div>
  );
}
