import { z } from "zod";

export const complaintFormSchema = z.object({
  // Personal Information
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  
  // Account Information
  sterlingAdvisorName: z.string().min(1, "Sterling Advisor name is required"),
  
  // Complaint Details
  complaintDescription: z.string().min(200, "Please provide at least 200 characters describing your complaint"),
  supportingDocumentation: z.string().optional(),
  
  // Security Verification
  captchaCode: z.string().min(1, "Please complete the security verification"),
});

export type ComplaintFormData = z.infer<typeof complaintFormSchema>;

export const generateCaptchaCode = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};