// import React,{useState} from 'react'
// import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import Avatar from '../../components/Avatar/Avatar'
// import {useSelector} from 'react-redux'
// import {useParams} from 'react-router'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBirthdayCake,faPen} from '@fortawesome/free-solid-svg-icons'
// import moment from 'moment'
// import EditProfileForm from './EditProfileForm'
// import ProfileBio from './ProfileBio'
// import './UserProfile.css'

// const UserProfile = ({ slideIn, handleSlideIn }) => {

//     const { id } = useParams()
//     const users =  useSelector((state)=>state.usersReducer)
//     const currentProfile = users.filter((user)=>user._id === id)[0]
//     const currentUser = useSelector((state)=> state.currentUserReducer)

//     // const handleEdit = ()=>{

       

//     // }


//     const [Switch,setSwitch]= useState(false)

//   return (
//     <div className="home-container-1">
//         {/* <LeftSidebar/> */}
//         <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
     
//         <div className="home-container-2">
//             <section>
//                 <div className="user-details-container">
//                     <div className="user-details" style={{paddingTop:"50px"}}>
                       

// <Avatar backgroundColor="purple" color="black" fontSize="50px" px='40px' py='30px'>
// {currentProfile?.name.charAt(0).toUpperCase()} 
// </Avatar>

// <div className="user-name">
//     <h1>
//         {currentProfile?.name}
// <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
//     </h1>
// </div>

//                     </div>
//                     {currentUser?.result._id === id && (
//                         <button type='button' onClick={()=>setSwitch(true)} className='edit-profile-btn'>
// <FontAwesomeIcon icon ={faPen}  /> Edit Profile
//                         </button>
//                     )} 
//                 </div>

//                 <>
//                 {
//                     Switch ? (
//                         <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
//                     ):(
//                         <ProfileBio currentProfile={currentProfile}/>
//                     )
//                 }
//                 </>
//             </section>
//         </div>
        

//     </div>
//   )
// }

// export default UserProfile

import React, { useState } from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import './UserProfile.css';

const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);

  const [Switch, setSwitch] = useState(false);

  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details" style={{ paddingTop: '50px' }}>
              <div className="profile-table">
                <table>
                  <thead>
                    <tr>
                      <th>Logo</th>
                      <th>Name</th>
                      <th>Joined</th>
                      {currentUser?.result._id === id && <th>Edit</th>}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="profile-avatar">
                          {currentProfile?.name.charAt(0).toUpperCase()}
                        </div>
                      </td>
                      <td>{currentProfile?.name}</td>
                      <td>
                        <p>
                          <FontAwesomeIcon icon={faBirthdayCake} /> Joined{' '}
                          {moment(currentProfile?.joinedOn).fromNow()}
                        </p>
                      </td>
                      {currentUser?.result._id === id && (
                        <td>
                          <button
                            type="button"
                            onClick={() => setSwitch(true)}
                            className="edit-profile-btn"
                          >
                            <FontAwesomeIcon icon={faPen} /> Edit Profile
                          </button>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
