import './Filters.css';

export function Filters({ filters, onRemoveFilter, onClearFilters }) {
  return (
    <section className="filters">
      <div className="filters-list">
        {filters.role && <Filter name={filters.role} onRemoveFilter={() => onRemoveFilter('role')} />}

        {filters.level && <Filter name={filters.level} onRemoveFilter={() => onRemoveFilter('level')} />}

        {filters.languages.map(languageFilter => (
          <Filter
            key={languageFilter}
            name={languageFilter}
            onRemoveFilter={() => onRemoveFilter('languages', languageFilter)}
          />
        ))}

        {filters.tools.map(toolFilter => (
          <Filter key={toolFilter} name={toolFilter} onRemoveFilter={() => onRemoveFilter('tools', toolFilter)} />
        ))}
      </div>

      <button className="clear-filters" onClick={onClearFilters}>
        Clear
      </button>
    </section>
  );
}

const Filter = ({ name, onRemoveFilter }) => (
  <div className="filter">
    <span className="filter-name">{name}</span>

    <button title={`Remove ${name} filter`} className="remove-filter" onClick={onRemoveFilter}>
      <img src="/assets/images/icon-remove.svg" alt="Remove Filter" />
    </button>
  </div>
);
