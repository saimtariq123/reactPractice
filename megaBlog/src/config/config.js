const config = {
appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
appwriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE),
appwriteCollection: String(import.meta.env.VITE_APPWRITE_COLLECTION),
appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config;