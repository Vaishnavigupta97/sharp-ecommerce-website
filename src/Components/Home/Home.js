import { useState } from "react";
import CompHeader from "../CompHeader";
import Compnavbar from "../Compnavbar";
import classes from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";


function Home() {
    // const [movies, setMoves] = useState([]);
    // function fetchMoviesHandler(){
    //     fetch("https://swapi.dev/api/films")
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         const transForemMovies = data.results.map(movieData => {
    //             return {
    //                 id : movieData.episode_id,
    //                 title: movieData.title,
    //                 openingText : movieData.opening_crawl,
    //                 relaseDate : movieData.release_date
    //             }
    //         })
    //         setMoves(data.results);
    //     })
    // }
    return (
        <>
        {/* <btuuon onClick={fetchMoviesHandler}>{movies} click me</btuuon> */}
        {/* console.log(movies) */}
            <Compnavbar />
            <div className={classes.latestAlbum}>
            <CompHeader />
                <Container fluid className="bg-secondary">
                    <Row>
                        <Col className="mt-3 mb-5 fs-1 text-center">Get our Latest album</Col>
                    </Row>
                    {/* <video></video> */}
                </Container>
            </div>
            <div>
                <h1>Tours</h1>
                <div>
                    <div className={classes.tableContainer}>
                        <div className={classes.dateContain}>JUL16</div>
                        <div>DETROIT, MI</div>
                        <div>DTE ENERGY MUSIC THEATRE</div>
                        <div className={classes.buyButton}><button>Buy Tickets</button></div>
                    </div>
                    <div className={classes.tableContainer}>
                        <div className={classes.dateContain}>JUL19</div>
                        <div>TORONTO,ON</div>
                        <div>BUDWEISER STAGE</div>
                        <div className={classes.buyButton}><button>Buy Tickets</button></div>
                    </div>
                    <div className={classes.tableContainer}>
                        <div className={classes.dateContain}>JUL 22</div>
                        <div>BRISTOW, VA</div>
                        <div>JIGGY LUBE LIVE</div>
                        <div className={classes.buyButton}><button>Buy Tickets</button></div>
                    </div>
                    <div className={classes.tableContainer}>
                        <div className={classes.dateContain}>JUL 29</div>
                        <div>PHOENIX, AZ</div>
                        <div>AK-CHIN PAVILION</div>
                        <div className={classes.buyButton}><button>Buy Tickets</button></div>
                    </div>
                    <div className={classes.tableContainer}>
                        <div className={classes.dateContain}>AUG 2</div>
                        <div>LAS VEGAS, NV</div>
                        <div>T-MOBILE ARENA</div>
                        <div className={classes.buyButton}><button>Buy Tickets</button></div>
                    </div>
                    <div className={classes.tableContainer}>
                        <div className={classes.dateContain}>AUG 7</div>
                        <div>CONCORD, CA</div>
                        <div>CONCORD PAVILION</div>
                        <div className={classes.buyButton}><button>Buy Tickets</button></div>
                    </div>
                </div>
            </div>

            <div className={classes.homeBottom}>
                <h1>The Generic</h1>
            </div>

        </>
    )
}

export default Home;