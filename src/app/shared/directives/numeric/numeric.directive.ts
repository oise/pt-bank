import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {
  private regex = new RegExp(/^[0-9]*(\.)*(\d{1,2})$/g);

  private specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  private combinationKeys = ['c', 'v', 'x', 'a'];

  constructor(private el: ElementRef) {}

  private formatValue(amount: string) {
    let matches = amount.match(new RegExp('^\\d*(\\.|,|\\s?)(\\d{1,2})?'));
    let result = '';
    if (matches) {
      result = matches[0];
    }
    result = result.replace(new RegExp('^0+(?!$|[.])'), ''); // remove leading zeros
    return result;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow special keys and Ctrl + c,v,x,a work
    if (
      this.specialKeys.includes(event.key) ||
      (event.ctrlKey && this.combinationKeys.includes(event.key)) ||
      (event.metaKey && this.combinationKeys.includes(event.key))
    ) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (!String(next).match(this.regex)) {
      event.preventDefault();
      this.el.nativeElement.value = this.formatValue(next);
    }
  }

  @HostListener('blur')
  onBlur() {
    const current: string = this.el.nativeElement.value;

    if (current.indexOf('.') + 1 === current.length) {
      this.el.nativeElement.value = current.replace('.', '');
    }
  }
}
