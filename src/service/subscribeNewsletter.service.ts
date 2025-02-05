import axios from "axios";

class NewsLetterService {
  async subscribeForNewsLetter(email: string) {
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "subscribe-newsletter?email=" + email
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
export default new NewsLetterService();
