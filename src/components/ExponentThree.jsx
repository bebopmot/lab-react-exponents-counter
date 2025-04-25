function ExponentThree({ counting }) {
  const result = Math.pow(counting, 3); // Compute the square of the count

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">
        {counting}² = <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default ExponentThree;