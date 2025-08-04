window.PETSTAY_CONFIG = {
  AWS_REGION: 'us-east-1',

  COGNITO_USER_POOL_ID: 'us-east-1_NIgKNE21E',
  COGNITO_USER_POOL_CLIENT_ID: '7oer122k97spicni397gll1fuu',
  COGNITO_DOMAIN: "us-east-1nigkne21e.auth.us-east-1.amazoncognito.com",

  REDIRECT_SIGN_IN_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/admin-frontend/post-login.html",
  REDIRECT_SIGN_OUT_URL: "https://https://main.dwkruzbznfi9h.amplifyapp.com/index.html",
  REDIRECT_ADMIN_SIGN_IN_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/admin-frontend/post-login.html",

  BOOKINGS_API_URL: "{{BOOKINGS_API_URL}}",
  ROOMS_AVAILABILITY_API_URL: "{{ROOMS_AVAILABILITY_API_URL}}",
  NEW_BOOKING_API_URL: "{{NEW_BOOKING_API_URL}}",
  CHECKIN_API_URL: "{{CHECKIN_API_URL}}"
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}
