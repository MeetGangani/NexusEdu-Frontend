import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCredentials } from '../slices/authSlice';
import Hero from '../components/Hero';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';
import InstituteDashboard from './InstituteDashboard';

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Check for login success and token in URL
    const searchParams = new URLSearchParams(location.search);
    const loginSuccess = searchParams.get('loginSuccess');
    const token = searchParams.get('token');
    
    if (loginSuccess === 'true' && token) {
      // Get userInfo from localStorage
      const userInfoData = JSON.parse(localStorage.getItem('userInfo') || '{}');
      if (userInfoData) {
        // Store token
        localStorage.setItem('token', token);
        dispatch(setCredentials(userInfoData));
      }
      // Clean up the URL
      window.history.replaceState({}, document.title, '/');
    }
  }, [dispatch, location]);

  return (
    <div className="min-h-screen bg-gray-50">
      {userInfo ? (
        <>
          {userInfo.userType === 'admin' && <AdminDashboard />}
          {userInfo.userType === 'institute' && <InstituteDashboard />}
          {userInfo.userType === 'student' && <StudentDashboard />}
        </>
      ) : (
        <Hero />
      )}
    </div>
  );
};

export default HomeScreen;
