import { Header } from './components/header/Header';
import { Job } from './components/job/Job';

import jobs from './data/data.json';
import './App.css';

export function App() {
  return (
    <>
      <Header />

      <main>
        <section className="jobs">
          {jobs.map(job => (
            <Job key={job.id} job={job} />
          ))}
        </section>
      </main>
    </>
  );
}
