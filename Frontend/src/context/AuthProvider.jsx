import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState();
  const [profile, setProfile] = useState();
  // initialize blogs as empty array to avoid undefined usages
  // initialize profile as null
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // token should be let type variable because its value will change in every login. (in backend also)
        let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
        if (!token) {
          setProfile(null);
          setIsAuthenticated(false);
          return;
        }

        // attach token to Authorization header
        const { data } = await axios.get("http://localhost:4001/api/users/my-profile", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(data?.user || null);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("fetchProfile error:", error);
        setProfile(null);
        setIsAuthenticated(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/blogs/all-blogs`,
          { withCredentials: true }
        );
        // depending on backend response shape, prefer data.blogs fallback to entire data
        setBlogs(data?.blogs ?? data ?? []);
      } catch (error) {
        console.error("fetchBlogs error:", error);
        setBlogs([]);
      }
    };

    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
