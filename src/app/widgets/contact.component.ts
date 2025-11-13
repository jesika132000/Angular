import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface ContactVM {
    title: string;
    desc: string;
    button: string;
}

@Component({
    standalone: true,
    selector: 'app-contact',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
})

export class ContactComponent {
     @Input({ required: true }) f!: ContactVM; 

    form!: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(10)]],
        });
    }

    submit() {
        if (this.form.invalid) return;
        alert('¡Mensaje enviado!');
        this.form.reset();
    }
  
}
