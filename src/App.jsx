import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Header } from './components/header/Header';
import { Job } from './components/job/Job';
import { Filters } from './components/filters/Filters';

import jobs from './data/data.json';
import './App.css';

export function App() {
  const filters = useSelector(state => state.filters);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const hasFilters = filters.role || filters.level || filters.languages.length > 0 || filters.tools.length > 0;

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

      <main className={hasFilters ? 'with-filters' : ''}>
        {hasFilters && (
          <div className="filters-container">
            <Filters />
          </div>
        )}

        <section className="jobs">
          {filteredJobs.map(job => (
            <Job key={job.id} job={job} />
          ))}
        </section>
      </main>
    </>
  );
}
