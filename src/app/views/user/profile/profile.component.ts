
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';

import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  url: String;

  constructor(
    private userService: UserService,
    private router: Router,
    private acRouter: ActivatedRoute) {
      this.user = new User('111', 'alice', 'alice', 'alice', 'alice', 'alice@alice');
  }

  UpdateUser() {
    /*console.log(this.user.username);
    console.log(this.user.firstName);
    console.log(this.user.lastName);*/

    this.userService.updateUser(this.user);
  }


  ngOnInit() {
    //testing api call -- remove me when done
    this.userService.findUserById('123')
      .subscribe(data => {
        console.log('in login comp...');
        console.log(data);
        this.user = data;
      });

    this.acRouter.params.subscribe(params => {
      this.user._id = params['uid'];
      console.log('user id: ' + this.user._id);
    });


    //this.userService.findUserById(this.user._id);
  }
}

