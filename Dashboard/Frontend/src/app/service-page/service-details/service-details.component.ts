import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicePage } from '@app/shared/Model/servicePage';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent implements OnInit {
  @Input() ServiceId: number | null = null;
  @Input() ServiceData: any = {};
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  formloading: boolean = false;
  Service = new ServicePage().deserialize({});
  isActive: boolean = true;
  
  ngOnInit(): void {
    // this.isOpen = true;
    this.setData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ServiceData'] && changes['ServiceData'].currentValue) {
      this.setData();
    }
  }

  setData() {
    if (this.ServiceData) {
      this.Service.title = this.ServiceData.title;
      this.Service.short_description = this.ServiceData.short_description;
      this.Service.long_description = this.ServiceData.long_description;
    }
  }
  closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }
}
