import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http:Http) {
    console.log('lol');
  }

  login(username:string, password:string) {

  	let body = JSON.stringify({username:username, password:password});
  	
  	return this.http.post('http://beehivesoftech.co.in/login-api.php', body)
  		.map((response: Response) => {
  			// debugger;
  			alert(response['_body']);
  			return "hey";
  		});
  }

}
