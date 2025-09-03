"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export function Sidebar() {
  return (
    <div className="space-y-6">
      <Card className="sticky top-6 z-10">
        <CardHeader>
          <CardTitle className="text-lg">What happens after you submit</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              <span>Acknowledgement letter within 5 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              <span>Thorough investigation by our Compliance team</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              <span>Response within 90 days (or explanation for any delay)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              <span>Industry brochure with alternative dispute resolution options</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="sticky z-10" style={{ top: 'calc(6rem + 200px)' }}>
        <CardHeader>
          <CardTitle className="text-lg">Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              Need to submit via other methods? Contact us directly
            </p>
          </div>
          
          <Separator />
          
          <div className="space-y-3 text-sm">
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
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-muted-foreground">Mail:</p>
                <p className="text-sm">
                  Sterling Mutuals Inc.<br />
                  1090 University Ave. West, 2nd Floor<br />
                  Windsor, Ontario
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}