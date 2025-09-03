"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Search, Hourglass, CheckCircle } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Initial Receipt",
    description: "Submission & acknowledgement within 5 business days",
    icon: Mail,
  },
  {
    id: 2,
    title: "Investigation",
    description: "Thorough investigation by our Compliance team",
    icon: Search,
  },
  {
    id: 3,
    title: "Review Period",
    description: "Comprehensive review period up to 90 days",
    icon: Hourglass,
  },
  {
    id: 4,
    title: "Resolution",
    description: "Detailed response with findings and recommendations",
    icon: CheckCircle,
  },
];

export function ProcessStepper() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {processSteps.map((step) => {
          const IconComponent = step.icon;
          return (
            <Card key={step.id} className="relative overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-200 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="mb-2 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors duration-300">
                      {step.id}
                    </Badge>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-blue-100 group-hover:shadow-lg group-hover:shadow-blue-900/20 transition-all duration-300">
                      <IconComponent className="h-4 w-4 text-primary group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-900 transition-colors duration-300">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}