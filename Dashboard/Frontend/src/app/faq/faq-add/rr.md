<ui5-dialog header-text="new" [open]="isOpen" id="dialog">
<ui5-bar slot="header" design="Header">
<ui5-title level="H5" slot="startContent">New</ui5-title>
<ui5-button
class="dialogCloser"
design="Transparent"
id="closeDialogButton"
slot="endContent"
(click)="closeDialog()"
icon="decline" ></ui5-button>
</ui5-bar>
<app-faq-add \*ngIf="loading"></app-faq-add>

<ui5-message-strip class="w-100 mt-3" design="Critical" \*ngIf="errorMassage">
<ui5-icon name="alert" slot="icon"></ui5-icon> {{ errorMassage }}
</ui5-message-strip>

  <section class="bg-pink-100 p-6 rounded-lg max-w-md mx-auto mt-6">
    <div class="flex flex-col space-y-6">
      <div class="flex space-x-4">
        <!-- Active Toggle -->
        <div class="flex-1">
          <span> Active: </span>
          <ui5-switch checked (click)="toggleAction($event)"></ui5-switch>
        </div>

        <!-- Question Field -->
        <div>
          <ui5-label
            show-colon
            required
            class="block text-sm font-medium text-gray-700"
          >
            Question
          </ui5-label>
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
            <div
              *ngIf="wordErrors.question"
              class="text-red-600 text-sm mt-1 colorss"
            >
              Maximum 50 words allowed!
            </div>
          </div>
          <ui5-textarea
            [(ngModel)]="faq.question"
            placeholder="Enter your question"
            required
            (input)="validateWords('question', 50)"
          ></ui5-textarea>
        </div>

        <!-- Answer Field -->
        <div>
          <ui5-label
            show-colon
            required
            class="block text-sm font-medium text-gray-700"
          >
            Answer
          </ui5-label>
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
            style="height: 200px"
            [(ngModel)]="faq.answer"
            placeholder="Enter your answer"
            required
            (input)="validateWords('answer', 200)"
          ></ui5-textarea>

        </div>
      </div>
    </div>

  </section>

  <ui5-toolbar slot="footer">
    <ui5-toolbar-button
      design="Emphasized"
      [disabled]="loading"
      (click)="insertData()"
      text="Submit"
    >
    </ui5-toolbar-button>

    <ui5-toolbar-button
      design="Transparent"
      text="Close"
      (click)="closeDialog()"
    ></ui5-toolbar-button>

  </ui5-toolbar>
</ui5-dialog>
<app-toast-message
  [IsOpenToastAlert]="IsOpenToastAlert"
  [ToastType]="ToastType"
></app-toast-message>
