"use client";

import CreateServerModals from "@/components/models/create-server-modals";
import { useEffect, useState } from "react";

const ModalsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModals />
    </>
  );
};

export default ModalsProvider;
