"use client";

import { Button } from "./ui/button";

export const DownloadCvButton = () => {
  const download = () => {
    const downloadLink = getDownloadLink();
    downloadLink.click();
  };

  return <Button onClick={download}>Télécharger mon CV</Button>;
};

const getDownloadLink = function () {
  const downloadLink = document.createElement("a");

  downloadLink.href = "/assets/cv/CV_MOUELLE_FR.pdf";
  downloadLink.target = "_blank";
  document.body.appendChild(downloadLink);

  return downloadLink;
};
