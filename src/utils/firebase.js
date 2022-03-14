import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApO2r77NqaJT3e80HOZdqXgwEKj9n_X4Y",
  authDomain: "mercante-ecommerce-48e41.firebaseapp.com",
  projectId: "mercante-ecommerce-48e41",
  storageBucket: "mercante-ecommerce-48e41.appspot.com",
  messagingSenderId: "700599675247",
  appId: "1:700599675247:web:beba7df612a863696aa09a",
  measurementId: "G-34NVZWE7KX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

