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
    if (type === 'languages') {
      setFilters({
        ...filters,
        languages: [...filters.languages, filter]
      });
      return;
    }

    setFilters({
      ...filters,
      [type]: filter
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
            <Filters filters={filters} onClearFilters={onClearFilters} />
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
