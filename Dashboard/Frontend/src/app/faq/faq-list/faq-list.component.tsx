import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnalyticalTableComponent } from "@app/components/analytical-table/analytical-table.component";
import { ToastMessageComponent } from "@app/components/toast-message/toast-message.component";
import { FaqAddComponent } from "../faq-add/faq-add.component";
import { FaqDetailsComponent } from "../faq-details/faq-details.component";
import { FaqEditComponent } from "../faq-edit/faq-edit.component";

@Component({
  selector: "app-faq-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnalyticalTableComponent,
    FaqAddComponent,
    FaqEditComponent,
    FaqDetailsComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./faq-list.component.html",
  styleUrl: "./faq-list.component.sass",
})
export class FaqListComponent {}
