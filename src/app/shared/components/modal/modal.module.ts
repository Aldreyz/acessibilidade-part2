import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';
import { FocusBackModule } from './../../directives/focus-back/focus-back.module';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule ,FocusBackModule, FormsModule],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}
