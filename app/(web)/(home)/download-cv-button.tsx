"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const DownloadCvButton = () => {
  const download = () => {
    const downloadLink = getDownloadLink();
    downloadLink.click();
  };

  return (
    <Button onClick={download}>
      Télécharger mon CV <Icons.download className="ml-2 h-4 w-4" />
    </Button>
  );
};

const getDownloadLink = function () {
  const downloadLink = document.createElement("a");

  downloadLink.href = "/assets/cv/CV_MOUELLE_FR.pdf";
  downloadLink.target = "_blank";
  document.body.appendChild(downloadLink);

  return downloadLink;
};
