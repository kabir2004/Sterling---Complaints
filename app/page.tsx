"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ProcessStepper } from "@/components/ProcessStepper";
import { CaptchaBox } from "@/components/CaptchaBox";
import { FileDropzone } from "@/components/FileDropzone";
import { SectionCard } from "@/components/SectionCard";
import { Sidebar } from "@/components/Sidebar";
import { SuccessScreen } from "@/components/SuccessScreen";
import { complaintFormSchema, type ComplaintFormData } from "@/lib/validation";

interface FileWithPreview extends File {
  id: string;
}

export default function Home() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [submittedComplaint, setSubmittedComplaint] = useState<{
    fullName: string;
    email: string;
    phoneNumber?: string;
    sterlingAdvisorName: string;
    complaintDescription: string;
    supportingDocumentation?: string;
    uploadedFiles: Array<{ name: string; size: number; type: string }>;
  } | null>(null);
  const [ticketNumber, setTicketNumber] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ComplaintFormData>({
    resolver: zodResolver(complaintFormSchema),
  });

  const complaintDescription = watch("complaintDescription", "");

  const generateTicketNumber = (): string => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let ticket = "SM-";
    
    // Add 2 random letters
    for (let i = 0; i < 2; i++) {
      ticket += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    // Add 4 random numbers
    for (let i = 0; i < 4; i++) {
      ticket += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    
    return ticket;
  };

  const onSubmit = async (data: ComplaintFormData) => {
    if (!isCaptchaVerified) {
      toast.error("Please complete the security verification first");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate ticket number
    const newTicketNumber = generateTicketNumber();
    setTicketNumber(newTicketNumber);
    
    // Prepare complaint data for success screen
    const complaintData = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      sterlingAdvisorName: data.sterlingAdvisorName,
      complaintDescription: data.complaintDescription,
      supportingDocumentation: data.supportingDocumentation,
      uploadedFiles: uploadedFiles.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      }))
    };
    
    setSubmittedComplaint(complaintData);
    setIsSubmitting(false);
    setShowSuccessScreen(true);
    
    // Show success toast
    toast.success("Complaint submitted", {
      description: `Thank you. Your ticket number is ${newTicketNumber}`,
    });
  };

  const handleDirectSubmit = async () => {
    if (!isCaptchaVerified) {
      toast.error("Please complete the security verification first");
      return;
    }

    // Get current form values
    const formData = watch();
    
    // Validate required fields manually
    if (!formData.fullName || !formData.email || !formData.sterlingAdvisorName || !formData.complaintDescription) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.complaintDescription.length < 200) {
      toast.error("Please provide at least 200 characters for your complaint description");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate ticket number
    const newTicketNumber = generateTicketNumber();
    setTicketNumber(newTicketNumber);
    
    // Prepare complaint data for success screen
    const complaintData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      sterlingAdvisorName: formData.sterlingAdvisorName,
      complaintDescription: formData.complaintDescription,
      supportingDocumentation: formData.supportingDocumentation,
      uploadedFiles: uploadedFiles.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      }))
    };
    
    setSubmittedComplaint(complaintData);
    setIsSubmitting(false);
    setShowSuccessScreen(true);
    
    // Show success toast
    toast.success("Complaint submitted", {
      description: `Thank you. Your ticket number is ${newTicketNumber}`,
    });
  };

  const handleNewComplaint = () => {
    setShowSuccessScreen(false);
    setSubmittedComplaint(null);
    setTicketNumber("");
    reset();
    setUploadedFiles([]);
    setIsCaptchaVerified(false);
    setShowSuccessBanner(false);
  };

  // Show success screen if complaint was submitted
  if (showSuccessScreen && submittedComplaint && ticketNumber) {
    return (
      <SuccessScreen
        complaintData={submittedComplaint}
        ticketNumber={ticketNumber}
        onNewComplaint={handleNewComplaint}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Success Banner */}
      {showSuccessBanner && (
        <div className="bg-green-50 border-b border-green-200 py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="text-green-800 text-center">
                <p className="font-medium">✓ Complaint submitted successfully!</p>
                <p className="text-sm">You&apos;ll receive an acknowledgement within 5 business days.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Submit Your Complaint
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sterling Mutuals Inc. takes client complaints very seriously. We have developed detailed complaint procedures to address your concerns in a timely manner. Your complaint will be thoroughly investigated by our Compliance team.
            </p>
          </div>
        </div>
      </div>

      {/* Process Stepper */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProcessStepper />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <SectionCard title="Personal Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="Enter your full name"
                      className={`${errors.fullName ? "border-destructive" : ""} focus:border-black focus:ring-black`}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-sm text-destructive">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@company.com"
                      className={`${errors.email ? "border-destructive" : ""} focus:border-black focus:ring-black`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="(555) 123-4567"
                    className="focus:border-black focus:ring-black"
                  />
                </div>
              </SectionCard>

              {/* Account Information */}
              <SectionCard title="Account Information">
                <div className="space-y-2">
                  <Label htmlFor="sterlingAdvisorName">
                    Sterling Advisor Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="sterlingAdvisorName"
                    {...register("sterlingAdvisorName")}
                    placeholder="Name of your Sterling Advisor"
                    className={`${errors.sterlingAdvisorName ? "border-destructive" : ""} focus:border-black focus:ring-black`}
                    aria-describedby={errors.sterlingAdvisorName ? "advisor-error" : undefined}
                  />
                  {errors.sterlingAdvisorName && (
                    <p id="advisor-error" className="text-sm text-destructive">
                      {errors.sterlingAdvisorName.message}
                    </p>
                  )}
                </div>
              </SectionCard>

              {/* Complaint Details */}
              <SectionCard
                title="Complaint Details"
                description="Please provide a detailed description of your complaint. Include relevant dates, specific incidents, and any other information that will help us investigate your concerns effectively."
              >
                <div className="space-y-2">
                  <Label htmlFor="complaintDescription">
                    Description of Your Complaint <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="complaintDescription"
                    {...register("complaintDescription")}
                    placeholder="Please provide a detailed description of your complaint..."
                    className={`min-h-40 max-h-96 resize-y ${errors.complaintDescription ? "border-destructive" : ""} focus:border-black focus:ring-black`}
                    aria-describedby={errors.complaintDescription ? "complaint-error" : "complaint-help"}
                    rows={8}
                  />
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      {errors.complaintDescription ? (
                        <p id="complaint-error" className="text-destructive">
                          {errors.complaintDescription.message}
                        </p>
                      ) : (
                        <p id="complaint-help" className="text-muted-foreground">
                          Be as specific as possible to ensure timely resolution. Include dates, names, and specific incidents.
                        </p>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${complaintDescription.length >= 200 ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {complaintDescription.length}/200 minimum
                      {complaintDescription.length >= 200 && ' ✓'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supportingDocumentation">
                    Supporting Documentation
                  </Label>
                  <Textarea
                    id="supportingDocumentation"
                    {...register("supportingDocumentation")}
                    placeholder="List any supporting documentation you have (e.g., statements, emails, correspondence, etc.)"
                    className="min-h-32 max-h-64 resize-y focus:border-black focus:ring-black"
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">
                      {(watch("supportingDocumentation") || "").length} characters
                    </span>
                  </div>
                </div>
              </SectionCard>

              {/* Supporting Documentation Upload */}
              <FileDropzone onFilesChange={setUploadedFiles} />

              {/* Security Verification & Submit Button */}
              <CaptchaBox
                onVerificationComplete={setIsCaptchaVerified}
                onSubmit={handleDirectSubmit}
                isSubmitting={isSubmitting}
              />
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}