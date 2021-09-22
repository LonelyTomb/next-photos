import {getDatabase, ref } from 'firebase/database';
import firebase from './index'

const database = getDatabase(firebase)
const dbRef = (url) =>  ref(database, url);

export {database, dbRef}