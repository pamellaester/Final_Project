import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CheckListCard from "../../components/CheckListCard/CheckListCard";
import "./CheckList.css";
import empty from '../../assets/empty.png'; 

const API_URL = "http://localhost:3000";

const CheckListPage = () => {
  const { auth } = useAuth();
  const [checkListData, setCheckListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/check-list/${auth.id}`);
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data)) {
          const sortedData = response.data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          setCheckListData(sortedData);
        } else {
          console.error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth.id]);

  return (
    <div className="checkList-section">
      {checkListData.length === 0 ? (
        <div className="info-section">
          <img src={empty} alt="Image description 1" className="section-empty" />
          <h2>Your Check List is empty!</h2>
        </div>
      ) : (
        <div className="log checklist-container">
          {checkListData.map((entry, index) => (
            <CheckListCard key={index} data={entry} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckListPage;
