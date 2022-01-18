import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {
    const [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetchData(page);
    }, [])

    const fetchData = (page) => {
        fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
            .then(res => {
                if (res.ok) {
                    setLoader(true);
                    return res.json();
                } else {
                    return Promise.reject({ status: res.status, statusText: res.statusText });
                }
            })
            .then(res => {
                if (page > 1) {
                    let resultAr = [
                        ...data, ...res.results
                    ];
                    setData(resultAr);
                }
                else {
                    setData(res.results);
                }
                setLoader(false);
            })
            .catch(err => console.log("Error, with message:", err.statusText));
    }

    const handleLoadMore = (e) => {
        let bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
        if (bottom) {
            let page_ = page + 1;
            fetchData(page_);
            setLoader(true);
            setPage(page_);
        }
    }

    return (
        <div onScroll={handleLoadMore} className="table-wrap">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(itm => {
                            return (
                                <tr>
                                    <td>{itm.name["first"]}</td>
                                    <td><img src={itm.picture["thumbnail"]} alt="" /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        </div>
    );
};

export default Home;