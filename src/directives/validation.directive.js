
import { validationProcess } from '@/services/validation.service';

export const validationDirective = {
  name: 'validation',
  directive: {
    bind(el, binding, { context, componentInstance }) {
      if (!Array.isArray(binding.value) || binding.value.length !== 2) {
        throw new Error('Please provide an array with two values: validator name and error message');
      }
      if (!Array.isArray(binding.value[0])) {
        throw new Error('Please provide an array of validators names');
      }
      el.querySelector('input').addEventListener('blur', ({ currentTarget: { value } }) => {
        validationProcess({
          binding, value, context, componentInstance,
        });
      });
    },
    unbind(el) {
      el.querySelector('input').removeEventListener('blur');
    },
  },
};

export const directive = {};
