const Account = ({ title, number }) => {
  return (
    <div className="main bg-dark">
      <section className="account">
        <h2 className="sr-only">Accounts</h2>
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{number}</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
};

export default Account;
