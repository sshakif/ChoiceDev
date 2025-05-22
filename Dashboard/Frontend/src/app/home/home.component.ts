import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from '@app/services/common-service/common.service';
import { Subject } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface BatchResponse {
  id: string;
  body: {
    '@count'?: number;
  };
}

interface CountItem {
  name: string;
  count: number;
  icon: string;
  route: string[];
  permission?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  countArray: CountItem[] = [];
  isLoading: boolean = true;
  private destroy$ = new Subject<void>();

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getCountValue();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private get batchApiConfig() {
    return {
      requests: [
        {
          id: 'services',
          method: 'GET',
          url: '/odata/ServicePages?$count=true',
        },
        {
          id: 'EmployeeList',
          method: 'GET',
          url: '/odata/Employees?$count=true',
        },
        
        {
          id: 'faqList',
          method: 'GET',
          url: '/odata/Faqs?$count=true',
        },
      
        {
          id: 'activesocialmedia',
          method: 'GET',
          url: '/odata/Footers?$filter=is_active eq true&$count=true',
        },
      ],
    };
  }

  getCountValue(): void {
    this.commonService
      .post('$batch', this.batchApiConfig)
      .pipe(
        takeUntil(this.destroy$),
        catchError((err) => {
          console.error('Error fetching counts:', err);
          this.initializeWithEmptyData();
          return of(null);
        })
      )
      .subscribe({
        next: (res: any) => {
          if (res) {
            this.processBatchResponse(res.responses || []);
          }
          this.isLoading = false;
        },
        error: () => (this.isLoading = false),
      });
  }

  private processBatchResponse(responses: BatchResponse[]): void {
    const counts = responses.reduce((acc, response) => {
      if (response?.id && response?.body?.['@count'] !== undefined) {
        acc[response.id] = response.body['@count'];
      }
      return acc;
    }, {} as Record<string, number>);

    this.countArray = [
      this.createCountItem('Services', counts['services'], 'database', [
        '/service-list',
      ]),

       this.createCountItem('Employees', counts['EmployeeList'], 'employee', [
        '/employee-list',
      ]),
      this.createCountItem('FAQs', counts['faqList'], 'question-mark', [
        '/faq-list',
      ]),
      
      this.createCountItem(
        'Active Social Media',
        counts['activesocialmedia'],
        'detail-view',
        ['']
      ),
    ];
  }

  private createCountItem(
    name: string,
    count: number = 0,
    icon: string,
    route: string[]
  ): CountItem {
    return {
      name,
      count: count || 0,
      icon,
      route,
    };
  }

  private initializeWithEmptyData(): void {
    this.countArray = [
      this.createCountItem('Services', 0, 'database', ['services']),
      this.createCountItem('Employees', 0, 'Employee', ['Employee']),
      this.createCountItem('FAQs', 0, 'question-mark', ['faqs']),

    ];
  }
}
