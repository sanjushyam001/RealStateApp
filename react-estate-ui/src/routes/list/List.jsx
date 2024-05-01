import React, { Suspense } from "react";
import { listData } from "../../lib/dummydata.js";
import "./List.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map.jsx";
import { Await, defer, useLoaderData } from "react-router-dom";
const List = () => {
    const listData = useLoaderData();
    return (
        <div className="list">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    <Suspense fallback={<p>Loading ....</p>}>
                        <Await
                            resolve={listData.postResponse}
                            errorElement={<p>Error loading in post!</p>}
                        >
                            {(postResponse) =>
                                postResponse.data.map((post) => (
                                    <Card key={post.id} item={post} />
                                ))
                            }
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="mapContainer">
                <Suspense fallback={<p>Loading ....</p>}>
                    <Await
                        resolve={listData.postResponse}
                        errorElement={<p>Error loading ....</p>}
                    >
                        {(postResponse) => <Map items={postResponse.data} />}
                    </Await>
                </Suspense>
                
            </div>
        </div>
    );
};

export default List;
