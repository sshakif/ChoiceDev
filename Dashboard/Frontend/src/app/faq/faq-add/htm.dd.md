<ui5-dialog
[open]="isOpen"
header-text="Add"
state="Information"
id="dialog"
class="w-50"

> <app-form-preloader *ngIf="loading"></app-form-preloader>
> <ui5-message-strip class="w-100 mt-3" design="Critical" *ngIf="errorMassage">

    <ui5-icon name="alert" slot="icon"></ui5-icon> {{ errorMassage }}

  </ui5-message-strip>
  <div>
    <div class="d-flex align-items-center">
      <ui5-label show-colon>Active</ui5-label>
      <ui5-switch
        accessible-name="graphical"
        design="Graphical"
        [checked]="isActive"
        (change)="toggleAction($event)"
      ></ui5-switch>
    </div>
    <div>
      <ui5-label show-colon required>Question</ui5-label>
      <div>
        <div
          class="text-xs mt-1"
          [ngClass]="{
            'text-red-600': wordErrors.question,
            'text-gray-500': !wordErrors.question
          }"
        >
          {{ wordCounts.question }} / 50 words
        </div>
        <div *ngIf="wordErrors.question" class="text-red-600 text-sm mt-1">
          Maximum 50 words allowed!
        </div>
      </div>
      <ui5-textarea
        class="w-100"
        [(ngModel)]="faq.question"
        placeholder="Question"
        required
      ></ui5-textarea>
    </div>
    <ng-container>
      <ui5-label show-colon required>Answer</ui5-label>
      <div>
        <div
          class="text-xs mt-1"
          [ngClass]="{
            'text-red-600': wordErrors.answer,
            'text-gray-500': !wordErrors.answer
          }"
        >
          {{ wordCounts.answer }} / 200 words
        </div>
        <div *ngIf="wordErrors.answer" class="text-red-600 text-sm mt-1">
          Maximum 200 words allowed!
        </div>
      </div>
      <ui5-textarea
        class="w-100"
        style="height: 150px"
        [(ngModel)]="faq.answer"
        placeholder="Answer"
        required
      ></ui5-textarea>
    </ng-container>
  </div>

  <div slot="footer" class="d-flex justify-content-end w-100 gap-2 p-2">
    <ui5-button design="Emphasized" [disabled]="loading" (click)="insertData()">
      Submit
    </ui5-button>
    <ui5-button design="Default" (click)="closeDialog()">Close</ui5-button>
  </div>
</ui5-dialog>

<app-toast-message
[IsOpenToastAlert]="IsOpenToastAlert"
[ToastType]="ToastType"

> </app-toast-message>
