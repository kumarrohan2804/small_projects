import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Pagination from './Pagination';

const ContactBody = () => {
    const [users,setUsers]=React.useState([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [totalPage,setTotalPage]=useState(0);

    useEffect(()=>{
        setLoading(true);
        axios.get(`https://reqres.in/api/users?page=${page}`)
            .then(res=>{
                console.log(res.data);
                setUsers(res.data.data);
                setPage(1);
                setTotalPage(res.data.total_pages+1);
                setLoading(false);
            });
    },[page]);

    return (
        <div>
            {loading ? 
                <div>
                    <h3>The Content is Loading .....</h3>
                </div>
            :
                <>
                    <div>
                        {users && users.map((user)=>{
                            return (
                                <div key={user.id}>
                                    <Card user={user}/>
                                </div>
                                
                            );
                        })}
                    </div>
                    <div>
                        <Pagination noOfPages={totalPage}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ContactBody