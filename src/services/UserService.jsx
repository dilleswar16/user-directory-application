import config from '../config/config'
import axios from 'axios';

class UserService {
  /**
   * Fetch all users
   */
  async getAllUsers() {
    try {
      const response = await axios.get(`${config.API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  /**
   * Fetch user by ID
   * @param {number} userId
   */
  async getUserById(userId) {
    try {
      const response = await axios.get(`${config.API_URL}/id/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Fetch user by Role
   * @param {string} role
   */
  async getUsersByRole(role) {
    try {
      const response = await axios.get(`${config.API_URL}/role/${role}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  }
}

export default new UserService();