export const required = (value) => {
    if(value) return null;
    return "Заполните поле"
}

export const maxLength = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `Превышен лимит ${maxLength} символов`;
}