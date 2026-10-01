"use client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { requestPasswordReset } from "../../../lib/auth-client";

const ForgotPasswordPage = () => {

    const handleForgotPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Forgot Password Form Data: ", data);

    const { data: resetData, error } = await requestPasswordReset({
    email: data.email, // required, The email address of the user to send a password reset email to
    redirectTo: "/reset-password", // The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN
});


  };

    return (
        <div>
            <h1>Forgot Password</h1>
            <p>If you forgot your password, you can reset it here.</p>

            <Form className="flex w-96 flex-col gap-4" onSubmit={handleForgotPassword}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ForgotPasswordPage;