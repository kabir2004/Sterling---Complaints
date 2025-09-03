"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FileText, User, Mail, Phone, Building, Calendar, HelpCircle } from "lucide-react";
import { useState } from "react";

interface ComplaintData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  sterlingAdvisorName: string;
  complaintDescription: string;
  supportingDocumentation?: string;
  uploadedFiles: Array<{ name: string; size: number; type: string }>;
}

interface SuccessScreenProps {
  complaintData: ComplaintData;
  ticketNumber: string;
  onNewComplaint: () => void;
}

export function SuccessScreen({ complaintData, ticketNumber, onNewComplaint }: SuccessScreenProps) {
  const [showHelp, setShowHelp] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (showHelp) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Help & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  We&apos;re here to help you with your complaint or any questions you may have.
                </p>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href="mailto:complaints@sterlingmutuals.com" 
                        className="text-primary hover:underline"
                      >
                        complaints@sterlingmutuals.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href="tel:1-800-354-4956" 
                        className="text-primary hover:underline"
                      >
                        1-800-354-4956
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Mail:</p>
                        <p className="text-sm">
                          Sterling Mutuals Inc.<br />
                          1090 University Ave. West, 2nd Floor<br />
                          Windsor, Ontario
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Submit Another Complaint</h4>
                  <p className="text-sm text-muted-foreground">
                    If you need to submit an additional complaint, you can do so using the same form.
                    Each complaint will receive its own unique ticket number for tracking.
                  </p>
                  <Button 
                    onClick={onNewComplaint}
                    className="bg-blue-900 hover:bg-blue-800 text-white"
                  >
                    Submit New Complaint
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setShowHelp(false)}
                  className="mr-4"
                >
                  Back to Complaint Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complaint Submitted Successfully</h1>
          <p className="text-lg text-gray-600 mb-4">
            Your complaint has been received and is being processed.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Ticket #: {ticketNumber}
          </Badge>
        </div>

        {/* Complaint Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Complaint Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <User className="h-4 w-4" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Full Name:</span>
                  <p className="text-muted-foreground">{complaintData.fullName}</p>
                </div>
                <div>
                  <span className="font-medium">Email:</span>
                  <p className="text-muted-foreground">{complaintData.email}</p>
                </div>
                {complaintData.phoneNumber && (
                  <div>
                    <span className="font-medium">Phone:</span>
                    <p className="text-muted-foreground">{complaintData.phoneNumber}</p>
                  </div>
                )}
                <div>
                  <span className="font-medium">Sterling Advisor:</span>
                  <p className="text-muted-foreground">{complaintData.sterlingAdvisorName}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Complaint Description */}
            <div>
              <h3 className="font-semibold mb-3">Complaint Description</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm whitespace-pre-wrap">{complaintData.complaintDescription}</p>
              </div>
            </div>

            {/* Supporting Documentation */}
            {complaintData.supportingDocumentation && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Supporting Documentation</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm whitespace-pre-wrap">{complaintData.supportingDocumentation}</p>
                  </div>
                </div>
              </>
            )}

            {/* Uploaded Files */}
            {complaintData.uploadedFiles.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Uploaded Files</h3>
                  <div className="space-y-2">
                    {complaintData.uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm font-medium">{file.name}</span>
                        <span className="text-xs text-muted-foreground">{formatFileSize(file.size)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator />

            {/* Submission Info */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Submission Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Submitted:</span>
                  <p className="text-muted-foreground">{formatDate()}</p>
                </div>
                <div>
                  <span className="font-medium">Status:</span>
                  <p className="text-muted-foreground">Under Review</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onNewComplaint}
            className="bg-blue-900 hover:bg-blue-800 text-white"
          >
            Submit Another Complaint
          </Button>
          <Button 
            variant="outline"
            onClick={() => setShowHelp(true)}
          >
            Help & Support
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>You will receive an acknowledgement letter within 5 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>Our Compliance team will thoroughly investigate your complaint</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>You will receive a detailed response within 90 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>Keep your ticket number ({ticketNumber}) for reference</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}