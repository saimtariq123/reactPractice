const config = {
appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
appwriteProject: String(import.meta.env.VITE_APPWRITE_PROJECT), 
appwriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE),
appwriteCollection: String(import.meta.env.VITE_APPWRITE_COLLECTION),
apwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config;