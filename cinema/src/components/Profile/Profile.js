import React, { useState, useEffect } from 'react';
import "./Profile.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Profile = () => {

    const iduser = localStorage.getItem('id')
    if(!iduser){
        location.push('/')

    }




    const location = useHistory()

    let userId = localStorage.getItem('id')

    const [Persons, setapi] = useState([]);

    const [movies, setMovies] = useState([]);

    const [singleMovies, setSingleMovies] = useState([]);
    const [movName, setmovName] = useState([]);


    const mov = []
    const namemovie = []





    // user api
    useEffect(
        () => {
            axios.get(`https://62c52d60a361f725127c1c74.mockapi.io/users/${iduser}`)
                .then((res) => setapi(res.data))
        }
        , [])


    // reservations api
    useEffect(
        () => {
            axios.get(`https://62baba8b573ca8f83289f6c8.mockapi.io/reservations?user_id=${iduser}`)
                .then((res) => setMovies(res.data))
        }
        , [])



    movies.map(a => mov.push(a.id))


    //movies name api
    // useEffect(
    //     () => {
    //         axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
    //             .then((res) => setSingleMovies(res.data))
    //     }
    //     , [])

    // let w=''
    // mov.map(a => {
    //         axios.get(`https://api.themoviedb.org/3/movie/${a}?api_key=6bd2f87c212a016945bb7783c8671cc2`)
    //             .then((res) => w=res.data.title)

    //             namemovie.push(w)
    //     }



    //     )




    // console.log("mov ", mov)


    const handleToEdit = () => {
        location.push('/edit')
    }


    // console.log(movies)
    // console.log(Persons)
    // console.log("single", singleMovies)

    // console.log("name ", movName)


    return (
        <React.Fragment>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className='prof'>
                <div className="container bootdey d-flex flex-column container-p-y pt-5 mt-5"  >

                    <div>
                        <div className="media   py-3 mb-3">
                            <img src="user-gray.jpg" alt="User Photo" className="d-block ui-w-100 rounded-circle" />

                        </div>
                        <div className="media   py-3 mb-3">
                            {/* <h4 className="font-weight-bold mb-0 text-white">John Doe<span className="text-white font-weight-normal">@johndoe</span></h4> */}
                            <h4 className="font-weight-bold mb-0 text-white">{Persons.name}</h4>
                            <div className="text-muted mb-2"></div>

                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className="media   py-3 mb-3">
                                    <button className="btn btn-success px-4 btn-sm" onClick={handleToEdit}>Edit Profile</button>&nbsp;
                                    {/* <a className="btn btn-success px-4 btn-sm">log out</a>&nbsp; */}
                                </div>

                            </div>
                            <div className='col-7'>
                                <h3 className='text-white'>Views History</h3>
                            </div>

                        </div>


                    </div>


                    <div className='row ' >

                        <div className='col pr-5 '>
                            <div className="card mb-4  bg-dark ">
                                <div className="card-body bg-dark" >
                                    <table className="table user-view-table m-0 table-dark ">
                                        <tbody>
                                            <tr>
                                                <td>User Name :</td>
                                                <td> {Persons.name} </td>
                                            </tr>
                                            <tr>
                                                <td>E-mail :</td>
                                                <td> {Persons.email} </td>
                                            </tr>
     
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='col col-7'>

                            <div className="card mb-4 bg-dark" id='movi'>

                                <div className="card-body bg-dark " id='movi'>
                                    <div className="table" id='movi' >

                                        <table className="table card-table m-0 table-dark " id='movit'>
                                            <tbody>
                                                <tr>
                                                    <th>Movies</th>
                                                    <th>day </th>
                                                    <th>time</th>
                                                    <th>Total coast</th>

                                                </tr>
                           



                                                {movies.map((a, b) =>

                                                    <tr>
                                                        <td>{a.movie_name}</td>
                                                        <td>{a.day}</td>
                                                        <td>{a.time}</td>
                                                        <td>{a.price}</td>

                                                    </tr>

                                                )}

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr className="border-light m-0" />


                    </div>

                </div>

            </div>
        </React.Fragment >
    );
}

export default Profile;