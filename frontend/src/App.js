
import './App.css';
import {Routes, Route} from 'react-router-dom'
import AdminHomepage from './pages/Homepage/adminHomepage';
import InitialHomepage from './pages/Homepage/initialHomepage';
import UserHomepage from './pages/Homepage/userHomepage';
import SearchUsers from './pages/Users/searchUsers';
import UpdateProfile from './pages/Users/UpdateProfile';

import SearchLocations from './pages/Location/SearchLocation';
import ManageLocations from './pages/Location/ManageLocation';
import UserLocation from './pages/Location/UserLocation';
import ViewLocations from './pages/Location/viewLocations';

import SearchTransport from './pages/Transportation/SearchTransportation';
import ManageTransportation from './pages/Transportation/ManageTransportation';
import UserTransportation from './pages/Transportation/UserTransportation';

import SearchAccommodation from './pages/Accommodation/SearchAccommodation';
import ManageAccommodation from './pages/Accommodation/ManageAccommodation';
import UserAccommodation from './pages/Accommodation/UserAccommodation';
import ViewAccommodations from './pages/Accommodation/ViewAccommodation';

import SearchActivities from './pages/Activities/SearchActivities';
import ManageActivities from './pages/Activities/ManageActivities';
import UserActivitiesAll from './pages/Activities/UserActivities';
import ViewActivities from './pages/Activities/ViewActivities';

import SearchBooking from './pages/Booking/searchBookings';
import ManageBooking from './pages/Booking/ManageBookings';
import UserBooking from './pages/Booking/UserBookings';

import SearchPlan from './pages/Plans/searchPlans';
import ManagePlans from './pages/Plans/ManagePlans';
import UserPlans from './pages/Plans/UserPlans';


import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';

import SearchReviews from './pages/Reviews/SearchReviews';
import ManageReview from './pages/Reviews/ManageReviews';
import UserReviews from './pages/Reviews/UserReviews';

import React from 'react'




function App() {
  return (

    <div>
      <Routes>
      <Route path="/" element={<InitialHomepage/>} />
        <Route path="/admin" element={<AdminHomepage/>}/>
        <Route path="/user" element={<UserHomepage/>}/>
        <Route path="/searchUsers" element={<SearchUsers/>}/>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>

        <Route path="/searchLocations" element={<SearchLocations/>}/>
        <Route path="/manageLocations" element={<ManageLocations/>}/>
        <Route path="/Locations" element={<UserLocation/>}/>
        <Route path="/viewLocations" element={<ViewLocations/>}/>

        <Route path="/searchTransport" element={<SearchTransport/>}/>
        <Route path="/manageTransport" element={<ManageTransportation/>}/>
        <Route path="/Transportation" element={<UserTransportation/>}/>

        <Route path="/searchAccommodation" element={<SearchAccommodation/>}/>
        <Route path="/manageAccommodations" element={<ManageAccommodation/>}/>
        <Route path="/Accommodation" element={<UserAccommodation/>}/>
        <Route path="/viewAccommodations" element={<ViewAccommodations/>}/>

        <Route path="/searchActivities" element={<SearchActivities/>}/>
        <Route path="/manageActivities" element={<ManageActivities/>}/>
        <Route path="/Activities" element={<UserActivitiesAll/>}/>
        <Route path="/viewActivities" element={<ViewActivities/>}/>

        <Route path="/searchBooking" element={<SearchBooking/>}/>
        <Route path="/manageBookings" element={<ManageBooking/>}/>
        <Route path="/Bookings" element={<UserBooking/>}/>

        <Route path="/searchPlans" element={<SearchPlan/>}/>
        <Route path="/managePlans" element={<ManagePlans/>}/>
        <Route path="/Plans" element={<UserPlans/>}/>

        <Route path="/searchReviews" element={<SearchReviews/>}/>
        <Route path="/manageReviews" element={<ManageReview/>}/>
        <Route path="/Reviews" element={<UserReviews/>}/>

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        

      </Routes>
    </div>
      
    
  );
}


export default App;
