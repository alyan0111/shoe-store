// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  // Firebase configuration
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Subscribe to messages when service worker is activated
self.addEventListener('activate', async () => {
    try {
      const token = await getToken(messaging);
      console.log('Service worker activated, token:', token);
    } catch (error) {
      console.error('Service worker activation failed:', error);
    }
  });
  
  // Handle background messages
  onMessage(messaging, (payload) => {
    console.log('Received background message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
    
    // Display notification
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

    // Handle foreground messages
messaging.onMessage((payload) => {
  console.log('Received foreground message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  // Display notification
  new Notification(notificationTitle, notificationOptions);
});
