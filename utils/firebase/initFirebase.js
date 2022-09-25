import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // databaseURL: 'https:// ***** .firebaseio.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const storage = getStorage(app);
export const storageRoot = ref(storage);

const storageReference = ref(storage, 'productos/motores/BD850_LARGE.jpg');
// const storageReference = ref(storage, `productos/${category}/${ref}_${SIZES.small}.jpg`);

export const getImageUrl = (_storageRoot) =>
    getDownloadURL(_storageRoot)
        .then((_metadata) => _metadata)
        .catch((_err) => {
            console.log("Error: ", _err)
            throw new Error(_err);
        })