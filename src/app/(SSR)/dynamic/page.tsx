import {UnsplashImage} from "@/models/unsplash-image";
import Image from "next/image";
import axios from "axios";
import {Alert} from "@/components/bootstrap";

export const metadata = {
    title: "Dynamic fetching - Next.Js 13.4"
}

export const revalidate = 0;
// This is the one way to set dynamic page other one is below
// the main difference between two ways that the levels it is declared this method to set dynamic page is for the whole page level
// but other one is only for the a specific fetch request

export default async function Dynamic() {
    const response = await axios.get("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
        {
            // cache : "no-cache"
            // next : { revalidate = 0 }  // This can also be done
        }
        // after a comma (after the url) set a json a set cache to no-cache or no-store the both use the same hook !
    );
    const image: UnsplashImage = await response.data;

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>Fetches the data dynamically</strong> Everytime you refeshes the page you get a new
                image by upslash api :)
            </Alert>
            <Image src={image.urls.raw}
                   width={width}
                   height={height}
                   alt={image.description}
                   className="rounded mw-100 h-100 shadow"
            />
        </div>
    );
}