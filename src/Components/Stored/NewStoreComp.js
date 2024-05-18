import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
// import Context from "../Store/Context";
// import Context from "../../Store/Context";
import { useCallback } from "react";
import Compnavbar from "../Compnavbar";
import CompHeader from "../CompHeader";
import StoreForm from "./StoreForm";
import classes from "./NewStoreComp.module.css";




const NewStoreComp = (props) => {
    // const { sideCartVisibleClick} = useContext(Context);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [addFormObj, setAddFormObj] = useState([]);

    // const addFormData = (data) => {
    //     setAddFormObj((prevdata) => {
    //       return [...prevdata, data];
    //     })
    //   }


    const showProductsArr = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-http-42444-default-rtdb.firebaseio.com/movies.json');
            console.log(response.ok);

            if (!response.ok) {
                throw new Error('Something went wrong ....Retrying');
            }
            const data = await response.json();

            const arr = [];
            // for (const key in data) {
            //     arr.push({...data[key], id: key});
            // }
            for (const key in data) {
                console.log(key);
                arr.push({
                    id: key,
                    title: data[key].title,
                    text: data[key].text,
                    date: data[key].date
                });
            }
            console.log(data.id);

            setMovies(arr);
            setIsLoading(false);
            console.log(response);
            console.log(data);
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false);
    }, [])

    useEffect(() => {
        showProductsArr();
    }, [showProductsArr]);

    async function deleteItem(id) {
        let x = movies.filter((item) => { return item.id !== id })
        setMovies(x);
        const response = await fetch(`https://react-http-42444-default-rtdb.firebaseio.com/movies/${id}.json`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },

        })
        console.log(id);
    }


    return (
        <>
            <Compnavbar />
            <CompHeader />
            <StoreForm
                showProductsArr={showProductsArr}
            // addFormData={addFormData}
            />
            <div className={classes.fetchMovieParentBtn}>
                <button variant="primary" className={classes.fetchMovieBtn} onClick={showProductsArr}>fetch movies</button>
            </div>
            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "15%" }}>
                {!isLoading && movies.map((product, index) => (
                    // {$console.log(product.id)}
                    <Card className="w-40 my-5" key={index}>
                        <Card.Body className="border-none">
                            <Card.Title className="text-center">{index + 1}</Card.Title>
                            <Card.Title className="text-center">{product.title}</Card.Title>
                            <Card.Title className="text-center">{product.text}</Card.Title>
                            <Card.Title className="text-center">{product.date}</Card.Title>
                            <div className="container-fluid d-flex align-items-center justify-content-between">
                                <Button variant="primary"
                                    onClick={() => deleteItem(movies[index].id)}
                                // onClick={() => addAtSideCard(product)}
                                >Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}

                {!isLoading && movies.length === 0 && !error && <p>found no movies</p>}
                {isLoading && <p>Loading...</p>}
                {/* {!isLoading && error && <p>{error}</p>} */}
            </div>
        </>
    )
}

export default NewStoreComp;