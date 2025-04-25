function ExponentTwo({ counting }) {
  const result = Math.pow(counting, 2); // Compute the square of the count

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {counting}² = <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default ExponentTwo;