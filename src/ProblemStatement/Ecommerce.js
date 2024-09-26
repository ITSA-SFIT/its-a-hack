const ECproblemStatements = [
  {
    statementId: "EC1",
    problemStatement:
      "E-commerce is booming, and providing a seamless shopping experience is key to success. Your challenge is to build a fully functional E-commerce Website that allows users to browse products, add them to a shopping cart, and make secure payments.",
    exampleFeatures: [
      "Product Browsing: Users should be able to browse products by categories and view product details (price, description, images).",
      "Secure Checkout: Implement a simple checkout process where users can enter shipping information and make payments using a secure payment gateway (e.g., Stripe or PayPal).",
      "User Profiles: Allow users to create accounts to save their order history, shipping details, and payment preferences.",
      "Order Confirmation: Once a payment is completed, send a confirmation email to the user with the order details and receipt.",
    ],
  },
  {
    statementId: "EC2",
    problemStatement:
      "Mobile shopping experiences need to be fast and seamless for users. Your challenge is to develop a Mobile Shopping Assistant App that helps users find the best deals, compare products, and manage their shopping lists in one place.",
    exampleFeatures: [
      "Price Comparison: Users can compare prices for a product across different e-commerce platforms in real time.",
      "Deal Alerts: Set up alerts for price drops or special deals on selected products.",
      "Shopping List Management: Users can create, manage, and share shopping lists with friends or family.",
      "Offline Mode: Users can add items to their cart and shopping list even when they are offline, and sync data when they go online.",
    ],
  },
  {
    statementId: "EC3",
    problemStatement:
      "E-commerce platforms often struggle to deliver personalized shopping experiences. Your challenge is to build an AI-powered Product Recommendation System that delivers personalized suggestions based on user behavior, preferences, and previous purchases.",
    exampleFeatures: [
      "User Behavior Analysis: Use machine learning to analyze user activity (searches, clicks, and purchases) to tailor product recommendations.",
      "Collaborative Filtering: Recommend products based on the preferences of similar users, using collaborative filtering techniques.",
      "Dynamic Recommendations: Continuously update recommendations as users browse or interact with the platform.",
      "Explainability: Provide reasons behind recommendations (e.g., 'You bought X, so we think you'll like Y').",
    ],
  },
  {
    statementId: "EC4",
    problemStatement:
      "With increasing concerns around data security and transaction transparency, there is a need for a secure e-commerce platform. Your challenge is to create a Blockchain-Powered E-commerce Platform that ensures data integrity and secure transactions.",
    exampleFeatures: [
      "Blockchain Integration: Use blockchain to record transactions securely and transparently, ensuring data integrity.",
      "Smart Contracts: Implement smart contracts for automated transaction validation and contract execution between buyers and sellers.",
      "Product Provenance: Leverage blockchain to track and display the provenance of products, ensuring transparency in the supply chain.",
      "Security Features: Implement multi-factor authentication and encryption for secure user accounts and transactions.",
    ],
  },
];
export default ECproblemStatements;
