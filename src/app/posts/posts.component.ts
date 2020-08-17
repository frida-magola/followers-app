import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.service.getAll().subscribe((response) => {
      this.posts = response;

      // console.log(this.posts);
    });
  }

  // tslint:disable-next-line: typedef
  createPost(inputTitle: HTMLInputElement) {
    const post = { title: inputTitle.value };
    inputTitle.value = '';
    this.service.create(post).subscribe(
      (response) => {
        // tslint:disable-next-line: no-string-literal
        post['id'] = response['id'];
        // this.posts.push(post); // add element at the end of the array
        this.posts.splice(0, 0, post); // element at the begining of the array
        // console.log(response);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadInput) {
          // ex for the form handle error
          // this.form.setErrors(error.originalError);
          // console.log('this post has already exist');
          // tslint:disable-next-line: curly
        } else throw error;
      }
    );
  }

  // tslint:disable-next-line: typedef
  updatePost(post) {
    // patch update specific element and send only the specific element
    this.service.update(post).subscribe((response) => console.log(response)); // ex.

    // put sent the entire element object
    // this.http.put(this.url, JSON.stringify(post));
  }

  // tslint:disable-next-line: typedef
  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    // tslint:disable-next-line: deprecation
    this.service.delete(post.id).subscribe(
      null,
      // (response) => {
      //   let index = this.posts.indexOf(post);
      //   this.posts.splice(index, 1);
      //   // console.log(response);
      // },
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        alert('Enexcepcted Error occured');
        if (error instanceof NotFoundError) {
          console.log('this post has already been deleted');
          // tslint:disable-next-line: curly
        } else throw error;
      }
    );
  }
}
