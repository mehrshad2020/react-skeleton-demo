import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './DataFetcher.css';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 6000));
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="data-container">
        <h2 className="data-title">لیست کاربران</h2>
        <div className="skeleton-container">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="skeleton-card">
              <Skeleton height={30} width={200} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="data-container error">
        <h2 className="data-title">خطا در دریافت داده‌ها</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="data-container">
      <h2 className="data-title">لیست کاربران</h2>
      <div className="user-list">
        {data.map(user => (
          <div key={user.id} className="user-card">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
            <p className="user-website">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetcher; 