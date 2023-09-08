'use server'
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
export async function setMarkAsFavoriteAct(publicId:string,
    isFavorited:boolean){
        if(!isFavorited){
            await cloudinary.v2.uploader.remove_tag('favorite',[publicId]);
        }
        else{
            await cloudinary.v2.uploader.add_tag('favorite',[publicId]);
        }
        revalidatePath("/gallery");
        
}