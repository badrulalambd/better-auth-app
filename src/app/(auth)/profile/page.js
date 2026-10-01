"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "../../../lib/auth-client";

export default function Basic() {
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("Data for Profile update:", userData);

    const { data: resData, error } = await authClient.updateUser({
      name: userData.name,
    });

    if (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile. Please try again.");
      return;
    }

    console.log("Profile successfully updated:", resData);
    alert("Profile updated successfully!");
  };

  return (
    <Form
      className="w-full max-w-96"
      onSubmit={handleUpdateProfile}
    >
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>

        <Description>
          Update your profile information.
        </Description>

        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.trim().length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input
              className="w-full"
              placeholder="John Doe"
            />
            <FieldError />
          </TextField>
        </FieldGroup>

        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Save Changes
          </Button>

          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}