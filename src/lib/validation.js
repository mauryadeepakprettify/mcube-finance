import * as yup from "yup";
const { string, object } = yup;

export const enquireSchema = object({
  name: string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
    
  email: string().trim().email("Invalid email").required("Email is required"),

  phone: string()
    .trim()
    .required("Phone is required")
    .min(10, "Phone must be at least 10 characters long"),

  message: string()
    .trim()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"),
});
