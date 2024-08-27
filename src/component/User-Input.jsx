export default function UserInput({ OnChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              OnChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              OnChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              OnChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration (Year)</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => OnChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
