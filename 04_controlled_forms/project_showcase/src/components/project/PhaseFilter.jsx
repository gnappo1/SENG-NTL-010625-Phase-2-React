const PhaseFilter = ({ phaseSelected, handlePhaseSelection }) => {
  return (
    <div className="filter" onClick={handlePhaseSelection}>
      <button className={phaseSelected === "" ? "active" : ""}>All</button>
      <button className={phaseSelected === 5 ? "active" : ""}>Phase 5</button>
      <button className={phaseSelected === 4 ? "active" : ""}>Phase 4</button>
      <button className={phaseSelected === 3 ? "active" : ""}>Phase 3</button>
      <button className={phaseSelected === 2 ? "active" : ""}>Phase 2</button>
      <button className={phaseSelected === 1 ? "active" : ""}>Phase 1</button>
    </div>
  );
};

export default PhaseFilter;
