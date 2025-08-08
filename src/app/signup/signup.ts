
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../Services/form/formService';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup implements OnInit {
  signupForm!: FormGroup;
  

  constructor(private fb: FormBuilder, private router: Router,private formService:FormService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  onSubmit() {
     const userDetails = this.signupForm.value;

    // Save to localStorage
 this.formService.saveUserData(userDetails);

    alert('Signup successful! Now login.');
    this.signupForm.reset();
    this.router.navigate(['/login']);

    }
  }

