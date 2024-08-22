import React, { useEffect } from 'react';

const StripeBuyButton = () => {
  useEffect(() => {
    // Load the Stripe script
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1Pqc61AAJcNUvIAPUDj5wPnP"
      publishable-key="pk_test_51PqaTqAAJcNUvIAPhSKXrDvOpNKMO1VomCPIK9P2x4q1JZn1ImJCe35dLEZSSqnjdmV53gH58Fb4DF7cxQqWvYSS00DhLAWCn0"
    />
  );
};

export default StripeBuyButton;