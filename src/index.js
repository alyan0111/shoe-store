import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store'; // Import the Redux store
import App from './App'; // Main component of your application
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase/firebase';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const root = ReactDOM.createRoot(document.getElementById('root'));

async function requestPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Initialize Firestore
      const db = getFirestore();

      // Get the existing token if it exists
      const existingTokenQuery = await collection(db, 'tokens');
      const existingTokenSnapshot = await getDocs(existingTokenQuery);
      const existingTokens = existingTokenSnapshot.docs.map(doc => doc.data().token);

      const token = await getToken(messaging, { vapidKey: 'BLUiyoSr-spdauEA2FRZKWXTbGS8VdnbvAmjpAnFXHO4NHC-NTC3SQY7q6bzD5vVy9Y6ZxUt2kKnVGncooQ3uqs' });

      if (!existingTokens.includes(token)) {
        console.log('New token generated', token);

        // Add the new token to Firestore
        await addDoc(collection(db, "tokens"), {
          token: token,
          timestamp: new Date()
        });

        console.log('Token added to Firebase collection');
      } else {
        console.log('Token already exists in Firebase collection');
      }
    } else if (permission === 'denied') {
      console.log('Notification permission denied');
    }
  } catch (error) {
    console.error('Failed to request notification permission:', error);
  }
}

// Call requestPermission to prompt the user for permission
requestPermission().then(() => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
