import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "../Input";

export function ControlledInput({ control, name, error, ...rest }) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input onChangeText={onChange} value={value} {...rest} />
                )}
            />
        </>
    );
}
