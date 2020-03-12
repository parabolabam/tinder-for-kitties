export function email(email) {
  return /.*@.*\..*/.test(email);
}

export function empty(value) {
  return value !== '';
}

export const validators = [email, empty];

export function validationProcess({
  binding, value, context, componentInstance,
}) {
  let validationResult = null;

  binding.value[0].forEach((validatorName) => {
    validationResult = validators[validatorName](value);
  });

  if (!validationResult) {
    context.$emit('invalid');
    componentInstance.setErrorMessage(binding.value[1]);
  } else {
    context.$emit('valid');
  }
}
