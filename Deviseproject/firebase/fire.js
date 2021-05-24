   
import * as firebase from 'firebase';


    const firebaseConfig = {
        apiKey: "AIzaSyDOMXkQlREp_8AL4SuECvir7N-mMugFroc",
        authDomain: "banque-devise.firebaseapp.com",
        projectId: "banque-devise",
        storageBucket: "banque-devise.appspot.com",
        messagingSenderId: "673034596898",
        appId: "1:673034596898:web:08c3e5c6ff96c3ccfd107b",
        measurementId: "G-BYE21DEM2F"
      };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;