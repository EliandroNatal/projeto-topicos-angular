import { 
	Directive, ElementRef, Input, OnInit 
} from '@angular/core';

@Directive({ 
	selector: '[funcionarioConcluida]' 
})
export class FuncionarioConcluidaDirective implements OnInit  {
   
    @Input() funcionarioConcluida: boolean;

    constructor(private el: ElementRef) {}

    ngOnInit() {
      if (this.funcionarioConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
    }
}
