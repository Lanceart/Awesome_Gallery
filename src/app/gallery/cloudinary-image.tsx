'use client'
import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps, cloudinaryLoader } from "next-cloudinary";
import { setMarkAsFavoriteAct } from "./actions";
import {useTransition} from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";
import {useState} from "react";
export function CloudinaryImage(props: 
    {imageData: SearchResult;
        path: string;
        onUnheart:(
            unheartedResource: SearchResult) =>void; 
    } & Omit<CldImageProps>){
    const [transition,startTransition] = useTransition();

    const {imageData,onUnheart} = props;
    
    const [isFavorited, setIsFavorited] = useState(
        imageData.tags.includes("favorite")
    );
    return(

        <div className="relative">
        <CldImage               
                            {...props }
                            src={imageData.public_id}
                        />
    {isFavorited ? 
        (<FullHeart 
        onClick={()=>{
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(()=>{
                setMarkAsFavoriteAct(imageData.public_id,false);
            });
        }}
        className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"/>
    )
        :(
        <Heart 
            onClick={()=>{
                setIsFavorited(true);
                startTransition(()=>{ 
                    setMarkAsFavoriteAct(imageData.public_id,true);
                });
            }}
            className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"/>
        )}
        </div>
    );
}