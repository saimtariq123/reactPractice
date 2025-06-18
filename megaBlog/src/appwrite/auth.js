import config from '../config/config.js';
import { Client, Account, ID } from 'appwrite';

class AppwriteAuth {
  constructor() {
    this.client = new Client();
    this.account = new Account(this.client);
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
  }

  async createAccount({email, password, name}) {
    try {
      const Account = await this.account.create(ID.unique(),email, password,name);
     if(Account) {
      return this.login({email, password});
    }
    else{
        throw new Error('Account creation failed'); 
    }
 }catch (error) {
      throw error;
    }
  }

    async login({email, password}) {
        try {
        const session = await this.account.createEmailPasswordSession(email, password);
        return session;
        } catch (error) {
        throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            throw error;
        }
        return null;
    }
}

const appwriteAuth = new AppwriteAuth();
export default appwriteAuth;