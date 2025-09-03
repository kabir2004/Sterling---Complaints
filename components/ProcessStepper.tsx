"use client";

import { Card, CardContent } from "@/components/ui/card";


const processSteps = [
  {
    id: 1,
    title: "Initial Receipt",
    description: "Submission & acknowledgement within 5 business days",
  },
  {
    id: 2,
    title: "Investigation",
    description: "Thorough investigation by our Compliance team",
  },
  {
    id: 3,
    title: "Review Period",
    description: "Comprehensive review period up to 90 days",
  },
  {
    id: 4,
    title: "Resolution",
    description: "Detailed response with findings and recommendations",
  },
];

export function ProcessStepper() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {processSteps.map((step) => {
          return (
            <Card key={step.id} className="relative overflow-hidden hover:shadow-xl hover:shadow-blue-900/25 hover:border-blue-300 transition-all duration-300 group border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 group-hover:shadow-lg group-hover:shadow-blue-900/30 transition-all duration-300 border border-blue-200">
                    <span className="text-lg font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                      {step.id}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
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