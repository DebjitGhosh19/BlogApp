import User from "../model/user.model.js";
import bcrypt from 'bcrypt';

export const register=async (req,res) => {
 const {name,email,phone,password,education,role,}=req.body;
 console.log(name,email,phone,password,education,role);
 
    const imageUrl = req.file.path; 
 
     try {
      // Check if user with the same email or phone already exists
        let userExists = await User.findOne({ $or: [{ email }, { phone }] });
        if (userExists) {
            return res.status(400).json({ 
                success: false, 
                message: 'User with this email or phone already exists  '
            });
        }

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            phone,
            password,
            education,
            role,
           image: imageUrl 
        });

         // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);


        await newUser.save();

     
        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error('Registration Error:', error.message);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error, please try again later'
        });
    }
};
 
  
