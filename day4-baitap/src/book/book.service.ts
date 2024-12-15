import { Injectable } from '@nestjs/common';
import { createBookDTO } from './dto/create-book-dto';
import { log } from 'console';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  publishedYear: number;
  createdAt: Date;
  updatedAt: Date;
}

let currentID = 1; // de su dung
@Injectable()
export class BookService {
  private books: Book[] = [
    {
      id: currentID,
      title: 'book1',
      author: 'book1',
      description: 'book1',
      publishedYear: 2024,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getBooks() {
    return this.books;
  }

  createBook(body: createBookDTO) {
    const newBook: Book = {
      id: ++currentID,
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.books.push(newBook);
    // currentID++;
    // console.log(currentID);

    return this.books;
  }
  getBookByID(id: number) {
    const value = this.books.find((item) => item.id === id);
    if (!value) {
      console.log('ko tijf thay sach : ', value);
      throw new Error(`ko thay book co ${id}`);
    }
    return value;
  }
  updateBook(id: number, body: createBookDTO): Book {
    // Dùng reduce để duyệt qua mảng sách
    const updatedBooks = this.books.reduce((acc, item) => {
      if (item.id === id) {
        // Nếu tìm thấy sách có id khớp, cập nhật sách đó và thêm vào acc
        acc.push({
          ...item,
          ...body,
          updatedAt: new Date(), // Cập nhật thời gian sửa đổi
        });
      } else {
        // Nếu không phải sách cần sửa, giữ nguyên phần tử
        acc.push(item);
      }
      return acc;
    }, []);

    const updatedBook = updatedBooks.find((item) => item.id === id);
    if (!updatedBook) {
      console.log('Không tìm thấy sách với id =', id);
      throw new Error(`Không tìm thấy sách có id = ${id}`);
    }

    // Cập nhật lại mảng books với mảng mới đã thay đổi
    this.books = updatedBooks;

    // Trả về sách đã được cập nhật
    return updatedBook;
  }

  //   updateBook(id: number, body: createBookDTO): Book {
  //     const index = this.books.findIndex((item) => item.id === id);

  //     // Kiểm tra xem sách có tồn tại không
  //     if (index === -1) {
  //       console.log('ko tim thay sach co id ', id);
  //       throw new Error(`ko tim thay sach co id = ${id}`);
  //     }
  //     const updatedBook = {
  //       ...this.books[index], // Giữ nguyên dữ liệu cũ
  //       ...body, // Ghi đè dữ liệu mới từ body
  //       updatedAt: new Date(), // Cập nhật thời gian chỉnh sửa
  //     };

  //     this.books[index] = updatedBook;

  //     return this.books[index];
  //   }

  deleteBook(id: number) {
    const deleteCurrnetBook = this.books.find((item) => item.id === id);

    if (!deleteCurrnetBook) {
      console.log('ko tuim thay');
      throw new Error(`ko tim thay sach co id ${id} de xoa`);
    }

    // xoa sach
    this.books = this.books.filter((item) => item.id !== id);
    return deleteCurrnetBook;
  }
}
