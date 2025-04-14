import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



// Your web app's Firebase configuration firebaseConfig goes here
// Copy the firebaseConfig object from your Firebase project settings
// const firebaseConfig = { ...... }


//Custom key from google firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVQHHbklihGMXZYq5VWQg9YbGjW4u6BuU",
  authDomain: "trialusers-b255d.firebaseapp.com",
  projectId: "trialusers-b255d",
  storageBucket: "trialusers-b255d.firebasestorage.app",
  messagingSenderId: "50254678042",
  appId: "1:50254678042:web:41469f27cbb391abe5a9a3"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
  
    provideFirebaseApp(() => initializeApp(firebaseConfig)), 
    provideFirestore(() => getFirestore()) //Not the lite version

    
  ]
};
