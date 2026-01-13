"use client";

import { useGetPrivacyPolicyQuery } from "@/redux/features/privacy&terms/privacy&termsApi";
import React from "react";

function PrivacyPolicyPage() {
  const {
    data: privacyPolicyData,
    isLoading,
    isError,
  } = useGetPrivacyPolicyQuery(undefined);

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto p-2 md:px-4 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground">Loading privacy policy...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError || !privacyPolicyData?.success) {
    return (
      <div className="container mx-auto p-2 md:px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Error Loading Privacy Policy</h2>
          <p className="text-muted-foreground">Unable to load the privacy policy. Please try again later.</p>
        </div>
      </div>
    );
  }

  // Get the first privacy policy item
  const privacyPolicy = privacyPolicyData?.data?.[0];

  if (!privacyPolicy) {
    return (
      <div className="container mx-auto p-2 md:px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No Privacy Policy Found</h2>
          <p className="text-muted-foreground">Privacy policy content is not available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-2 md:px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {privacyPolicy.title}
        </h1>

        {/* Content - Render HTML safely */}
        <div 
          className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-foreground
            prose-h1:text-3xl prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-7
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-li:text-muted-foreground prose-li:my-2
            prose-hr:my-8 prose-hr:border-border"
          dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}
        />

        {/* Metadata */}
        <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(privacyPolicy.updated_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
