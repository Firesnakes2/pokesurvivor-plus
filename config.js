/* ============ config.js — YOUR OWN SERVER (optional) ============
 *
 * Leave this as `null` and the game runs WITHOUT a server: progress is saved
 * in the browser, no accounts, no friends, no co-op, no leaderboard.
 *
 * Paste YOUR OWN free Firebase config here and your copy of the game gets
 * accounts, friends, co-op with your friends and a leaderboard, all on YOUR
 * free Firebase project. Step-by-step guide: SERVER_SETUP.md
 *
 * These values are NOT secret: Firebase is designed to put them in a web page.
 * What protects your players' data are the security rules (SERVER_SETUP.md, step 4 and 5).
 *
 * It must look like this (keep the quotes and the commas):
 *
 * window.PS_FIREBASE = {
 *   apiKey: 'AIza...',
 *   authDomain: 'your-project.firebaseapp.com',
 *   projectId: 'your-project',
 *   storageBucket: 'your-project.firebasestorage.app',
 *   messagingSenderId: '1234567890',
 *   appId: '1:1234567890:web:abc123',
 *   databaseURL: 'https://your-project-default-rtdb.europe-west1.firebasedatabase.app'
 * };
 */
window.PS_FIREBASE = {

  apiKey: "AIzaSyCn4DFhwe3hlS1Tf-4tjXR_2Oz0FokSJPA",

  authDomain: "pokesurvivors-pg.firebaseapp.com",

  projectId: "pokesurvivors-pg",

  storageBucket: "pokesurvivors-pg.firebasestorage.app",

  messagingSenderId: "24171309578",

  appId: "1:24171309578:web:681676536528a5f3e88df3",

  measurementId: "G-G96MJRK75D",

  databaseURL: 'https://pokesurvivors-pg-default-rtdb.firebaseio.com/'
};
