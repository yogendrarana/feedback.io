type FormProps = {
    clientId: string;
    projectId: string;
    contentClassName?: string;
    triggerClassName?: string;
};

declare const ReactForm: (props: FormProps) => JSX.Element;

export { type FormProps, ReactForm };
