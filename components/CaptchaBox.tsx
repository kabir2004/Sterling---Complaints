"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { generateCaptchaCode } from "@/lib/validation";

interface CaptchaBoxProps {
  onVerificationComplete: (isValid: boolean) => void;
}

export function CaptchaBox({ onVerificationComplete }: CaptchaBoxProps) {
  const [captchaCode, setCaptchaCode] = useState(generateCaptchaCode());
  const [userInput, setUserInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleRefresh = () => {
    setCaptchaCode(generateCaptchaCode());
    setUserInput("");
    setIsVerified(false);
    setError("");
    onVerificationComplete(false);
  };

  const handleVerify = () => {
    if (userInput.toUpperCase() === captchaCode) {
      setIsVerified(true);
      setError("");
      onVerificationComplete(true);
    } else {
      setError("Verification code does not match. Please try again.");
      setIsVerified(false);
      onVerificationComplete(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Security Verification</Label>
            <p className="text-sm text-muted-foreground mt-1">
              This verification helps protect our complaint system from automated submissions and ensures legitimate complaints are processed efficiently.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center bg-muted/20">
                <div className="text-2xl font-mono font-bold tracking-wider text-foreground">
                  {captchaCode}
                </div>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="captcha-input">Please verify you are human:</Label>
            <Input
              id="captcha-input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter the code above"
              className={error ? "border-destructive" : ""}
              aria-describedby={error ? "captcha-error" : undefined}
            />
            {error && (
              <p id="captcha-error" className="text-sm text-destructive">
                {error}
              </p>
            )}
          </div>

          <Button
            type="button"
            onClick={handleVerify}
            disabled={!userInput.trim()}
            className="w-full"
          >
            Complete Security Verification
          </Button>

          {isVerified && (
            <div className="text-sm text-green-600 font-medium">
              ✓ Security verification completed successfully
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}