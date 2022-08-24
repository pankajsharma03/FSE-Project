import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer } from 'rxjs';
import { IProcessedPension } from '../shared/models/processedPension';
import { IProcessRequest } from '../shared/models/processRequest';
import { FormsService } from './forms.service';

describe('Forms Service', () => {
  let formsService: FormsService;
  let httpClientSpy: { post: jasmine.Spy };
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormsService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
      imports:[RouterTestingModule]
    });
    formsService = TestBed.inject(FormsService);
  });

  it('Service created', () => {
    expect(formsService).toBeDefined();
  });

  it('call submitRequest()', fakeAsync(() => {
    const testData:IProcessedPension =
      {
        id: 1,
        pensionAmount: 1234,
        bankServiceCharge: 550
      };
      const incomingRequest:IProcessRequest =
      {
        id: 1,
        aadhaarNumber: '111111111111'
      };
    httpClientSpy.post.and.returnValue(defer(() => Promise.resolve(testData)));

    formsService.submitRequest(incomingRequest).subscribe((data) => {
      expect(data).toEqual(testData);
    });
    tick();
  }));
});
