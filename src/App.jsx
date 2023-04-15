import { useState } from 'react';

import { Header } from './components/header/Header';
import { Job } from './components/job/Job';
import { Filters } from './components/filters/Filters';

import jobs from './data/data.json';
import './App.css';

const initialFilters = {
  role: null,
  level: null,
  languages: []
};

export function App() {
  const [filters, setFilters] = useState(initialFilters);

  const hasFilters = filters.role || filters.level || filters.languages.length > 0;

  const onAddFilter = (type, filter) => {
    if (type === 'role' || type === 'level') {
      setFilters({ ...filters, [type]: filter });
      return;
    }

    if (filters.languages.includes(filter)) return;

    setFilters({
      ...filters,
      languages: [...filters.languages, filter]
    });
  };

  const onRemoveFilter = (type, filterToRemove) => {
    if (type === 'role' || type === 'level') {
      setFilters({ ...filters, [type]: null });
      return;
    }

    setFilters({
      ...filters,
      languages: filters.languages.filter(filter => filter !== filterToRemove)
    });
  };

  const onClearFilters = () => {
    setFilters(initialFilters);
  };

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
          {jobs.map(job => (
            <Job key={job.id} job={job} onTagClick={onAddFilter} />
          ))}
        </section>
      </main>
    </>
  );
}
