import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import CourseMenu from './Pages/CourseMenu/CourseMenu';
import Booking from './Pages/Booking/Booking';

import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyBookings from './Pages/Dashboard/MyBookings/MyBookings';
import ManageBookings from './Pages/Dashboard/ManageBookings/ManageBookings';
import PostReview from './Pages/Dashboard/PostReview/PostReview';
import AddCourse from './Pages/Dashboard/AddCourse/AddCourse';
import ManageCourses from './Pages/Dashboard/ManageCourses/ManageCourses';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/courses' element={<CourseMenu />} />

            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='/dashboard' element={<DashboardHome />} />
              <Route exact path={'/dashboard/my_bookings'} element={<MyBookings />} />
              <Route exact path={'/dashboard/review'} element={<PostReview />} />

              {/* Admin Route */}
              <Route exact path={'/dashboard/admin'} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route exact path={'/dashboard/manage_bookings'} element={<AdminRoute><ManageBookings /></AdminRoute>} />
              <Route exact path={'/dashboard/manage_courses'} element={<AdminRoute><ManageCourses /></AdminRoute>} />
              <Route exact path={'/dashboard/add_course'} element={<AdminRoute><AddCourse /></AdminRoute>} />
            </Route>

            {/* <Route path='/review' element={<PostReview />} /> */}
            <Route path='/booking/:id' element={<PrivateRoute><Booking /></PrivateRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
