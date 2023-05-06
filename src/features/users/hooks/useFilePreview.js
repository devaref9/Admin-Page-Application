import { useEffect, useState } from "react";

export default function useFilePreview(file) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (file && file.length > 0) {
      const newUrl = URL.createObjectURL(file[0]);
      setImgSrc(newUrl);
    }
  }, [file]);

  return [imgSrc];
}
