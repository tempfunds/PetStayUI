window.PETSTAY_CONFIG = {
  AWS_REGION: 'us-east-1',

  COGNITO_USER_POOL_ID: 'us-east-1_NIgKNE21E',
  COGNITO_USER_POOL_CLIENT_ID: '7oer122k97spicni397gll1fuu',
  COGNITO_DOMAIN: "us-east-1nigkne21e.auth.us-east-1.amazoncognito.com",

  REDIRECT_SIGN_IN_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/admin-frontend/post-login.html",
  REDIRECT_SIGN_OUT_URL: "https://https://main.dwkruzbznfi9h.amplifyapp.com/index.html",
  REDIRECT_ADMIN_SIGN_IN_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/admin-frontend/post-login.html",

  API_BASE_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default',
  BOOKING_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/booking',
  BOOKING_STATUS_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/bookingStatus',
  BOOKINGS_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/bookings',
  ROOMS_AVAILABILITY_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/rooms/availability',
  NEW_BOOKING_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/newbooking',
  CONFIRM_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/confirm',
  CANCEL_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/cancel',
  CHECKIN_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/checkin',
  CHECKOUT_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/checkout',
  RESTORE_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/restore',
  PET_PHOTO_UPLOAD_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/default/upload-url',
  PET_PHOTO_PUBLIC_URL_BASE: 'https://petstayphotos.s3.amazonaws.com',
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}

// window.PETSTAY_CONFIG = {
//   AWS_REGION: '{{AWS_REGION}}',  // e.g., 'us-east-1'
//   COGNITO_USER_POOL_ID: '{{COGNITO_USER_POOL_ID}}',
//   COGNITO_USER_POOL_CLIENT_ID: '{{COGNITO_USER_POOL_CLIENT_ID}}',
//   COGNITO_DOMAIN: '{{COGNITO_DOMAIN}}',  // e.g., 'yourdomain.auth.us-east-1.amazoncognito.com'

//   // Redirect after staff login (check-in page)
//   REDIRECT_SIGN_IN_URL: '{{REDIRECT_SIGN_IN_URL}}',  // e.g., 'https://yourdomain/checkin.html'

//   // Redirect after logout
//   REDIRECT_SIGN_OUT_URL: '{{REDIRECT_SIGN_OUT_URL}}',  // e.g., 'https://yourdomain/index.html'

//   // Redirect after admin login
//   REDIRECT_ADMIN_SIGN_IN_URL: '{{REDIRECT_ADMIN_SIGN_IN_URL}}',  // e.g., 'https://yourdomain/admin/post-login.html'

//   API_BASE_URL: '{{API_BASE_URL}}',
//   BOOKING_API_URL: '{{BOOKING_API_URL}}',
//   BOOKING_STATUS_API_URL: '{{BOOKING_STATUS_API_URL}}',
//   BOOKINGS_API_URL: '{{BOOKINGS_API_URL}}',
//   ROOMS_AVAILABILITY_API_URL: '{{ROOMS_AVAILABILITY_API_URL}}',
//   NEW_BOOKING_API_URL: '{{NEW_BOOKING_API_URL}}',
//   CONFIRM_BOOKING_URL: '{{CONFIRM_BOOKING_URL}}',
//   CANCEL_BOOKING_URL: '{{CANCEL_BOOKING_URL}}',
//   CHECKIN_BOOKING_URL: '{{CHECKIN_BOOKING_URL}}',
//   CHECKOUT_BOOKING_URL: '{{CHECKOUT_BOOKING_URL}}',
//   RESTORE_BOOKING_URL: '{{RESTORE_BOOKING_URL}}'
// };

// // Validate config: prevent accidental deployment with missing placeholders
// for (const key in window.PETSTAY_CONFIG) {
//   if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
//     throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
//   }
// }
