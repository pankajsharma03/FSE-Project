import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProcessedPension } from 'src/app/shared/models/processedPension';
import {IProcessRequest } from 'src/app/shared/models/processRequest';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-process-pension-details',
  templateUrl: './process-pension-details.component.html',
  styleUrls: ['./process-pension-details.component.scss']
})
export class ProcessPensionDetailsComponent implements OnInit {

  request: IProcessedPension;
  constructor(private formsservice: FormsService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadRequest();
  }
  onSubmit(){
    this.router.navigateByUrl('/forms/success')
  }

  loadRequest(){
    this.request = this.formsservice.processedPensionDetails;
  }

}
