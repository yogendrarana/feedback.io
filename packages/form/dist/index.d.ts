type FormProps = {
    clientId: string;
    projectId: string;
    contentClassName?: string;
    triggerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    textareaClassName?: string;
    submitBtnClassName?: string;
    feedbackTypeClassName?: string;
    formClassName?: string;
    errorClassName?: string;
    contentAlign?: 'start' | 'center' | 'end';
};

declare const ReactForm: (props: FormProps) => JSX.Element;

export { type FormProps, ReactForm };
