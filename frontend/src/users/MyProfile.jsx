import React, { useEffect, useState } from 'react';
import { getUsers } from './UsersData.js';
import { useNavigate } from 'react-router-dom';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import styles from './MyProfile.module.css'; 

export default function MyProfile() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
         setUsersData(getUsers());
    }, []);

    const username = usersData.length > 0 ? usersData[0].username : '';
    const email = usersData.length > 0 ? usersData[0].email : '';
    const navigate =useNavigate();
    function handleCross(){
      navigate("/");

    }

  return (
    <div className={styles['gradient-custom-2']}>
      <MDBContainer className="py-5 h-100">
        <div className={styles.cross}>
        <button onClick={handleCross}> <i class="fa-solid fa-xmark"></i></button>
        </div>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="" xl="">
            <MDBCard>
              <div className={`rounded-top text-white d-flex flex-row ${styles['rounded-top']}`}>
                <div className={`ms-4 mt-5 d-flex flex-column ${styles['ms-4']}`}>
                  <MDBCardImage src="https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg"
                    alt="Generic placeholder image" className={`mt-4 mb-2 img-thumbnail ${styles['img-thumbnail']}`} fluid />
                  <MDBBtn  className={styles['editbtn']}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className={`ms-3 ${styles['ms-3']}`}>
                  <MDBTypography tag="h5">{username}</MDBTypography>
                  <MDBCardText>{email}</MDBCardText>
                </div>
              </div>
              <div className = {styles['p']}></div>
              <div className="d-flex  justify-content-center text-center py-1 h-100">
                 <div>
                  <MDBCardText className="mb-1 h5">0</MDBCardText>
                   <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                 </div>
                 <div className="px-3">
                   <MDBCardText className="mb-1 h5">0</MDBCardText>
                   <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                 </div>
                 <div>
                    <MDBCardText className="mb-1 h5">0</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                 </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
