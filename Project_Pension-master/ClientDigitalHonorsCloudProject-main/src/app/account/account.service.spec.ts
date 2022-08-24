import { TestBed } from "@angular/core/testing";
import { AccountService } from "./account.service";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {RouterTestingModule} from '@angular/router/testing'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

describe('Account Service', () =>{
  
  let accountService: AccountService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [AccountService]
    });
      accountService = TestBed.inject(AccountService);
      http = TestBed.inject(HttpClient);
      httpController = TestBed.inject(HttpTestingController);
  });

  it('Service created', () =>{
    expect(accountService).toBeDefined();
  });

  afterEach(() =>{
    httpController.verify();
  })
  it('call login() passed', () =>{
    const testData = null;
    const inputData = {
      username: 'admin1',
      password: 'admin1'
    };
    const token = 'dummytoken'
    accountService.login(inputData).subscribe((data)=> expect(data).toBeUndefined);
    const req = httpController.expectOne(environment.authApi);
    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  });

  it('call login() failed', () => {
    const emsg = 'status 500 error';
    const inputData = {
      username: 'admin',
      password: 'admin',
    };
    accountService.login(inputData).subscribe(
      () => fail('should have failed with the 500 error'),
      (error: HttpErrorResponse) => {
        expect(error.status)
        expect(error.error)
      }
    );

    const req = httpController.expectOne(environment.authApi);

    expect(req.request.method).toEqual('POST');

    req.flush(emsg, { status: 500, statusText: 'Server Error' });
  });
});