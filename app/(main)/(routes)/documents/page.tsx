"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className="h-full items-center justify-center space-y-4 flex flex-col">
      <Image
        src="/empty.png"
        alt="Empty"
        className="dark:hidden"
        height="300"
        width="300"
      />
      <Image
        src="/empty-dark.png"
        alt="Empty"
        className="dark:block hidden"
        height="300"
        width="300"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
