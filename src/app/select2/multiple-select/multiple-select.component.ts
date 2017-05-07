import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
declare const jQuery: any;

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss']
})
export class MultipleSelectComponent implements OnInit, OnDestroy {
  options: any[];
  selectedValues: any[] = [];
  @ViewChild('select') select: ElementRef;

  constructor(
    private el: ElementRef,
  ) {
    this.options = [
      { name: 'Alabama', value: 'AL' },
      { name: 'Wyoming', value: 'WY' }
    ];
  }

  ngOnInit() {
    jQuery(this.select.nativeElement)
      .select2({
        theme: 'bootstrap',
        placeholder: 'Select an option',
      })
      .on('change', (event) => {
        this.selectedValues = jQuery(this.select.nativeElement).val();
        console.log(this.selectedValues);
      });
  }

  ngOnDestroy() {
    jQuery(this.select.nativeElement).remove();
    this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
  }

  clear() {
    jQuery(this.select.nativeElement)
      .val(null).trigger('change');
  }

  selectAll() {
    jQuery(this.select.nativeElement)
      .val(this.options.map(option => option.value)).trigger('change');
  }
}
