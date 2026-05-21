import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Cloudinary কনফিগারেশন
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary স্টোরেজ তৈরি
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mern_uploads', 
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

// Multer মিডলওয়্যার
const upload = multer({ storage: storage });

export default upload;
