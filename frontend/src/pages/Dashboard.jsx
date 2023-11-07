import { useEffect, useState } from "react";
import axios from "axios";

import { fetchData } from "../helpers/helpers";

const Dashboard = () => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    const mydata = fetchData();
    setData(mydata);
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full container mx-auto max-w-4xl">
      <h1>Dashboard</h1>
      {console.log(data)}
    </div>
  );
};

export default Dashboard;
