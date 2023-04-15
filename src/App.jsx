import { useEffect, useState } from 'react';

import { Header } from './components/header/Header';
import { Job } from './components/job/Job';
import { Filters } from './components/filters/Filters';

import jobs from './data/data.json';
import './App.css';

const initialFilters = {
  role: null,
  level: null,
  languages: [],
  tools: []
};

export function App() {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const hasFilters = filters.role || filters.level || filters.languages.length > 0 || filters.tools.length > 0;

  const onAddFilter = (type, filter) => {
    if (type === 'role' || type === 'level') {
      setFilters({ ...filters, [type]: filter });
      return;
    }

    if (filters[type].includes(filter)) return;

    setFilters({
      ...filters,
      [type]: [...filters[type], filter]
    });
  };

  const onRemoveFilter = (type, filterToRemove) => {
    if (type === 'role' || type === 'level') {
      setFilters({ ...filters, [type]: null });
      return;
    }

    setFilters({
      ...filters,
      [type]: filters[type].filter(filter => filter !== filterToRemove)
    });
  };

  const onClearFilters = () => {
    setFilters(initialFilters);
  };

  useEffect(() => {
    const newFilteredJobs = jobs.filter(job => {
      if (filters.role !== null && job.role !== filters.role) return false;

      if (filters.level !== null && job.level !== filters.level) return false;

      if (filters.languages.some(language => !job.languages.includes(language))) return false;

      if (filters.tools.some(tool => !job.tools.includes(tool))) return false;

      return true;
    });

    setFilteredJobs(newFilteredJobs);
  }, [filters]);

  return (
    <>
      <Header />

      <main>
        {hasFilters && (
          <div className="filters-container">
            <Filters filters={filters} onRemoveFilter={onRemoveFilter} onClearFilters={onClearFilters} />
          </div>
        )}

        <section className="jobs">
          {filteredJobs.map(job => (
            <Job key={job.id} job={job} onTagClick={onAddFilter} />
          ))}
        </section>
      </main>
    </>
  );
}
