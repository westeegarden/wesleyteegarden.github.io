import { useState } from "react";

export default function ProjectImages({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="project-view-images">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Project image ${i + 1}`}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <img className="lightbox-image" src={selectedImage} alt="Expanded" />
        </div>
      )}
    </>
  );
}
