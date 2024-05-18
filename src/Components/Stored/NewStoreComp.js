import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
// import Context from "../Store/Context";
// import Context from "../../Store/Context";
import { useCallback } from "react";
import Compnavbar from "../Compnavbar";
import CompHeader from "../CompHeader";
import StoreForm from "./StoreForm";




const NewStoreComp = (props) => {
    // const { sideCartVisibleClick} = useContext(Context);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [addFormObj, setAddFormObj] = useState([]);

    const addFormData = (data) => {
        setAddFormObj((prevdata) => {
          return [...prevdata, data];
        })
      }


    const showProductsArr = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-http-42444-default-rtdb.firebaseio.com/movies.json');
            if (!response.ok) {
                throw new Error('Something went wrong ....Retrying');
            }
            const data = await response.json();
            // console.log(data);
            const arr = [];
            for (const key in data) {
                arr.push(...data[key])
            }
            // console.log(arr.title);
            setMovies(arr);
            setIsLoading(false);
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false);
    }, [])

    useEffect(() => {
        showProductsArr();
    }, [showProductsArr]);

    async function addMovieHandler(addFormObj) {
        const response = await fetch('https://react-http-42444-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(addFormObj),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    }
    useEffect(() => {
        addMovieHandler(addFormObj);
    }, [addMovieHandler]);
    // addMovieHandler(addFormObj);

    function deleteItem(index){
        let x = movies.filter((_, id) => {return id !== index})
        setMovies(x);
        // console.log(id);
    }

    return (
        <>
            <Compnavbar />
            <CompHeader />
            <StoreForm addFormData={addFormData}/>
            <button onClick={showProductsArr}>fetch movies</button>
            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "15%" }}>
                {!isLoading && movies.map((product, index) => (
                    <Card className="w-40 my-5" key={index}>
                        <Card.Body className="border-none">
                        <Card.Title className="text-center">{index+1}</Card.Title>
                            <Card.Title className="text-center">{product.title}</Card.Title>
                            <Card.Title className="text-center">{product.text}</Card.Title>
                            <Card.Title className="text-center">{product.date}</Card.Title>
                            <div className="container-fluid d-flex align-items-center justify-content-between">
                                <Button variant="primary"
                                onClick={() => deleteItem(index)}
                                    // onClick={() => addAtSideCard(product)}
                                >Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}

                {!isLoading && movies.length === 0 && !error && <p>found no movies</p>}
                {isLoading && <p>Loading...</p>}
                {!isLoading && error && <p>{error}</p>}
            </div>
        </>
    )
}

export default NewStoreComp;