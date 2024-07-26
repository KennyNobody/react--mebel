type FormFieldMode = 'textarea' | 'input';

interface FormInputType {
    id: number;
    value: string;
    caption: string;
    placeholder: string;
    type: 'text' | 'number';
}

interface FormFieldType {
    mode: FormFieldMode;
    data: FormInputType;
}

export {
    type FormFieldType,
};
