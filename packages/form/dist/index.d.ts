interface FormProps {
    clientId: string;
    projectId: string;
    contentClassName?: string;
    triggerClassName?: string;
}
declare const Form: (props: FormProps) => JSX.Element;

export { Form };
