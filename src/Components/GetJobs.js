// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { LOAD_JOBS } from '../GraphQL/Queries';

// function GetJobs() {

//     const { error, loading, data } = useQuery(LOAD_JOBS);
//     const [abcJobs, setAbcJobs] = useState([]);
//     useEffect(() => {
//         if (data) {
//             setUsers(data.jobs);
//         }
//     }, [data]);

//     return (
//         <div>
//             {" "}
//             {users.map((val) => {
//                 return <h1> {val.abcjob}</h1>;
//             })}
//         </div>
//     )
// }

// export default GetJobs