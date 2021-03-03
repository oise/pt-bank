import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TransfersModule } from './transfers/transfers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, TransactionsModule, TransfersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
