import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

  static restrictedEmails (control: FormControl): {[key: string]: boolean} | null {
    if (['test@test', '@boba', '123@sad', '@twzhhq.online'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }
}
