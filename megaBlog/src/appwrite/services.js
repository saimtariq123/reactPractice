import { Client, Databases, ID, Query, Storage } from 'appwrite';
import config from '../config.js';

class AppwriteServices {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProject);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, userId, slug, image, status }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug,
        { title, content, userId, slug, image, status }
      );
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  async updatePost(slug, { title, content, userId, image, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug,
        { title, content, userId, image, status }
      );
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug
      );
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabase,
        config.appwriteCollection,
        slug
      );
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }

  async getAllPosts() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabase,
        config.appwriteCollection,
        [Query.equal('status', 'Active')]
      );
    } catch (error) {
      console.error('Error fetching all posts:', error);
      return [];
    }
  }

  async uploadImage(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const appwriteServices = new AppwriteServices();
export default appwriteServices;
