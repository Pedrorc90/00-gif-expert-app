import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );    

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && <h2>Loading...</h2> }
            <div className="card-grid">
                {  images.map( ({ id, title, url }) => <GifItem key={ id } title={ title } url={ url }/> ) }
            </div>

        </>
        
    )
}