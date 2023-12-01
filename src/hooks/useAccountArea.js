import { useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";
import { useState } from "react";

export const useAccountArea = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async (token) => {
    try {
      const response = await fetch("https://api.productly.app/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(`Error fetching prodcuts: ${error}`);
      setError(`Error fetching products. Please try again`);
    }
  };

  const handleToken = () => {
    const token = localStorage.getItem("productly");
    if (!token) {
      navigate("/login");
    } else {
      const decodeUser = jwt_decode(token);
      setUser(decodeUser);
      fetchProducts(decodeUser);
    }
  };

  useEffect(() => {
    handleToken();
  }, [navigate]);

  return {
    products,
    error,
  };
};
