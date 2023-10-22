import Image from "next/image";
import axios from "axios";
import styles from "./TopicPage.module.css" ;
import {UnsplashImage} from "@/models/unsplash-image";
import {Alert} from "@/components/bootstrap";
export const revalidate = 0;

interface PageProps {
    params : {
        topic : string
    }
}

// export const DynamicParams = false; this is to only access params in the below function :_)

export function generateStaticParams () {
    return ["apple" , "banana" , "codeing"].map(topic => ({ topic }));
}

export default async function page({params : { topic }} : PageProps) {
    const response = await axios.get(`https://api.unsplash.com/photos/random?query=${topic}&count=4&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const images : UnsplashImage[] = await response.data;

    return(
        <div>
            <Alert>
                This page uses <strong>generateStaticParams</strong> to render ans cache static pages at build time, even though the url has a dynamic parameter. Pages that are not includeed in gerateStaticParams will be fetched & rendered on first access and then <strong>cached for subsequent requests</strong> (This can be disabled) :)
            </Alert>
            <h1>{topic}</h1>
            {
                images.map((image) => (
                    <Image
                        src={image.urls.raw}
                        width={250}
                        height={250}
                        alt={image.description}
                        key={image.urls.raw}
                        className={styles.image}
                    />
                ))
            }
        </div>
    );
}