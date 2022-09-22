import type { ValidatorRule } from 'rc-field-form/lib/interface';
import { isEmpty } from 'lodash';

export interface Erros {
  name: string
  message: string
}
export const validaFormServer = (errors: any): ValidatorRule => ({
  validator: async (rule, _) => {
    const { field } = rule as { field: string };
    if (isEmpty(errors)) return;
    if (errors?? '') {
      throw new Error(errors[field]?.message)
    }
  }
});


