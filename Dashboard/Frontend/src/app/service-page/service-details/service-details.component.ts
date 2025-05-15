import { CommonModule, DatePipe } from "@angular/common";
import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";



@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    CommonModule,
		FormsModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {
 @Input() servicePageId: number | null = null;
  @Input() servicePageData: any = {};
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  title: string = "";
  short_description: string = "";
  long_description: string = "";
  formloading: boolean = false;

  ngOnInit(): void {
    // this.isOpen = true;
    if (this.servicePageData) {
      this.title = this.servicePageData.title;
      this.short_description = this.servicePageData.short_description;
      this.long_description = this.servicePageData.long_description;
    }
  }

  closeDialog() {
    this.isOpen = false;
    this.close.emit();  
  }
}