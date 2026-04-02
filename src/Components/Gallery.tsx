import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const galleryByYear: Record<string, string[]> = {
  "2025": [
    "/All 2025 ICAC2N Images/unnamed.jpg",
    "/All 2025 ICAC2N Images/unnamed (1).jpg",
    "/All 2025 ICAC2N Images/unnamed3.jpg",
    "/All 2025 ICAC2N Images/unnamed4.jpg",
    "/All 2025 ICAC2N Images/unnamed5.jpg",
    "/All 2025 ICAC2N Images/unnamed6.jpg",
    "/All 2025 ICAC2N Images/unnamed7.jpg",
    "/All 2025 ICAC2N Images/unnamed8.jpg",
    "/All 2025 ICAC2N Images/unnamed9.jpg",
  ],
};

const Gallery = () => {
  const { year } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectedYear = useMemo(() => {
    if (year && galleryByYear[year]) {
      return year;
    }
    return "2025";
  }, [year]);

  const images = galleryByYear[selectedYear];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="w-full py-6">
      <div className="w-full px-2 sm:px-6 lg:px-12 my-8">
        <div className="mb-8">
          <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings text-2xl mb-4 leading-tight">
            ICAC2N Gallery
          </h1>
          <p className="text-[16px] text-slate-700">
            Year: <span className="font-semibold text-red-900">{selectedYear}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <button
              key={`${selectedYear}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden rounded-md border border-slate-200 shadow-sm bg-white"
            >
              <img
                src={image}
                alt={`ICAC2N ${selectedYear} gallery image ${index + 1}`}
                className="w-full h-[260px] sm:h-[280px] object-cover brightness-150 hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close full image view"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/95 text-red-900 text-xl leading-none shadow-md"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt={`ICAC2N ${selectedYear} full image`}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-md"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
