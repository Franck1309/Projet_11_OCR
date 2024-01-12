import React from 'react';

const Account = ({ title , number } ) => {
    return (
        <div>
             <section class="account">
            <div class="account-content-wrapper">
              <h3 class="account-title">{title}</h3>
              <p class="account-amount">{number}</p>
              <p class="account-amount-description">Available Balance</p>
            </div>
            <div class="account-content-wrapper cta">
              <button class="transaction-button">View transactions</button>
            </div>
          </section>
        </div>
    );
};

export default Account;