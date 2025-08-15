window.PETSTAY_CONFIG = {
  AWS_REGION: 'us-east-1',

  COGNITO_USER_POOL_ID: 'us-east-1_NIgKNE21E',
  COGNITO_USER_POOL_CLIENT_ID: '7oer122k97spicni397gll1fuu',
  COGNITO_DOMAIN: "us-east-1nigkne21e.auth.us-east-1.amazoncognito.com",

  REDIRECT_SIGN_IN_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/admin-frontend/post-login.html",
  REDIRECT_SIGN_OUT_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/", // Works for / and /index.html
  REDIRECT_ADMIN_SIGN_IN_URL: "https://main.dwkruzbznfi9h.amplifyapp.com/admin-frontend/post-login.html",

  API_BASE_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com',

  // Booking APIs
  BOOKING_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/booking',  // Single booking details
  BOOKINGS_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/bookings', // All bookings
  BOOKING_STATUS_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/bookingStatus',
  ROOMS_AVAILABILITY_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/rooms/availability',
  NEW_BOOKING_API_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/newbooking',

  // Action endpoints
  CONFIRM_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/confirm',
  CANCEL_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/cancel',
  CHECKIN_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/checkin',
  CHECKOUT_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/checkout',
  RESTORE_BOOKING_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/restore',

  // Pet photo upload
  PET_PHOTO_UPLOAD_URL: 'https://5qqze0fvni.execute-api.us-east-1.amazonaws.com/upload-url',
  PET_PHOTO_PUBLIC_URL_BASE: 'https://petstayphotos.s3.amazonaws.com',
};

// Safety check: crash if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (typeof window.PETSTAY_CONFIG[key] === 'string' &&
      (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}"))) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}
