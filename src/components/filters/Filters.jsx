import './Filters.css';

export function Filters({ filters, onClearFilters }) {
  return (
    <section className="filters">
      {filters.role && <span>{filters.role}</span>}

      {filters.level && <span>{filters.level}</span>}

      {filters.languages.map(languageFilter => (
        <span key={languageFilter}>{languageFilter}</span>
      ))}

      <button className="clear-filters" onClick={onClearFilters}>
        Clear
      </button>
    </section>
  );
}
