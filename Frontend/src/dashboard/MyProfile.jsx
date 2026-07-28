import React from "react";
import { useAuth } from "../context/AuthProvider";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x240?text=No+Image";

const resolveImageUrl = (photo) => {
  if (!photo) return PLACEHOLDER_IMAGE;
  if (typeof photo === "string") return photo;
  if (typeof photo === "object") {
    return photo.url || photo.secure_url || photo.image || photo.src || photo.link || PLACEHOLDER_IMAGE;
  }
  return PLACEHOLDER_IMAGE;
};

function MyProfile() {
  const { profile } = useAuth();
  const user = profile?.user;
  const [photoSrc, setPhotoSrc] = React.useState(() =>
    resolveImageUrl(user?.photo || user?.avatar || user?.image || user?.profileImage)
  );

  React.useEffect(() => {
    setPhotoSrc(resolveImageUrl(user?.photo || user?.avatar || user?.image || user?.profileImage));
  }, [user]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
          <p className="text-gray-700">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
        <div className="relative">
          <img
            src={photoSrc}
            alt={user.name || "avatar"}
            className="w-full h-48 object-cover"
            onError={() => setPhotoSrc(PLACEHOLDER_IMAGE)}
          />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
            <img
              src={photoSrc}
              alt={user.name || "avatar"}
              className="w-24 h-24 rounded-full mx-auto border-4 border-gray-700 bg-white"
              onError={() => setPhotoSrc(PLACEHOLDER_IMAGE)}
            />
          </div>
        </div>
        <div className="px-6 py-8 mt-2">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            {user.name || "No Name"}
          </h2>
          <p className="text-center text-gray-600 mt-2">{user.email || "No email provided"}</p>
          <p className="text-center text-gray-600 mt-2">{user.phone || "No phone provided"}</p>
          <p className="text-center text-gray-600 mt-2">{user.role || "No role assigned"}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
