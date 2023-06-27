import { Client , Databases} from 'appwrite';
const client = new Client();

export const PROJECT_ID = '6499f2efd3ddbf4c50d9';
export const DATABASE_ID = "6499f3a258f8cb73f1b6";
export const COLLECTION_ID_MESSAGES = '6499f3b12c4bb743e53c';

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6499f2efd3ddbf4c50d9');
export const databases = new Databases(client);
export default client; 