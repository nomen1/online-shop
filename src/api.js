import axios from "axios";

export const booksAPI = {
  getBooks() {
    return axios.get("https://nomen1.github.io/online-shop/books.json");
  }
};
