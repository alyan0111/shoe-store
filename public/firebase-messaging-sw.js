// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  // Firebase configuration
  apiKey: "AIzaSyCn4L6PZXYWGTVdTpu33R8gxJfReuZDpfA",
    authDomain: "shoe-store-b96.firebaseapp.com",
    projectId: "shoe-store-b96",
    storageBucket: "shoe-store-b96.appspot.com",
    messagingSenderId: "889385484485",
    appId: "1:889385484485:web:7e0d5f17d4eabe3a9870ac",
    measurementId: "G-LZH9DCDX1L"
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