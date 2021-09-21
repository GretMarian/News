import { AbstractControl } from "@angular/forms";

export function  UserValidators (control: AbstractControl): {[key: string]: boolean} | null {
    
    if (control.value != null && control.value !== 'admin') {
        return { UserValidators: true}
    } else {
        return null
    }
}

export function  PasswordValidators (control: AbstractControl): {[key: string]: boolean} | null {
    
    if (control.value != null && control.value !== '12345') {
        return { PasswordValidators: true}
    } else {
        return null
    }
}