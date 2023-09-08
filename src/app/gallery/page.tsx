
// import { Button } from "@/components/ui/button";
// import { CldUploadButton } from "next-cloudinary";
// import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import UploadButton from "./upload-button";
import { CloudinaryImage } from "./cloudinary-image";

type UploadResult = {
    info: {
        public_id: string
        
    },
    event: 'success',
}

export type SearchResult = {
    public_id :string;
    tags: string[];
};
export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by("created_at", "desc")
  .with_field("tags")
  .max_results(200)
  .execute()) as {resources : SearchResult[]};

    return (
        <section>
            <div className="flex flex-col gap-8 ">
                <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bond">Gallery</h1>

                <UploadButton />
                </div>
                    <div className="grid grid-cols-4 gap-4 ">
                        {results.resources.map((result) =>(
                            <CloudinaryImage
                                key={result.public_id}
                                
                                imageData={result}
                                alt="an image of gallery"
                                width="400"
                                height="300"
                            />
                        ))}
                    </div>
            </div>
        </section>
    );
}