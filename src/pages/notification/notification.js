import React, { useState, useEffect } from 'react';
import { getToken } from 'firebase/messaging'; 
import { app, db, messaging } from '../../firebase/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

function App() {
    const [token, setToken] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        // const fetchToken = async () => {
        //     try {
        //         const currentToken = await getToken(messaging);
        //         console.log(currentToken);
        //         setToken(currentToken);
        //     } catch (error) {
        //         console.error('Failed to get FCM token:', error);
        //     }
        // };

        // fetchToken();
        getTokenFromFirebase()
    }, []);
    
const getTokenFromFirebase=async()=>{
    const docsnap = await getDocs(collection(db, 'tokens'));
      const data = docsnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setToken(data[0].token)
}
    const sendNotification = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
            "token":token,
          "title": title,
          "body": body
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:8080/notification", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
    };

    return (
        <div className="App">
            <h1>Send Notification</h1>
            <div>
                <input type="text" value={token} readOnly placeholder="Device Token" />
            </div>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Notification Title" />
            </div>
            <div>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Notification Body" />
            </div>
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
}

export default App;
