export const StepLog = ({ stepLog }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <ul className="text-sm">
          {stepLog.map((step, stepindex) => (
            <li key={stepindex}>
              <small>{step}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
