import React, { useEffect, useState } from "react";
import TourDescription from "../../components/TourDescription/TourDescription";
import TourDetailsBanner from "../../components/TourDetailsBanner/TourDetailsBanner";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const TourDetails = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState({});

  // useEffect(() => {
  //   //Load single which was clicked by user
  //   const loadSingleTour = async () => {
  //     const response = await fetch(
  //       `https://holiday-dreams.herokuapp.com/tours/${tourId}`
  //     );
  //     const responseData = await response.json();
  //     setTour(responseData);
  //   };
  //   loadSingleTour();
  // }, [tourId]);
  useEffect(() => {
    // Load single tour data based on tourId
    const loadSingleTour = async () => {
      try {
        // Initialize Firebase Firestore
        const db = getFirestore();
        
        // Reference to the specific tour document in Firebase
        const tourDocRef = doc(db, "newTour", tourId);
        
        // Fetch the tour data from Firebase
        const tourDocSnapshot = await getDoc(tourDocRef);
        
        // Check if the document exists
        if (tourDocSnapshot.exists()) {
          // Extract the data from the snapshot and set it in state
          setTour(tourDocSnapshot.data());
        } else {
          console.error("Tour not found in Firebase.");
        }
      } catch (error) {
        console.error("Error loading tour details:", error);
      }
    };
    
    loadSingleTour();
  }, [tourId]);
  return (
    <>
      <TourDetailsBanner tour={tour} />
      <TourDescription tour={tour} />
    </>
  );
};

export default TourDetails;
