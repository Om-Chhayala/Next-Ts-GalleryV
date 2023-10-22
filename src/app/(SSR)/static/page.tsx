import {UnsplashImage} from "@/models/unsplash-image";
import Image from "next/image";
import axios from "axios";
import { Alert } from "@/components/bootstrap";

export const metadata = {
    title : "Static fetching - Next.Js 13.4"
}

export default async function Page() {
    const response = await axios.get("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.data;
    
    const width = Math.min(500,image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align-items-center">
            <Alert>
            This Page <strong>Fetches and caches data at build time </strong>Even though upslash api return the image everytime the page reloads, but here we see the same image unitl we re-compile the whole project :)
        </Alert>
            <Image src={image.urls.raw}
                   width = {width}
                   height = {height}
                   alt = {image.description}
                   className = "rounded mw-100 h-100 shadow"
            />
        </div>
    );
}