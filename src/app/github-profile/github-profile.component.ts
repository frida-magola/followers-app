import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss'],
})
export class GithubProfileComponent implements OnInit {
  // followers;
  constructor(private route: Router) {}

  ngOnInit(): void {
    // console.log('OnInit Changed Initial');
    // snaptshot
    // let id = this.route.snapshot.paramMap.get('id'); //worked with ActivatedRoute
    // console.log(id);
    // this.route.paramMap.subscribe((params) => {
    //   // console.log(params);
    //   // params.get('id');
    //   //convert string to a number
    //   let id = +params.get('id');
    //   console.log(id);
    // });
  }

  // Programmatically navigation
  submit(): void {
    this.route.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
