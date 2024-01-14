import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("Aucun fichier sélectionné");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image téléchargée avec succès !");
        // Traitez la réponse du serveur ici si nécessaire
      } else {
        console.error("Échec du téléchargement de l'image");
      }
    } catch (error) {
      console.error("Erreur lors de la requête de téléchargement", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Télécharger</button>
    </div>
  );
};

export default ImageUploader;
