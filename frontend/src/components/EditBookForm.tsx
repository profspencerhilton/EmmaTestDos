import { Book } from '../types/book';
import { useState } from 'react';
import { updateBook } from '../api/BooksAPI';

interface EditBookFormProps {
  book: Book;
  onSuccess: () => void;
  onCancel: () => void;
}

// Create a new Book based on form data
// Form data is what is passed into book
const EditBookForm = ({ book, onSuccess, onCancel }: EditBookFormProps) => {
  const [formData, setFormData] = useState<Book>({ ...book });

  //  update the form as changes are made
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   Process form submission, prevent it from reloading
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBook(formData.bookID, formData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new book</h2>
      <label>
        Book Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Book Author
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Book Publisher
        <input
          type="text"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Book ISBN
        <input
          type="text"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Book Classification
        <input
          type="text"
          name="classification"
          value={formData.classification}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Book Category
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Page Count
        <input
          type="number"
          name="pageCount"
          value={formData.pageCount}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Price
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Save Book</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditBookForm;
