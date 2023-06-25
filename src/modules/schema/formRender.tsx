import FormRender, {useForm} from "form-render";
import schema from "./simple";
import React from "react";

export default function FormRenderDemo(){
    const form = useForm();

    const onFinish = (formData:FormData) => {
        console.log('formData:', formData);
    };
    return (
        <FormRender
            form={form}
            schema={schema}
            onFinish={onFinish}
            footer={true}
        />
    )
}