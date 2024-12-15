import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { createBookDTO } from './dto/create-book-dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBook() {
    return this.bookService.getBooks();
  }

  @Post()
  createBook(@Body() body: createBookDTO) {
    return this.bookService.createBook(body);
  }
  @Get(`:id`)
  getBookById(@Param(`id`) id: string) {
    return this.bookService.getBookByID(+id);
  }
  @Put(`:id`)
  updateBook(@Param(`id`) id: string, @Body() body: createBookDTO) {
    return this.bookService.updateBook(+id, body);
  }
  @Delete(`:id`)
  deleteBook(@Param(`id`) id: string) {
    return this.bookService.deleteBook(+id);
  }
}
