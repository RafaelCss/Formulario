
import type { ValidatorRule } from 'rc-field-form/lib/interface';


export interface Erros {
  name: string
  message: string
}
export const validaFormServer =  (errors: any): ValidatorRule => ({
  validator: async (rule) => {
    if (!errors) return;
    const { field } = rule as { field: string };
    if (errors) {
      throw new Error(errors?.[field]?.message);
    }
    Promise.resolve()
  }
});


