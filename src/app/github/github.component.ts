import { map, switchMap } from 'rxjs/operators';
import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'github-follower',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  followers;
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowerService
  ) {}

  ngOnInit(): void {
    // combine two Observables
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        // map((combined) => {
        //   let id = combined[0].get('id');
        //   let page = combined[1].get('page');

        //   //get data from the server exemple
        //   // this.service.getAll({id:id, page: page})

        //   return this.service.getAll();
        // },

        // ),

        switchMap((combined) => {
          const id = combined[0].get('id');
          const page = combined[1].get('page');

          // get data from the server exemple
          // this.service.getAll({id:id, page: page})

          return this.service.getAll();
        })
      )
      .subscribe((followers) => {
        this.followers = followers;
      });

    // getting the require parameters
    // this.route.paramMap.subscribe();
    // const id = this.route.snapshot.paramMap.get('id');

    // gettings the query parameters
    // this.route.queryParamMap.subscribe();
    // const queryParam = this.route.snapshot.queryParamMap.get('param');
  }

  // getFollower(follower) {
  //   return this.service
  //     .findBy(follower.login)
  //     .subscribe((response) => response);
  // }
}
