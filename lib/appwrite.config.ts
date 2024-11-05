import * as sdk from 'node-appwrite'

export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_ID,
    DOCTOR_ID,
    APPOINTMENT_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,



}= process.env

const client = new sdk.Client()

client
   .setEndpoint(ENDPOINT!)
   .setProject(PROJECT_ID!)
   .setProject(API_KEY!)

   export const databases = new sdk.Databases(client);
   export const storage = new sdk.Storage(client);
   export const messaging = new sdk.Messaging(client)
   export const users = new sdk.Users(client)

